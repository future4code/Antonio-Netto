import React from 'react'
import styled from "styled-components"

const HeaderContainer = styled.div`
        
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom-style: groove;
`




const Header = (props) => {
    return (
        <HeaderContainer>
            <img src="./img/logo.png"/>
            <div>
                <button onClick={() => props.changePage("TelaMatches")}>Tela de Matches</button>
            </div>
        </HeaderContainer>
    )

}

export default Header