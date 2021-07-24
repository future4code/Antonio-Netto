import React from 'react'
import AppBar from '@material-ui/core/AppBar'   
import Button from '@material-ui/core/Button'
import { StyledToolbar } from "./styled"
import { goToLogin, goToSignUp } from "../../routes/coordinator"
import { useHistory} from "react-router-dom"


const Header = () => {
      const history = useHistory()
  


  return (
    
      <AppBar position="static">

         <logo>

          <h1>Labeddin</h1>

          </logo>
         
        
        <StyledToolbar>
          
          <Button onClick= {goToSignUp(history)} color="inherit"> Cadastrar</Button>
          
          <Button onClick= {goToLogin(history)} color="inherit">Login</Button>

        </StyledToolbar>


      </AppBar>
  
  )
}

export default Header