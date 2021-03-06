import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "../../assets/imagens/delete.svg"
class CardNota extends Component {
  apagar(){
    const indece = this.props.indece
    this.props.apagarNota(indece)
  }
  
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}></DeleteSVG>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;