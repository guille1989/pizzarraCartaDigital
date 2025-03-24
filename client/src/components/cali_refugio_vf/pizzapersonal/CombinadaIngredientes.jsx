import React from 'react';
import { Component } from 'react';
import '../../../App.css';

class CombinadaIngredientes extends Component {
    constructor(props){
        super(props);    
        this.state={
            porcion: '',
            ingredientes: 1,
            ingredienteuno: '',
            ingredientedos: '',
            //combinada: 'false',
            porporcion: 'Combinada de: ',
            adiciones: '',
            dato: 'Combinada'
        }
    }

    onClickBack = () => {
        this.props.atrasMenuPersonal();
    }

    componentDidMount(){
        this.setState({
            dato: this.state.dato + " " + this.props.comDosTresIngre + " Ingredientes:"  
        })
        //console.log(2 === this.props.comDosTresIngre)
    }

    handleJamon = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Jamon"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Jamon"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){                        
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, this.props.porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
            var dato = "-Sin Jamon"
            var porcion = this.props.porcion
            //this.props.cuentamitadmodificacion(porcion, dato);
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }else{
            var dato = "+Adicion Jamon"
            var porcion = this.props.porcion
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }
    }

    handlePollo = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Pollo"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Pollo"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
            var dato = "-Sin Pollo"
            var porcion = this.props.porcion
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }else{
            var dato = "+Adicion Pollo"
            var porcion = this.props.porcion
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }
    }

    handleChampinones = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Champinones"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Champinones"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
        var dato = "-Sin Champinones"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }else{
        var dato = "+Adicion Champinones"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }
    }

    handleCarneMolida = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "CarneMolida"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "CarneMolida"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
        var dato = "-Sin CarneMolida"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }else{
        var dato = "+Adicion CarneMolida"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }
    }

    handleCabanos = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Cabanos"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Cabanos"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
        var dato = "-Sin Cabanos"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }else{
        var dato = "+Adicion Cabanos"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }
    }

    handleSalami = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Salami"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Salami"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
        var dato = "-Sin Salami"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }else{
        var dato = "+Adicion Salami"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }
    }

    handleTocineta = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Tocineta"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Tocineta"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
        var dato = "-Sin Tocineta"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }else{
        var dato = "+Adicion Tocineta"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }
    }

    handleCebolla = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Cebolla"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Cebolla"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
        var dato = "-Sin Cebolla"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }else{
        var dato = "+Adicion Cebolla"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }
    }

    handleTomate = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Tomate"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Tomate"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
        var dato = "-Sin Tomate"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }else{
        var dato = "+Adicion Tomate"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }
    }

    handlePimenton = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Pimenton"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Pimenton"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
        var dato = "-Sin Pimenton"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }else{
        var dato = "+Adicion Pimenton"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }
    }

    handleAceitunas = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Aceitunas"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Aceitunas"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
        var dato = "-Sin Aceitunas"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }else{
        var dato = "+Adicion Aceitunas"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }
    }

    handleMaduro = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Maduro"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Maduro"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
        var dato = "-Sin Maduro"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }else{
        var dato = "+Adicion Maduro"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }
    }

    handlePeperoni = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Peperoni"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Peperoni"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
        var dato = "-Sin Peperoni"
        var porcion = this.props.porcion
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }else{
        var dato = "+Adicion Peperoni"
        var porcion = this.props.porcion        
        this.props.atrasMenuPersonalSabor(dato, porcion);
    }
    }

    handlePina = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Pina"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Pina"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
            var dato = "-Sin Pina"
            var porcion = this.props.porcion
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }else{
            var dato = "+Adicion Pina"
            var porcion = this.props.porcion
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }
    }

    handleQueso = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Queso"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Queso"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
            var dato = "-Sin Queso"
            var porcion = this.props.porcion
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }else{
            var dato = "+Adicion Queso"
            var porcion = this.props.porcion
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }
    }

    handleLechuga = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Lechuga"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Lechuga"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
            var dato = "-Sin Lechuga"
            var porcion = this.props.porcion
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }else{
            var dato = "+Adicion Lechuga"
            var porcion = this.props.porcion            
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }
    }

    handleJalapenios = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Jalapeños"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Jalapeños"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
            var dato = "-Sin Jalapeños"
            var porcion = this.props.porcion
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }else{
            var dato = "+Adicion Jalapeños"
            var porcion = this.props.porcion           
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }
    }

    handleMaiz = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Maiz"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Maiz"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
            var dato = "-Sin Maiz"
            var porcion = this.props.porcion
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }else{
            var dato = "+Adicion Maiz"
            var porcion = this.props.porcion
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }
    }

    handleTomateSeco = () => {
        if(this.props.combinada === 'true'){
            if(this.state.ingredientes === 0){
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Tomates Secos"})
            }else{
                this.setState({
                    ingredientes: this.state.ingredientes+1,                    
                    dato : this.state.dato + " + " + "Tomates Secos"})                      
                    if(this.state.ingredientes === parseInt(this.props.comDosTresIngre)){
                        var porcion = this.props.porcion
                        setTimeout(() => {
                            this.props.cuentamitad(this.state.dato, this.props.porcion);
                            this.props.atrasMenuPersonalSabor(this.state.dato, porcion);
                        }, 100);                        
                    }
            }            
        }else if(this.props.opcioncuarto === "ingredientemenos"){
            var dato = "-Sin TomatesSecos"
            var porcion = this.props.porcion
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }else{
            var dato = "+Adicion TomatesSecos"
            var porcion = this.props.porcion
            this.props.atrasMenuPersonalSabor(dato, porcion);
        }
    }
  
    render(){
        return(
        <div>
            <div>
                <p style={{marginLeft: '10px'}}>{this.props.porcion} {this.props.opcioncuarto} {this.state.dato}</p>
            </div>
            <div className="SaboresPizza">
                <div>
                    <div className="saborItem" onClick={this.handleJamon}>
                        <h1 className="pizzaOpcionSabor">Jamon</h1>
                    </div>
                    <div className="saborItem" onClick={this.handlePollo}>
                        <h1 className="pizzaOpcionSabor">Pollo</h1>
                    </div>
                    <div className="saborItem" onClick={this.handleChampinones}>
                        <h1 className="pizzaOpcionSabor">Champinones</h1>
                    </div>
                    <div className="saborItem" onClick={this.handleCarneMolida}>
                        <h1 className="pizzaOpcionSabor">CarneMolida</h1>
                    </div>
                    <div className="saborItem" onClick={this.handleCabanos}>
                        <h1 className="pizzaOpcionSabor">Cabanos</h1>
                    </div>
                    <div className="saborItem" onClick={this.handleLechuga}>
                        <h1 className="pizzaOpcionSabor">Lechuga</h1>
                    </div>
                </div>
                <div>
                    <div className="saborItem" onClick={this.handleSalami}>
                        <h1 className="pizzaOpcionSabor">Salami</h1>
                    </div>
                    <div className="saborItem" onClick={this.handleTocineta}>
                        <h1 className="pizzaOpcionSabor">Tocineta</h1>
                    </div>
                    <div className="saborItem" onClick={this.handleCebolla}>
                        <h1 className="pizzaOpcionSabor">Cebolla</h1>
                    </div>
                    <div className="saborItem" onClick={this.handleTomate}>
                        <h1 className="pizzaOpcionSabor">Tomate</h1>
                    </div>
                    <div className="saborItem" onClick={this.handlePimenton}>
                        <h1 className="pizzaOpcionSabor">Pimenton</h1>
                    </div>
                    <div className="saborItem" onClick={this.handleJalapenios}>
                        <h1 className="pizzaOpcionSabor">Jalapeños</h1>
                    </div>
                </div>
                <div>
                    <div className="saborItem" onClick={this.handleAceitunas}>
                        <h1 className="pizzaOpcionSabor">Aceitunas</h1>
                    </div>
                    <div className="saborItem" onClick={this.handleMaduro}>
                        <h1 className="pizzaOpcionSabor">Maduro</h1>
                    </div>
                    <div className="saborItem" onClick={this.handlePeperoni}>
                        <h1 className="pizzaOpcionSabor">Peperoni</h1>
                    </div>
                    <div className="saborItem" onClick={this.handlePina}>
                        <h1 className="pizzaOpcionSabor">Pina</h1>
                    </div>
                    <div className="saborItem" onClick={this.handleQueso}>
                        <h1 className="pizzaOpcionSabor">Queso</h1>
                    </div>
                    <div className="saborItem" onClick={this.handleMaiz}>
                        <h1 className="pizzaOpcionSabor">Maiz</h1>
                    </div>
                    <div className="saborItem" onClick={this.handleTomateSeco}>
                        <h1 className="pizzaOpcionSabor">Tomates Secos</h1>
                    </div>
                </div>            
            </div>
        <p onClick={this.onClickBack} className='atras'>atras..</p>
        </div>
        )
    }

}

export default CombinadaIngredientes