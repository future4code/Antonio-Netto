import React from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuario from "./components/TelaCadastro";

export default class App extends React.Component {
    state = {
      telaAtual: "cadastro"
    }

    escolherTela = () => {
      switch (this.state.telaAtual){
        case "cadastro":
          return <TelaCadastro />
          case "lista":
            return <TelaListaUsuario />
            default:
              return <div>Erro! Página não encontrada </div>
      }
    }

    render () {
      return (
        <div>
         {this.escolherTela ()}

        </div>
      )
    }

  
}


