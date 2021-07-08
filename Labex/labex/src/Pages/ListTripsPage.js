
import axios from 'axios'
import React, {useState} from 'react'
import { useHistory } from "react-router-dom"









function ListTripsPage() {
    

    const history = useHistory()

    const voltarParaHome = () => {
        history.goBack()
      }

      const irParaFormInscricao = () => {
        history.push("/trips/application")
      }

    const [valorListaViagens, setValorListaViagens] = useState([])

    const listaAtualizada = () => {
        setValorListaViagens ()

    }

    const listarViagens = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/antonio-machado-molina/trips"
    
        axios.get (url)
        .then((res) => {
            setValorListaViagens(res.data)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
        
    }
    
  return (
    <div>
        
        <button onClick={voltarParaHome}>Voltar</button>
        <button onClick={irParaFormInscricao}>Inscrever-se</button>
        <h1>Lista de Viagens</h1>
         </div>
  );  
}

export default ListTripsPage;
