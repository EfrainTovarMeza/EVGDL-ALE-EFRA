import React from 'react'
import  PropTypes from 'prop-types'
export const Card = ({id,imagen,nombre,descripcion,clicVerMas}) => {
    return (
        <div className="Card" id={id} key={id}>
        <div className="img">
            <div>
            <img src={imagen} alt=""/>
            </div>
            <div className="titulo">
            {nombre}
            </div>
        </div>
        <div className="descripcion">
        <div className="titulo">
               {nombre}
            </div>
            <div className="texto">
                <p>
                {descripcion}
                </p>
                <button className="vermas" onClick = { () => {
                console.log("Estamos dentro del clic del boton ver mas: "+id);
                clicVerMas(id);
                }} >
                   Ver Mas
                </button>
            </div>
        </div>
    </div>
    )
}

Card.propTypes={
    id : PropTypes.string.isRequired,
    imagen : PropTypes.string.isRequired,
    nombre : PropTypes.string.isRequired,
    descripcion : PropTypes.string.isRequired,
    clicVerMas : PropTypes.func.isRequired
}