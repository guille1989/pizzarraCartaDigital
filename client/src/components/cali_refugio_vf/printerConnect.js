import Moment from 'moment';

var bluetoothDevice;

export async function onScanButtonClick(cmds, flagDomi) {
  bluetoothDevice = null;
  console.log('Requesting Bluetooth Device...');
  await navigator.bluetooth.requestDevice({
    acceptAllDevices: true,    
    optionalServices: ["0000eee2-0000-1000-8000-00805f9b34fb"]
  })
  .then(device => {
    bluetoothDevice = device;
    bluetoothDevice.addEventListener('gattserverdisconnected', onDisconnected);
    return connect(cmds, flagDomi);
  })
  .catch(error => {
    console.log('Argh! ' + error);
  });
}

async function connect(cmds, flagDomi) {
  try {
    console.log('Connecting to Bluetooth Device...');
    const server = await bluetoothDevice.gatt.connect();
    const service = await server.getPrimaryService('0000eee2-0000-1000-8000-00805f9b34fb');
    const characteristic = await service.getCharacteristic('0000eee3-0000-1000-8000-00805f9b34fb');

    const CHUNK_SIZE = 256; // Reducimos el tamaño del chunk para asegurar compatibilidad
    const encoder = new TextEncoder();
    const newLine = '\x0A';

    // Convertimos cmds a string si no lo es
    const dataString = Array.isArray(cmds) ? cmds.join('') : cmds;
    const totalLength = dataString.length;
    console.log('Total length:', totalLength);

    // Función para enviar datos en chunks
    const sendChunks = async () => {
      for (let i = 0; i < totalLength; i += CHUNK_SIZE) {
        let chunk = dataString.substring(i, Math.min(i + CHUNK_SIZE, totalLength));
        
        // Añadir newlines solo al final
        if (i + CHUNK_SIZE >= totalLength) {
          chunk += newLine + newLine + newLine;
        }

        console.log('Enviando chunk de tamaño:', chunk.length);
        const encodedChunk = encoder.encode(chunk);
        
        // Agregar pequeño retraso entre envíos
        await characteristic.writeValue(encodedChunk);
        await new Promise(resolve => setTimeout(resolve, 100)); // 100ms delay
      }
    };

    // Ejecutar una o dos veces según flagDomi
    await sendChunks();
    if (flagDomi) {
      await sendChunks();
    }

    localStorage.setItem('con', 'ok');
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
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

function onDisconnected(event) {
  // Object event.target is Bluetooth Device getting disconnected.
  console.log('> Bluetooth Device disconnected');
}


function onReconnectButtonClick() {
  if (!bluetoothDevice) {
    return;
  }
  if (bluetoothDevice.gatt.connected) {
    console.log('> Bluetooth Device is already connected');
    return;
  }
  connect()
  .catch(error => {
    console.log('Argh! ' + error);
  });
}