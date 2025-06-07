import React, { Component } from "react";
//import CombinadaIngredientes from './CombinadaIngredientes'
import "../../../App.css";
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

class cervezas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estado: "inicio",
      combinada: "false",
      porcion: "",
      comDosTresIngredientes: "",
      azucar: "Sin Azucar",
      promo: false,
      textoBoton: "Sin Michelar",
      classSalsa: "buttonBolognesa",
      cantidadProducto: 1,
      modalCerveza: false,
      producto: "CERVEZA",
      costoCerveza: process.env.REACT_APP_CERVEZA_NACIONAL_COSTO,
      costoCervezaBase: 0,
      costoCervezaAux: 0,
    };
  }

  onClickBack = () => {
    this.props.atrasMenuPersonal();
  };

  atrasPersonal = () => {
    this.setState({ estado: "inicio" });
  };

  handlePoker = () => {
    this.setState({
      producto: "POKER",
      costoCervezaAux: 0,
      costoCerveza: parseInt(process.env.REACT_APP_CERVEZA_NACIONAL_COSTO),
    });

    //Toggle Modal
    this.setState({
      modalCerveza: !this.state.modalCerveza,
    });
  };

  handleAguila = () => {
    this.setState({
      producto: "AGUILA",
      costoCervezaAux: 0,
      costoCerveza: parseInt(process.env.REACT_APP_CERVEZA_NACIONAL_COSTO),
    });

    //Toggle Modal
    this.setState({
      modalCerveza: !this.state.modalCerveza,
    });
  };

  handleClub = () => {
    this.setState({
      producto: "CLUB COLOMBIA",
      costoCervezaAux: 0,
      costoCerveza: parseInt(process.env.REACT_APP_CERVEZA_NACIONAL_COSTO),
    });

    //Toggle Modal
    this.setState({
      modalCerveza: !this.state.modalCerveza,
    });
  };

  handleRepublica = (tipo) => {
    this.setState({
      producto: tipo,
      costoCervezaAux: 0,
      costoCerveza: parseInt(process.env.REACT_APP_CERVEZA_IMPERIAL_COSTO),
      modalCerveza: !this.state.modalCerveza,
    });
  };

  agregaraCuentaMitadCombinada = (dato, porcion) => {
    this.props.cuentamitad(porcion, dato);
  };

  atrasPersonalSabor = (dato, porcion) => {
    this.props.atrasMenuPersonalSabor(dato, porcion);
  };

  esPromocion = () => {
    let costoC = this.state.costoCerveza;
    if (this.state.promo === false) {
      this.setState({
        promo: true,
        textoBoton: "Michelar",
        classSalsa: "buttonQueso",
      });
    } else
      this.setState({
        promo: false,
        textoBoton: "Sin Michelada",
        classSalsa: "buttonBolognesa",
      });
  };

  changeCantidadProducto = (e) => {
    this.setState({
      cantidadProducto: e.target.value,
    });
  };

  toggleModalCancelarCerveza = () => {
    //Toggle Modal
    this.setState({
      modalCerveza: !this.state.modalCerveza,
    });
    //
  };

  toggleModalAceptarCerveza = () => {
    var dato = this.state.producto;
    let pedidoPizza = [];
    let costoMich = this.state.promo ? 1000 : 0;
    //Guardamos en local Storag
    let contPersonales = [JSON.parse(localStorage.getItem("Numero_Cervezas"))];
    if (contPersonales[0] === null) {
      //Guardamos en local Storage
      pedidoPizza = {
        key_id: 1,
        tipo: "CERVEZA " + dato + " X " + this.state.cantidadProducto,
        mod_sabor_cerveza: this.state.textoBoton,
        costo_cerveza:
          (this.state.costoCerveza + costoMich) * this.state.cantidadProducto +
          this.state.costoCervezaAux,
        id_pedido: "Pedido_Cerveza_0",
      };
      localStorage.setItem("Pedido_Cerveza_0", JSON.stringify(pedidoPizza));
      localStorage.setItem("Numero_Cervezas", JSON.stringify({ Numero: 1 }));
    } else {
      pedidoPizza = {
        key_id: contPersonales[0].Numero + 1,
        tipo: "CERVEZA " + dato + " X " + this.state.cantidadProducto,
        mod_sabor_cerveza: this.state.textoBoton,
        costo_cerveza:
          (this.state.costoCerveza + costoMich) * this.state.cantidadProducto +
          this.state.costoCervezaAux,
        id_pedido: `Pedido_Cerveza_${contPersonales[0].Numero}`,
      };
      localStorage.setItem(
        `Pedido_Cerveza_${contPersonales[0].Numero}`,
        JSON.stringify(pedidoPizza)
      );
      localStorage.setItem(
        "Numero_Cervezas",
        JSON.stringify({ Numero: contPersonales[0].Numero + 1 })
      );
    }

    //Toggle Modal
    this.setState({
      modalCerveza: !this.state.modalCerveza,
      cantidadProducto: 1,
    });
    //
  };

  render() {
    const opcionPizza = () => {
      switch (this.state.estado) {
        case "inicio":
          return (
            <>
              <div>
                <div className="centrarButtonPromocionLasagna">
                  <p style={{ marginLeft: "10px" }}>
                    Cerveza de: {this.props.porcion}
                  </p>
                  <p> </p>
                  <button
                    className={this.state.classSalsa}
                    onClick={this.esPromocion}
                  >
                    {this.state.textoBoton}
                  </button>
                </div>
                <div className="SaboresPizza">
                  <div>
                    <div className="saborItem" onClick={this.handlePoker}>
                      <h1 className="pizzaOpcionSabor">Poker</h1>
                    </div>
                    <div className="saborItem" onClick={this.handleAguila}>
                      <h1 className="pizzaOpcionSabor">Aguila</h1>
                    </div>
                    <div className="saborItem" onClick={this.handleClub}>
                      <h1 className="pizzaOpcionSabor">Club</h1>
                    </div>
                  </div>

                  <div>
                    <div
                      className="saborItem"
                      onClick={() => this.handleRepublica("TRIGO")}
                    >
                      <h1 className="pizzaOpcionSabor">REPUBLICA-TRIGO</h1>
                    </div>

                    <div
                      className="saborItem"
                      onClick={() => this.handleRepublica("CANNABIS")}
                    >
                      <h1 className="pizzaOpcionSabor">REPUBLICA-CANNABIS</h1>
                    </div>

                    <div
                      className="saborItem"
                      onClick={() => this.handleRepublica("IMPERIAL")}
                    >
                      <h1 className="pizzaOpcionSabor">REPUBLICA-IMPERIAL</h1>
                    </div>

                    <div
                      className="saborItem"
                      onClick={() => this.handleRepublica("IPA")}
                    >
                      <h1 className="pizzaOpcionSabor">REPUBLICA-IPA</h1>
                    </div>
                  </div>
                </div>
                <p onClick={this.onClickBack} className="atras">
                  atras..
                </p>
              </div>

              <Modal isOpen={this.state.modalCerveza}>
                <ModalHeader>Cantidad</ModalHeader>
                <ModalBody>
                  <p>Cantidad:</p>
                  <Input
                    value={this.state.cantidadProducto}
                    onChange={this.changeCantidadProducto}
                    placeholder="Cantidad"
                  />
                  <br></br>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="success"
                    onClick={this.toggleModalAceptarCerveza}
                  >
                    Agregar Pedido
                  </Button>{" "}
                  {"  "}
                  <Button
                    color="danger"
                    onClick={this.toggleModalCancelarCerveza}
                  >
                    Cancelar
                  </Button>
                </ModalFooter>
              </Modal>
            </>
          );
        //case "combinada": return (<CombinadaIngredientes combinada={this.state.combinada} comDosTresIngre={this.state.comDosTresIngredientes} porcion={this.props.porcion} atrasMenuPersonal={this.atrasPersonal} atrasMenuPersonalSabor={this.atrasPersonalSabor} cuentamitad={this.agregaraCuentaMitadCombinada}/>)
      }
    };
    return <div>{opcionPizza()}</div>;
  }
}

export default cervezas;
