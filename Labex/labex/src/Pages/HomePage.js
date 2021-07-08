import React from 'react'
import { useHistory } from "react-router-dom"


function HomePage() {

  const history = useHistory()

  const irParaPagViagens = () => {
    history.push("/trips/list")
  }

  const irParaLogin = () => {
    history.push("/login")
  }

  return (
  

      <div>
        <h1>LabeX</h1>
        <button onClick={irParaPagViagens}>Ver Viagens</button>
        <button onClick={irParaLogin}>Área de Admin</button>
      </div>

  );  
}

export default HomePage;
