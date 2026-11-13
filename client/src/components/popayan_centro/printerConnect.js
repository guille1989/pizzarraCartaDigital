// Impresion por Bluetooth BLE (Web Bluetooth).
// En vez de depender de un unico UUID, se piden varios servicios comunes de
// impresoras termicas y se usa la primera caracteristica escribible que se encuentre.

var bluetoothDevice;

// Servicio historico (impresora anterior) va primero para mantener compatibilidad.
const KNOWN_SERVICES = [
  '0000eee2-0000-1000-8000-00805f9b34fb',
  '000018f0-0000-1000-8000-00805f9b34fb',
  '0000ff00-0000-1000-8000-00805f9b34fb',
  '0000fff0-0000-1000-8000-00805f9b34fb',
  '0000ffe0-0000-1000-8000-00805f9b34fb',
  '0000ffe6-0000-1000-8000-00805f9b34fb',
  '0000ae30-0000-1000-8000-00805f9b34fb',
  '0000ff80-0000-1000-8000-00805f9b34fb',
  '49535343-fe7d-4ae5-8fa9-9fafd205e455',
  'e7810a71-73ae-499d-8c15-faa9aef0c3f2',
];

const LEGACY_CHARACTERISTIC = '0000eee3-0000-1000-8000-00805f9b34fb';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function onScanButtonClick(cmds, flagDomi) {
  bluetoothDevice = null;
  // Se reinicia el estado: antes un 'ok' viejo podia dar por impreso un pedido que fallo.
  try { localStorage.removeItem('con'); } catch (e) { /* sin localStorage */ }

  console.log('Requesting Bluetooth Device...');
  try {
    bluetoothDevice = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: KNOWN_SERVICES,
    });
    bluetoothDevice.addEventListener('gattserverdisconnected', onDisconnected);
    await connect(cmds, flagDomi);
  } catch (error) {
    console.error('Error de impresion:', error);
    // Si el usuario cancela el selector no mostramos error.
    if (error && error.name === 'NotFoundError' && /cancel/i.test(error.message || '')) {
      return;
    }
    alert('No se pudo imprimir: ' + (error && error.message ? error.message : error));
  }
}

// Busca el servicio/caracteristica donde escribir.
async function findWritableCharacteristic(server) {
  const services = await server.getPrimaryServices();
  const found = [];
  let candidate = null;

  for (const service of services) {
    const characteristics = await service.getCharacteristics();
    for (const c of characteristics) {
      const props = [];
      if (c.properties.write) props.push('write');
      if (c.properties.writeWithoutResponse) props.push('writeNoResp');
      found.push(service.uuid + ' / ' + c.uuid + ' [' + props.join(',') + ']');
      if (!(c.properties.write || c.properties.writeWithoutResponse)) continue;
      // Preferimos la caracteristica historica si existe; si no, la primera escribible.
      if (c.uuid === LEGACY_CHARACTERISTIC || !candidate) {
        candidate = c;
      }
    }
  }
  console.log('Servicios/caracteristicas encontrados:', found);

  if (!candidate) {
    throw new Error(
      'La impresora no expone un servicio de escritura conocido. Servicios visibles: ' +
        (found.length ? found.join(' | ') : 'ninguno')
    );
  }
  console.log('Usando caracteristica:', candidate.service.uuid, candidate.uuid);
  return candidate;
}

async function connect(cmds, flagDomi) {
  console.log('Connecting to Bluetooth Device...');
  const server = await bluetoothDevice.gatt.connect();
  const characteristic = await findWritableCharacteristic(server);

  const encoder = new TextEncoder();
  const newLine = '\x0A';

  // Convertimos cmds a string si no lo es
  const dataString = Array.isArray(cmds) ? cmds.join('') : cmds;
  // Newlines solo al final; los bloques se miden en BYTES (con tildes, 1 caracter > 1 byte).
  const bytes = encoder.encode(dataString + newLine + newLine + newLine);
  console.log('Total bytes:', bytes.length);

  // Con respuesta: bloques grandes. Sin respuesta: bloques pequenos (limite del MTU BLE).
  const useResponse = !!characteristic.properties.write;
  const CHUNK_SIZE = useResponse ? 256 : 20;
  const DELAY = useResponse ? 100 : 30;

  const sendChunks = async () => {
    for (let i = 0; i < bytes.length; i += CHUNK_SIZE) {
      const chunk = bytes.slice(i, i + CHUNK_SIZE);
      if (useResponse) {
        await characteristic.writeValue(chunk);
      } else {
        await characteristic.writeValueWithoutResponse(chunk);
      }
      await sleep(DELAY);
    }
  };

  // Una copia, o dos si es domicilio
  await sendChunks();
  if (flagDomi) {
    await sendChunks();
  }

  localStorage.setItem('con', 'ok');
}

export function onDisconnectButtonClick() {
  if (!bluetoothDevice) {
    return;
  }
  console.log('Disconnecting from Bluetooth Device...');
  if (bluetoothDevice.gatt.connected) {
    bluetoothDevice.gatt.disconnect();
  } else {
    console.log('> Bluetooth Device is already disconnected');
  }

  return "Se termino de imprimir";
}

function onDisconnected() {
  console.log('> Bluetooth Device disconnected');
}
