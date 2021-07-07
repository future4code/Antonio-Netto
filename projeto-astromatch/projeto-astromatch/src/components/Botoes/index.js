import React from 'react'
import styled from "styled-components"

const ButtonContainer = styled.div`
     display: flex;
     justify-content: space-between;
     width: 300px;
     margin-top: 50px;
`



const Botoes = (props) => {
    return (
        <ButtonContainer>

           <button>Dar Match</button>
           <button>Ver Outro Perfil</button>
            

        </ButtonContainer>
    )

}

export default Botoes