import logo from './logo.svg';
import './App.css';
import React from 'react';
import Etapa1 from './components/Etapa1'

export default class App extends React.Component {
    state = {
      etapa: 1,
    };

    renderizaEtapa = () => { 
      switch (this.state.evento) {
        case 1: 
          return <Etapa1 />;
        case 2: 
          return <Etapa2 />;
          case 3: 
          return <Etapa3 />;
          case 4: 
          return <Final />;
      }
    } 

    irParaProximaEtapa = () => {
      const valorAtualizado = this.state.etapa
      const novoEstado = {
        etapa: valorAtualizado
      };

      this.setState(novoEstado);

    };
      
      
   render() {

    return (
      <div>
        {this.renderizaEtapa()}
        <button OnClick={this.irParaProximaEtapa}>Próxima etapa</button>

      </div>

    )

   }