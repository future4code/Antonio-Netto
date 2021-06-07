import React from 'react'

export default class Etapa1 extends React.Component {
    render () {
        return (
            <div>
                <h2>ETAPA 1 - DADOS GERAIS</h2>

                <p>Qual o seu nome?</p>
                <input type="text"></input>

               
                <p>Qual a sua idade?</p>
                <input type="text"></input>

                
                <p>Qual o seu email?</p>
                <input type="text"></input>

               
                <p>Qual a sua escolaridade?</p>
                <select name="select">
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                 <option value="Ensino médio incompleto" selected>Ensino médio incompleto</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
                </select>
            </div>

        )

    }
  };
  
