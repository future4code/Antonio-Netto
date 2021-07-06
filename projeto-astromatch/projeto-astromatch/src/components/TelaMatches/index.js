import React from 'react'
import axios from "axios"






export default class App extends React.Component {
    state = {
        matches: ["Ninguem ainda :("]

    }

    componentDidMount () {
        this.listaQueDeramMatch();
    }


    listaQueDeramMatch = () => {

        const urlTelaMatches = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:antonio/matches"
        
        
      
        
        axios.get(urlTelaMatches)
        .then((res) => {
            console.log(res)
            this.setState([{matches: res.data.data.matches}])
                 

        })
        .catch((err) => {
            console.log(err);
        });
    
    };

    

    render () {
      
    return (
      <div>
     Seus Matches: {[this.state.matches]}
     <button>Resetar</button>
      </div>
    )

    }
}
