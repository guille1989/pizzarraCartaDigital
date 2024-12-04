import React, { Component } from "react";

class ComponentePrincipal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalPedido: false,
      segPedidos: false,
      datoOrden: [],
      dataOrdenAux: [],
      insumosOrden: [],
      tipo_pedido_p: "MESA",
      opcionOrden: "MESA",
      mesaOrden: "",
      DomiNombre: "",
      DomiTelefono: "",
      DomiDireccion: "",
      DomiOtros: "",
      DomiCosto: "",
      RecogeNombre: "",
      RecogeTelefono: "",
      Habitacion: "",
      costoOrdenAux: "",
      opcionCortesia: "No",
      costoOrden: 0,
      costoRoomService: 10000,
    };
  }

  //
  confirmarPedido = (orden, costo, insumos) => {
    this.setState({
      datoOrden: orden,
      dataOrdenAux: JSON.parse(JSON.stringify(orden)),
      costoOrden: costo,
      insumosOrden: insumos,
    });
  };

  //
  confirmarPedidoOrden = () => {
    this.setState({
      modalPedido: !this.state.modalPedido,
    });
  };

  render() {
    return <div></div>;
  }
}

export default ComponentePrincipal;
