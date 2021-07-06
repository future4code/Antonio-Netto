import React from 'react'
import styled from "styled-components"
import axios from "axios"




export default class App extends React.Component {
    state = {
        photo: "",
        name: "",
        bio: "",
        age: ""

    }

    componentDidMount() {
        this.novoPerfil();
    }

    novoPerfil = () => {
        const urlPerfil = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:antonio-machado/person"
        
        axios.get(urlPerfil)
        .then((res) => {
            this.setState({bio: res.data.profile.bio})
            this.setState({foto: res.data.profile.photo})
            this.setState({nome: res.data.profile.name})
            this.setState({idade: res.data.profile.age})
           

        })
        .catch((err) => {
            console.log(err);
        });
    
    };

    render () {
        console.log(this.state.nome)
    return (
      <div>`Nome: {this.state.nome}, Idade: {this.state.idade}, Bio: {this.state.bio}, Foto: <img src={this.state.foto} />`

      </div>
    )

    }
}
