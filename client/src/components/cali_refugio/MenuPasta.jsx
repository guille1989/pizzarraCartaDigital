import React from 'react';
import { Component } from 'react';
import PastaLasagna from './pasta/lasagna'
import PastaSpagetti from './spagetti/spagetti'
import PastaRaviolis from './raviolis/raviolis'

class MenuPasta extends Component{
    constructor(props){
        super(props);    
        this.state={
            estado: 'inicio'
        }
    }

    menuopciones(event){
        if(this.state.estado === 'inicio'){
            this.setState({estado: 'LASAGNA'})
        }else{
            this.setState({estado: 'inicio'})
        }
    }

    menuopcionesSpagetti(event){
        if(this.state.estado === 'inicio'){
            this.setState({estado: 'PASTA'})
        }else{
            this.setState({estado: 'inicio'})
        }
    }

    menuopcionesRaviolis(event){
        if(this.state.estado === 'inicio'){
            this.setState({estado: 'RAVIOLIS'})
        }else{
            this.setState({estado: 'inicio'})
        }
    }

    onClickBack = () => {
        this.props.atrasMenuPizza();
    }

    atrasPersonal = () => {
        this.setState({estado: 'inicio'})
    }


    render(){
        const opcionPizza = () => {
            switch(this.state.estado) 
            {
                case "inicio":
                    return(
                        <div className="pizzaOrden">
                            <div>
                                <div className="pizzaItem" onClick={(e) => ( this.menuopciones(e))}>
                                    <h1 className="pizzaOpcion">LASAGNA</h1>
                                </div>                
                            </div>
                            <div>
                                <div className="pizzaItem" onClick={(e) => ( this.menuopcionesSpagetti(e))}>
                                    <h1 className="pizzaOpcion">FETUCCINI O SPAGHETTI</h1>
                                </div>                
                            </div>
                            <div>
                                <div className="pizzaItem" onClick={(e) => ( this.menuopcionesRaviolis(e))}>
                                    <h1 className="pizzaOpcion">RAVIOLIS</h1>
                                </div>                
                            </div>
                        </div>
                    );
                case "LASAGNA": return <PastaLasagna atrasMenuPersonal={this.atrasPersonal} />    
                case "PASTA": return <PastaSpagetti atrasMenuPersonal={this.atrasPersonal} />     
                case "RAVIOLIS": return <PastaRaviolis atrasMenuPersonal={this.atrasPersonal} />        
                default:  return <p style={{textAlign: 'center'}}>SELECCIONE OPCION</p>
            } 
        }
        return(
            <div>{ opcionPizza() }</div>
        )
    }  
}

export default MenuPasta