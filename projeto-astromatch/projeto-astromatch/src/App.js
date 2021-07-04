import React from 'react'
import styled from "styled-components"
import Header from './components/Header'
import Perfil from './components/Perfil'
import NP2 from './components/NP2'
import Botoes from './components/Botoes'
import TelaMatches from './components/TelaMatches'


const AppContainer = styled.div`
       
`

class App extends React.Component {

  state = {
    currentPage: "Perfil"
  }

changePage = (currentPage) => {
  this.setState({currentPage: currentPage})
}

render () {
  const   renderCurrentPage = () => {
    if (this.state.currentPage === "Perfil") {
      return <Perfil/>
    } else if (this.state.currentPage === "TelaMatches" ) {
      return <TelaMatches />
    } 
  }

  return (
    <AppContainer>  
      <Header 
        changePage={this.changePage}
        />
      {renderCurrentPage()}
      <Botoes changePage={this.changePage}
        />
    
    </AppContainer>
  );
}
}

export default App;
