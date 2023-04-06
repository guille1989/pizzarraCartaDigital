import Moment from 'moment';

var bluetoothDevice;

export async function onScanButtonClick(cmds) {
  bluetoothDevice = null;
  console.log('Requesting Bluetooth Device...');
  await navigator.bluetooth.requestDevice({
    acceptAllDevices: true,    
    optionalServices: ["0000eee2-0000-1000-8000-00805f9b34fb"]
  })
  .then(device => {
    bluetoothDevice = device;
    bluetoothDevice.addEventListener('gattserverdisconnected', onDisconnected);
    return connect(cmds);
  })
  .catch(error => {
    console.log('Argh! ' + error);
  });
}

async function connect(cmds) {

  console.log('Connecting to Bluetooth Device...');
  await bluetoothDevice.gatt.connect()
  .then(server => {
    // Getting Service…
    return server.getPrimaryService('0000eee2-0000-1000-8000-00805f9b34fb');
  })
  .then(service => {
    // Getting Characteristic…
    return service.getCharacteristic('0000eee3-0000-1000-8000-00805f9b34fb');
  })
  .then((characteristic) => {
    
    // Enviamos datos !!!…
    // Aqui crer los datos::::  
    let tamaniodato = cmds.length / 512
    let tamaniodatoaux = cmds.length/Math.ceil(tamaniodato)

    let cmdsAux = ""
    let countAux = 0
    let newLine = '\x0A';

    var enc = new TextEncoder() 
    //console.log('Tamanio Dato: ' + cmds.length)
    //console.log('Numero de iteraciones: ' + Math.ceil(tamaniodato))

    const forloop = async () => {        

      for(let i=1; i<=Math.ceil(tamaniodato); i++){

        //console.log(`iteracion ${i},  countAux:` + countAux)
        //console.log(`iteracion ${i},  tamaniodatoaux:` + tamaniodatoaux)
  
        for(let j=countAux; j<=tamaniodatoaux; j++){
          if(cmds[j]){
            cmdsAux = cmdsAux + cmds[j]
            countAux = countAux + 1
          }else{
  
          }        
        }

        if(i === Math.ceil(tamaniodato)){
          cmdsAux = cmdsAux + newLine; 
          cmdsAux = cmdsAux + newLine;
          cmdsAux = cmdsAux + newLine;
        }
  
        await characteristic.writeValue(enc.encode(cmdsAux))           
        
        tamaniodatoaux = tamaniodatoaux + countAux    
        //console.log('Tamanio del dato: ' + cmdsAux.length)
        //console.log('Datos: ' + cmdsAux)
        cmdsAux = "";
      }
      
    }
    forloop()    
    //this.toggleModalAceptar()  
    //Aqui hacemos un reset de la pagina
    //window.location.reload(false);
    //console.log(localStorage)

    /*
    setTimeout(() => {
        onDisconnectButtonClick()
    }, 3000);
    */

  })
  .catch(error => {
    console.log('Argh! ' + error);
  });
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