import React from "react";
import { Component } from "react";
import "../../../App.css";
import SaboresLasagna from "./SaboresLasagna";
import CombinadaIngredientes from "./CombinadaIngredientes";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

class lasagna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estado: "inicio",
      porcion: "",
      saborpizza: "",
      saborpizzaadicion: "",
      modal: false,
      indAdicional: "",
      indicacionAdicional: "",
      promo: false,
      promo2X1: false,
      textoBoton: "NAPOLITANA",
      textoBotonPromo: "PROMO LSG 2X1",
      classSinConPromo: "buttonPromocion",
      classPromo2X1: "buttonSinPromo",
      costoLasagna: parseInt(process.env.REACT_APP_LASAGNA_COSTO),
      ajusteCostoPromo: 0,
      classSalsa: "buttonBolognesa",
    };
  }
  onClickBack = () => {
    this.props.atrasMenuPersonal();
  };

  atrasPersonal = () => {
    this.setState({ estado: "inicio" });
  };

  atrasPersonalSabor = (dato, porcion) => {
    if (porcion === "saborpizza") {
      this.setState({
        saborpizza: dato,
        estado: "inicio",
        saborpizzaadicion: "",
      });
    }
  };

  atrasPersonalSaborAdicion = (dato, porcion) => {
    if (porcion === "saborpizza") {
      this.setState({
        saborpizzaadicion: dato + this.state.saborpizzaadicion,
        estado: "inicio",
      });
    }
  };

  sinIngredientesPizza = () => {
    if (this.state.saborpizza === "") {
      alert("No hay sabor");
    } else {
      this.setState({ estado: "siningredientes" });
    }
  };

  adicionIngrediente = () => {
    if (this.state.saborpizza === "") {
      alert("No hay sabor");
    } else {
      this.setState({ estado: "adicionentera" });
    }
  };

  agregaraCuenta = (dato, porcion) => {
    //console.log(dato, porcion)
  };

  agregaraCuentaAdicionSinIng = (porcion, modificacionIng) => {
    //console.log(porcion, this.state.mitaduno, modificacionIng)
  };

  agregarproducto = () => {
    /*console.log("1/2: ", this.state.mitaduno)
    console.log("1/2: ", this.state.mitadunoadicion)
    console.log("2/2: ", this.state.mitaddos)
    console.log("2/2: ", this.state.mitaddosadicion)*/
    //Abrimos modal
    if (this.state.saborpizza === "") {
      alert("Completar sabores!!");
    } else {
      this.setState({
        modal: !this.state.modal,
      });
      //***//
    }
  };

  indicacionAdicional = (e) => {
    this.setState({
      indAdicional: e.target.value,
    });
  };

  toggleModalCancelar = () => {
    //Toggle Modal
    this.setState({
      modal: !this.state.modal,
    });
    //
  };

  toggleModalAceptar = () => {
    let pedidoPizza = [];
    let costoadicion = 0;
    let keyId = 0;

    //Validamos costo ingredientes adicionales
    if (this.state.saborpizzaadicion !== "") {
      for (let i = 0; i < this.state.saborpizzaadicion.length; i++) {
        if (this.state.saborpizzaadicion[i] === "+") {
          costoadicion = costoadicion + 3000;
        }
      }
    }

    //Guardamos en local Storag
    let contPersonales = [JSON.parse(localStorage.getItem("Numero_Lasagnas"))];

    if (contPersonales[0] === null) {
      //Guardamos en local Storage
      pedidoPizza = {
        key_id: 1,
        tipo: "LASAGNA" + " SALSA: " + this.state.textoBoton,
        sabor_lasagna: this.state.saborpizza,
        mod_sabor_lasagna: this.state.saborpizzaadicion,
        ind_lasagna_adicional: this.state.indAdicional,
        costo_lasagna: this.state.costoLasagna - this.state.ajusteCostoPromo,
        costo_adiciones_lasagna: costoadicion,
        id_pedido: "Pedido_Lasagna_0",
      };
      localStorage.setItem("Pedido_Lasagna_0", JSON.stringify(pedidoPizza));
      localStorage.setItem("Numero_Lasagnas", JSON.stringify({ Numero: 1 }));
    } else {
      pedidoPizza = {
        key_id: contPersonales[0].Numero + 1,
        tipo: "LASAGNA" + " SALSA: " + this.state.textoBoton,
        sabor_lasagna: this.state.saborpizza,
        mod_sabor_lasagna: this.state.saborpizzaadicion,
        ind_lasagna_adicional: this.state.indAdicional,
        costo_lasagna: this.state.costoLasagna - this.state.ajusteCostoPromo,
        costo_adiciones_lasagna: costoadicion,
        id_pedido: `Pedido_Lasagna_${contPersonales[0].Numero}`,
      };
      localStorage.setItem(
        `Pedido_Lasagna_${contPersonales[0].Numero}`,
        JSON.stringify(pedidoPizza)
      );
      localStorage.setItem(
        "Numero_Lasagnas",
        JSON.stringify({ Numero: contPersonales[0].Numero + 1 })
      );
    }

    //Toggle Modal//
    this.setState({
      modal: !this.state.modal,
    });

    //Atras
    this.props.atrasMenuPersonal();
  };

  esPromocion = () => {
    if (this.state.promo === false) {
      this.setState({
        promo: true,
        textoBoton: "QUESO",
        classSalsa: "buttonQueso",
        costoLasagna: parseInt(process.env.REACT_APP_LASAGNA_CREMA),
        ajusteCostoPromo: 0,
      });
    } else
      this.setState({
        promo: false,
        textoBoton: "NAPOLITANA",
        classSalsa: "buttonBolognesa",
        costoLasagna: parseInt(process.env.REACT_APP_LASAGNA_COSTO),
      });
  };

  esPromocion2X1 = () => {
    if (this.state.promo2X1 === false) {
      this.setState({
        promo2X1: true,
        classPromo2X1: "buttonPromo",
        ajusteCostoPromo: 4000,
      });
    } else
      this.setState({
        promo2X1: false,
        classPromo2X1: "buttonSinPromo",
        ajusteCostoPromo: 0,
      });
  };

  render() {
    const opcionPizza = () => {
      switch (this.state.estado) {
        case "inicio":
          return (
            <>
              <div>
                <div className="centrarButtonPromocionLasagna">
                  <p style={{ textAlign: "center" }}>LASAGNA - SALSA:</p>
                  <p> </p>
                  <button
                    className={this.state.classSalsa}
                    onClick={this.esPromocion}
                  >
                    {this.state.textoBoton}
                  </button>

                  {this.state.textoBoton === "NAPOLITANA" && (
                    <button
                      className={this.state.classPromo2X1}
                      onClick={this.esPromocion2X1}
                    >
                      {this.state.textoBotonPromo}
                    </button>
                  )}
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    className="adicioncompleta"
                    onClick={this.adicionIngrediente}
                  ></div>
                  <div
                    className="siningredientescompleta"
                    onClick={this.sinIngredientesPizza}
                  ></div>
                </div>
                <div className="pizzaforma">
                  <div>
                    <div
                      className="lasagna"
                      onClick={() => this.setState({ estado: "saborpizza" })}
                    >
                      <p>
                        {this.state.saborpizza} {this.state.saborpizzaadicion}
                      </p>
                    </div>
                  </div>
                  <button
                    className="agregarapedido"
                    onClick={this.agregarproducto}
                  >
                    AGREGAR
                  </button>
                </div>
                <p onClick={this.onClickBack} className="atras">
                  atras..
                </p>
              </div>

              <Modal isOpen={this.state.modal}>
                <ModalHeader>Pedido LASAGNA</ModalHeader>
                <ModalBody>
                  <p>
                    Sabor: <strong>{this.state.saborpizza}</strong>
                  </p>
                  <p>
                    Adicion y/o Sin ingredientes:{" "}
                    <strong>{this.state.saborpizzaadicion}</strong>
                  </p>
                  <Input
                    value={this.state.indAdicional}
                    onChange={this.indicacionAdicional}
                    placeholder="Indicacion Adicional"
                  />
                  <br></br>
                </ModalBody>
                <ModalFooter>
                  <Button color="success" onClick={this.toggleModalAceptar}>
                    Agregar Pedido
                  </Button>{" "}
                  {"  "}
                  <Button color="danger" onClick={this.toggleModalCancelar}>
                    Cancelar
                  </Button>
                </ModalFooter>
              </Modal>
            </>
          );
        case "saborpizza":
          return (
            <SaboresLasagna
              porcion="saborpizza"
              atrasMenuPersonal={this.atrasPersonal}
              atrasMenuPersonalSabor={this.atrasPersonalSabor}
              cuentamitad={this.agregaraCuenta}
            />
          );
        case "adicionentera":
          return (
            <CombinadaIngredientes
              porcion="saborpizza"
              atrasMenuPersonal={this.atrasPersonal}
              atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion}
              cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}
            />
          );
        case "siningredientes":
          return (
            <CombinadaIngredientes
              porcion="saborpizza"
              opcioncuarto="ingredientemenos"
              atrasMenuPersonal={this.atrasPersonal}
              atrasMenuPersonalSabor={this.atrasPersonalSaborAdicion}
              cuentamitadmodificacion={this.agregaraCuentaAdicionSinIng}
            />
          );
      }
    };
    return <div>{opcionPizza()}</div>;
  }
}

export default lasagna;
