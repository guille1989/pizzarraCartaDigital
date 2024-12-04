const ImprimirPedidos = (cmdsAux, costoDomi, datoOrden) => {
    console.log("datoOrden", datoOrden)
  let costoTotal = 0;

  if (costoDomi) {
    costoTotal = costoTotal + parseInt(costoDomi);
  }

  //Create ESP/POS commands for sample label
  var esc = "\x1B"; //ESC byte in hex notation
  var newLine = "\x0A"; //LF byte in hex notation
  let cmds;

  cmds += cmdsAux;
  cmds += esc + "!" + "\x16";

  datoOrden.map((item, index) => {
    if (
      item.tipo.includes("CAFÉ") ||
      item.tipo.includes("CHOCOLATE") ||
      item.tipo.includes("VINO") ||
      item.tipo.includes("JUGO") ||
      item.tipo.includes("CERVEZA") ||
      item.tipo.includes("BEBIDA") ||
      item.tipo.includes("GASEOSA")
    ) {
      if (item.tipo.includes("CAFÉ")) {
        costoTotal = costoTotal + parseInt(item.costo_tinto);
        cmds += "-Bebida: " + item.tipo;
        cmds += newLine;
        cmds += item.mod_sabor_cafe;
        cmds += newLine;
        cmds += "Costo: " + item.costo_tinto;
        cmds += newLine;
      } else if (item.tipo.includes("CHOCOLATE")) {
        costoTotal = costoTotal + parseInt(item.costo_chocolate);
        cmds += "-Bebida: " + item.tipo;
        cmds += newLine;
        cmds += item.mod_sabor_chocolate;
        cmds += newLine;
        cmds += "Costo: " + item.costo_chocolate;
        cmds += newLine;
      } else if (item.tipo.includes("JUGO")) {
        costoTotal = costoTotal + parseInt(item.costo_jugo);
        cmds += "-Bebida: " + item.tipo;
        cmds += newLine;
        cmds += item.mod_sabor_jugo;
        cmds += newLine;
        cmds += "Costo: " + item.costo_jugo;
        cmds += newLine;
      } else if (item.tipo.includes("GASEOSA")) {
        costoTotal = costoTotal + parseInt(item.costo_gaseosa);
        cmds += "-Bebida: " + item.tipo;
        cmds += newLine;
        cmds += item.mod_sabor_gaseosa;
        cmds += newLine;
        cmds += "Costo: " + item.costo_gaseosa;
        cmds += newLine;
      } else if (item.tipo.includes("VINO")) {
        costoTotal = costoTotal + parseInt(item.costo_vino);
        cmds += "-Bebida: " + item.tipo;
        cmds += newLine;
        cmds += "Costo: " + item.costo_vino;
        cmds += newLine;
      } else if (item.tipo.includes("CERVEZA")) {
        costoTotal = costoTotal + parseInt(item.costo_cerveza);
        cmds += "-Bebida: " + item.tipo;
        cmds += newLine;
        cmds += item.mod_sabor_cerveza;
        cmds += newLine;
        cmds += "Costo: " + item.costo_cerveza;
        cmds += newLine;
      } else if (item.tipo.includes("BEBIDA")) {
        costoTotal = costoTotal + parseInt(item.costo_bebida);
        cmds += "-Bebida: " + item.tipo;
        cmds += newLine;
        cmds += item.mod_sabor_bebida;
        cmds += newLine;
        cmds += "Costo: " + item.costo_bebida;
        cmds += newLine;
      }
    }
    ///
    if (item.tipo.includes("GRANDE COMPLETA")) {
      costoTotal =
        costoTotal +
        parseInt(item.costo_grande) +
        parseInt(item.costo_adiciones_grande);
      cmds += "-" + item.tipo;
      cmds += newLine;
      cmds += "Sabor: " + item.sabor_grande;

      //console.log(item.mod_sabor_grande)
      if (item.mod_sabor_grande) {
        cmds += newLine;
        cmds += "+/- Adiciones: " + item.mod_sabor_grande;
      }
      if (item.ind_grande_adicional) {
        cmds += newLine;
        cmds += "Observaciones: " + item.ind_grande_adicional;
      }
      cmds += newLine;
      cmds =
        cmds +
        "Costo: " +
        (parseInt(item.costo_grande) + parseInt(item.costo_adiciones_grande));
      cmds += newLine;
    } else if (item.tipo.includes("PERSONAL COMPLETA")) {
      costoTotal =
        costoTotal +
        parseInt(item.costo_personal) +
        parseInt(item.costo_adiciones);
      cmds += "-" + item.tipo;
      cmds += newLine;
      cmds += "Sabor: " + item.sabor_personal;

      if (item.mod_sabor_personal) {
        cmds += newLine;
        cmds += "+/- Adiciones: " + item.mod_sabor_personal;
      }
      if (item.ind_personal_adicional) {
        cmds += newLine;
        cmds += "Observaciones: " + item.ind_personal_adicional;
      }
      cmds += newLine;
      cmds =
        cmds +
        "Costo: " +
        (parseInt(item.costo_personal) + parseInt(item.costo_adiciones));
      cmds += newLine;
    } else if (item.tipo.includes("PERSONAL MITAD")) {
      costoTotal =
        costoTotal +
        parseInt(item.costo_personal) +
        parseInt(item.costo_adiciones);
      cmds += "-" + item.tipo;
      cmds += newLine;
      cmds += "Sabor mitad 1: " + item.mitad_uno;
      cmds += newLine;
      cmds += "Sabor mitad 2: " + item.mitad_dos;

      if (item.mod_mitad_uno) {
        cmds += newLine;
        cmds += "+/- Adiciones mitad 1: " + item.mod_mitad_uno;
      }
      if (item.mod_mitad_dos) {
        cmds += newLine;
        cmds += "+/- Adiciones mitad 2: " + item.mod_mitad_dos;
      }
      if (item.ind_mitad_uno_adicional) {
        cmds += newLine;
        cmds += "Observaciones mitad 1: " + item.ind_mitad_uno_adicional;
      }
      if (item.ind_mitad_dos_adicional) {
        cmds += newLine;
        cmds += "Observaciones mitad 2: " + item.ind_mitad_dos_adicional;
      }
      cmds += newLine;
      cmds =
        cmds +
        "Costo: " +
        (parseInt(item.costo_personal) + parseInt(item.costo_adiciones));
      cmds += newLine;
    } else if (item.tipo.includes("GRANDE MITAD")) {
      costoTotal =
        costoTotal +
        parseInt(item.costo_grande) +
        parseInt(item.costo_adiciones_grande);
      cmds += "-" + item.tipo;
      cmds += newLine;
      cmds += "Sabor mitad 1: " + item.mitad_uno;
      cmds += newLine;
      cmds += "Sabor mitad 2: " + item.mitad_dos;

      if (item.mod_mitad_uno) {
        cmds += newLine;
        cmds += "+/- Adiciones mitad 1: " + item.mod_mitad_uno;
      }
      if (item.mod_mitad_dos) {
        cmds += newLine;
        cmds += "+/- Adiciones mitad 2: " + item.mod_mitad_dos;
      }
      if (item.ind_mitad_uno_adicional) {
        cmds += newLine;
        cmds += "Observaciones mitad 1: " + item.ind_mitad_uno_adicional;
      }
      if (item.ind_mitad_dos_adicional) {
        cmds += newLine;
        cmds += "Observaciones mitad 2: " + item.ind_mitad_dos_adicional;
      }
      cmds += newLine;
      cmds =
        cmds +
        "Costo: " +
        (parseInt(item.costo_grande) + parseInt(item.costo_adiciones_grande));
      cmds += newLine;
    } else if (item.tipo.includes("GRANDE CUARTO")) {
      costoTotal =
        costoTotal +
        parseInt(item.costo_grande) +
        parseInt(item.costo_adiciones_grande);
      cmds += "-" + item.tipo;
      cmds += newLine;
      cmds += "Sabor cuarto 1: " + item.cuarto_uno;
      cmds += newLine;
      cmds += "Sabor cuarto 2: " + item.cuarto_dos;
      cmds += newLine;
      cmds += "Sabor cuarto 3: " + item.cuarto_tres;
      cmds += newLine;
      cmds += "Sabor cuarto 4: " + item.cuarto_cuatro;

      if (item.mod_cuarto_uno) {
        cmds += newLine;
        cmds += "+/- Adiciones cuarto 1: " + item.mod_cuarto_uno;
      }
      if (item.mod_cuarto_dos) {
        cmds += newLine;
        cmds += "+/- Adiciones cuarto 2: " + item.mod_cuarto_dos;
      }
      if (item.mod_cuarto_tres) {
        cmds += newLine;
        cmds += "+/- Adiciones cuarto 3: " + item.mod_cuarto_tres;
      }
      if (item.mod_cuarto_cuatro) {
        cmds += newLine;
        cmds += "+/- Adiciones cuarto 4: " + item.mod_cuarto_cuatro;
      }
      if (item.ind_cuarto_uno_adicional) {
        cmds += newLine;
        cmds += "Observaciones cuarto 1: " + item.ind_cuarto_uno_adicional;
      }
      if (item.ind_cuarto_dos_adicional) {
        cmds += newLine;
        cmds += "Observaciones cuarto 2: " + item.ind_cuarto_dos_adicional;
      }
      if (item.ind_cuarto_tres_adicional) {
        cmds += newLine;
        cmds += "Observaciones cuarto 3: " + item.ind_cuarto_tres_adicional;
      }
      if (item.ind_cuarto_cuatro_adicional) {
        cmds += newLine;
        cmds += "Observaciones cuarto 4: " + item.ind_cuarto_cuatro_adicional;
      }
      cmds += newLine;
      cmds =
        cmds +
        "Costo: " +
        (parseInt(item.costo_grande) + parseInt(item.costo_adiciones_grande));
      cmds += newLine;
    } else if (item.tipo.includes("PIZZA PANTALON")) {
      costoTotal =
        costoTotal +
        parseInt(item.costo_pantalon) +
        parseInt(item.costo_adiciones_pantalon);
      cmds += "-" + item.tipo;
      cmds += newLine;
      cmds += "Sabor: " + item.sabor_pantalon;

      if (item.mod_sabor_pantalon) {
        cmds += newLine;
        cmds += "+/- Adiciones: " + item.mod_sabor_pantalon;
      }
      if (item.ind_pantalon_adicional) {
        cmds += newLine;
        cmds += "Observaciones: " + item.ind_pantalon_adicional;
      }
      //console.log(cmds)
      cmds += newLine;
      cmds =
        cmds +
        "Costo: " +
        (parseInt(item.costo_pantalon) +
          parseInt(item.costo_adiciones_pantalon));
      cmds += newLine;
      //console.log(cmds)
    } else if (item.tipo.includes("PIZZA PANCOOK")) {
      costoTotal =
        costoTotal +
        parseInt(item.costo_pancook) +
        parseInt(item.costo_adiciones_pancook);
      cmds += "-" + item.tipo;
      cmds += newLine;
      cmds += "Sabor: " + item.sabor_pancook;

      if (item.mod_sabor_pancook) {
        cmds += newLine;
        cmds += "+/- Adiciones: " + item.mod_sabor_pancook;
      }
      if (item.ind_pancook_adicional) {
        cmds += newLine;
        cmds += "Observaciones: " + item.ind_pancook_adicional;
      }
      cmds += newLine;
      cmds =
        cmds +
        "Costo: " +
        (parseInt(item.costo_pancook) + parseInt(item.costo_adiciones_pancook));
      cmds += newLine;
    } else if (item.tipo.includes("LASAGNA")) {
      costoTotal =
        costoTotal +
        parseInt(item.costo_lasagna) +
        parseInt(item.costo_adiciones_lasagna);
      cmds += "-" + item.tipo;
      cmds += newLine;
      cmds += "Sabor: " + item.sabor_lasagna;

      if (item.mod_sabor_lasagna) {
        cmds += newLine;
        cmds += "+/- Adiciones: " + item.mod_sabor_lasagna;
      }
      if (item.ind_lasagna_adicional) {
        cmds += newLine;
        cmds += "Observaciones: " + item.ind_lasagna_adicional;
      }
      cmds += newLine;
      cmds =
        cmds +
        "Costo: " +
        (parseInt(item.costo_lasagna) + parseInt(item.costo_adiciones_lasagna));
      cmds += newLine;
    } else if (item.tipo.includes("RAVIOLI")) {
      costoTotal =
        costoTotal +
        parseInt(item.costo_ravioli) +
        parseInt(item.costo_adiciones_ravioli);
      cmds += "-" + item.tipo;
      cmds += newLine;
      cmds += "Sabor: " + item.sabor_ravioli;

      if (item.mod_sabor_ravioli) {
        cmds += newLine;
        cmds += "+/- Adiciones: " + item.mod_sabor_ravioli;
      }
      if (item.ind_ravioli_adicional) {
        cmds += newLine;
        cmds += "Observaciones: " + item.ind_ravioli_adicional;
      }
      cmds += newLine;
      cmds =
        cmds +
        "Costo: " +
        (parseInt(item.costo_ravioli) + parseInt(item.costo_adiciones_ravioli));
      cmds += newLine;
    } else if (item.tipo.includes("PASTA")) {
      costoTotal =
        costoTotal +
        parseInt(item.costo_pasta) +
        parseInt(item.costo_adiciones_pasta);
      cmds += "-" + item.tipo;
      cmds += newLine;
      cmds += "Sabor: " + item.sabor_pasta;

      if (item.mod_sabor_pasta) {
        cmds += newLine;
        cmds += "+/- Adiciones: " + item.mod_sabor_pasta;
      }
      if (item.ind_pasta_adicional) {
        cmds += newLine;
        cmds += "Observaciones: " + item.ind_pasta_adicional;
      }
      cmds += newLine;
      cmds =
        cmds +
        "Costo: " +
        (parseInt(item.costo_pasta) + parseInt(item.costo_adiciones_pasta));
      cmds += newLine;
    } else if (item.tipo.includes("SOPA")) {
      costoTotal =
        costoTotal +
        parseInt(item.costo_sopa) +
        parseInt(item.costo_adiciones_sopa);
      cmds += "-" + item.tipo;
      cmds += newLine;
      cmds += "Sabor: " + item.sabor_sopa;

      if (item.mod_sabor_sopa) {
        cmds += newLine;
        cmds += "+/- Adiciones: " + item.mod_sabor_sopa;
      }
      if (item.ind_sopa_adicional) {
        cmds += newLine;
        cmds += "Observaciones: " + item.ind_sopa_adicional;
      }
      cmds += newLine;
      cmds =
        cmds +
        "Costo: " +
        (parseInt(item.costo_sopa) + parseInt(item.costo_adiciones_sopa));
      cmds += newLine;
    } else if (item.tipo.includes("PAN AJO")) {
      costoTotal = costoTotal + parseInt(item.costo_pan_ajo);
      cmds += "-ENTRADA: " + item.tipo;
      cmds += newLine;
      cmds += "Costo: " + item.costo_pan_ajo;
      cmds += newLine;
    } else if (item.tipo.includes("PIZZA FESTIVAL")) {
      costoTotal = costoTotal + parseInt(item.costo_pizza_festival);
      cmds += "-FESTIVAL: " + item.tipo;
      cmds += newLine;
      cmds += "Costo: " + item.costo_pizza_festival;
      cmds += newLine;
    } else if (item.tipo.includes("PAN")) {
      costoTotal = costoTotal + parseInt(item.costo_panaderia);
      cmds += "-PANADERIA: " + item.tipo;
      cmds += newLine;
      cmds += "Costo: " + parseInt(item.costo_panaderia);
      cmds += newLine;
    } else if (item.tipo.includes("MASAS")) {
      costoTotal = costoTotal + parseInt(item.costo_panaderia);
      cmds += "-PANADERIA: " + item.tipo;
      cmds += newLine;
      cmds += "Costo: " + item.costo_panaderia;
      cmds += newLine;
    } else if (item.tipo.includes("PAN COOK 2")) {
      costoTotal = costoTotal + parseInt(item.costo_panaderia);
      cmds += "-PANADERIA: " + item.tipo;
      cmds += newLine;
      cmds += "Costo: " + item.costo_panaderia;
      cmds += newLine;
    } else if (item.tipo.includes("DESAYUNO AMERICANO")) {
      costoTotal = costoTotal + parseInt(item.costo_desayuno_americano);
      cmds += "-DESAYUNO: " + item.tipo;
      cmds += newLine;
      cmds += "Huevos: " + item.desayuno_tipo_huevos;
      cmds += newLine;
      cmds += "Bebida: " + item.desayuno_tipo_bebida;
      cmds += newLine;
      cmds += "Costo: " + item.costo_desayuno_americano;
      cmds += newLine;
      if (item.mod_sabor_desayuno) {
        cmds += "+/- Adiciones: " + item.mod_sabor_desayuno;
        cmds += newLine;
        cmds += newLine;
      }
      if (item.ind_desayuno_adicional) {
        cmds += "Observaciones: " + item.ind_desayuno_adicional;
        cmds += newLine;
        cmds += newLine;
      }
    } else if (item.tipo.includes("DESAYUNO HUESPED")) {
      costoTotal = costoTotal + parseInt(item.costo_desayuno_huesped);

      cmds += "-DESAYUNO: " + item.tipo;
      cmds += newLine;
      cmds += "Huevos: " + item.desayuno_tipo_huevos;
      cmds += newLine;
      cmds += "Bebida: " + item.desayuno_tipo_bebida;
      cmds += newLine;
      cmds += "Costo: " + item.costo_desayuno_huesped;
      cmds += newLine;
      if (item.mod_sabor_desayuno) {
        cmds += "+/- Adiciones: " + item.mod_sabor_desayuno;
        cmds += newLine;
        cmds += newLine;
      }
      if (item.ind_desayuno_adicional) {
        cmds += "Observaciones: " + item.ind_desayuno_adicional;
        cmds += newLine;
        cmds += newLine;
      }
    } else if (item.tipo.includes("SALSA 16 ONZAS")) {
      costoTotal = costoTotal + parseInt(item.costo_otros);
      cmds += "-OTROS: " + item.tipo;
      cmds += newLine;
      cmds += "Costo: " + item.costo_otros;
      cmds += newLine;
    }
  });

  //TOTAL::
  cmds += newLine;
  cmds += "TOTAL PEDIDO ------> " + costoTotal;

  console.log(cmds);

    /*
        const myPromise = new Promise((resolve, reject) => {
          resolve(onScanButtonClick(cmds));
        });
    
        myPromise.then(() => {
          //console.log("Desconectar")
          try {
            //this.toggleModalAceptar()
            const connStatus = localStorage.getItem("con");
            if (connStatus === "ok") {
              this.toggleModalAceptar();
            }
            onDisconnectButtonClick();
          } catch (error) {
            console.error(error);
          }
        });
    */
};

export default ImprimirPedidos;
