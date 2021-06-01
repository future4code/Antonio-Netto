import React from 'react';

function CardPequeno(props) {
    return (
        <div className="card-pequeno">
            <p>{ props.email }</p>
            <p>{ props.endereco }</p>
        </div>
    )
}

export default CardPequeno;