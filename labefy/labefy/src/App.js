import React from 'react';
import styled from "styled-components";
import Header from './components/Header/Header'; 
import Botoes from './components/Botoes/Botoes'; 

const AppContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
`



class App extends React.Component {

  /*state = {
    currentPage: "playlistCreationForm"
  }*/

  render () {   
    
      return (
      <AppContainer>
        <Header />
        <Botoes />
     
        </AppContainer>
    );


  }

}

export default App;
