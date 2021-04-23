import React from 'react'
import './Carrucel.css'
export const Carrucel = ({titulo}) => {
    return (
        <>
         <div className="tituloc">
            <p>{titulo}</p>
        </div>
        <div className="content-carrucel">
        <div className="carrucel">
            <div className="imagen">
                <img src="Imagenes/PH1.png" alt=""/>
            </div>
            <div className="nombre">
                <p>Limpieza de alfombras</p>
            </div>
        </div>
        <div className="carrucel">
            <div className="imagen">
                <img src="Imagenes/PH1.png" alt=""/>
            </div>
            <div className="nombre">
                <p>Limpieza de alfombras</p>
            </div>
        </div>
        <div className="carrucel">
            <div className="imagen">
                <img src="Imagenes/PH1.png" alt=""/>
            </div>
            <div className="nombre">
                <p>Limpieza de alfombras</p>
            </div>
        </div>
        <div className="carrucel">
            <div className="imagen">
                <img src="Imagenes/PH1.png" alt=""/>
            </div>
            <div className="nombre">
                <p>Limpieza de alfombras</p>
            </div>
        </div>
        <div className="carrucel">
            <div className="imagen">
                <img src="Imagenes/PH1.png" alt=""/>
            </div>
            <div className="nombre">
                <p>Limpieza de alfombras</p>
            </div>
        </div>
        </div>
        </>
    )
}
