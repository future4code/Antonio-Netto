import React from 'react'

export default class Etapa3 extends React.Component {
    render () {
        return (
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>

                <p>Porque você não terminou um curso de graduação?</p>
                <input type="text"></input>

               
                <p>Você fez algum curso complementar?</p>
                <select name="select">
                <option value="Sim">Sim</option>
                 <option value="Nenhum" selected>"Nenhum"</option>
                </select>

            </div>

        )

    }
  };
  