import React from 'react'
import './Modal.css'
export const Modal = ({id,imagen,nombre,descripcion,ingredientes,caracteristicas}) => {
   
    return (
        <div className={ id+"modal fondo_transparente" } id={id+"modal"}>
        <div className="modal">
            <div className="modal_cerrar">
                <span onClick={()=>{
                    document.getElementsByClassName(id+"modal")[0].style.display="none";
                }
                }>x</span>
            </div>
            <div className="izq">
                <div className="foto">
                    <img src={imagen} alt=""/>
                </div> 
            </div>
            <div className="der">
            <div className="modal_titulo">{nombre}</div> 
            <div className="modal_mensaje">
                <h4>Descripción:</h4>
                <p>{descripcion}</p>
                <h4>Ingredientes:</h4>
                <p>{ingredientes}</p>
                <h4>Caracteristicas:</h4>
                <p>{caracteristicas}</p>
            </div>
            <div className="modal_botones">
                <a href="index.html" className="boton">COMPARTIR</a>
                <a href="index.html" className="boton">ACEPTAR</a>
            </div>
            </div>
            
        </div>
        </div>
    )
}
