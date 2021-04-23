import React from 'react'
import './Cards.css'
import { useEffect, useState } from "react"
import { Card } from './Card'
import { Modal } from '../Modal/Modal'
function useDatos() {
    const [datos, setDatos] = useState([])
    useEffect(() => {
        fetch("json/DatosInd.json")
            .then(response => response.json())
            .then(d => {
                setDatos(d)
            })
    }, [])

    return datos
}

export const Industrial = () => {
    const datos = useDatos();
    const number=(id,img,name,desc)=>{
        console.log("El numero es:"+id);
        document.getElementsByClassName(id+"modal")[0].style.display="block";
    }
    return (
        <>
             <div className="slide">
            <p className="titlesidle">CATALOGO VERDE</p>
            <p className="textslide">Tenemos la solución en productos biodegradables para tu Industria</p>
        </div>
        <div className="baner">
            <p>PRODUCTOS BIODEGRADABLES PARA LA INDUSTRIA LISTOS PARA USARSE Y CONCENTRADOS</p>
        </div>
        <div className="Contenedor">
            {datos.map(item => (
                <>
            <Card id={item.ID} imagen={"/imagenes/"+item.Image} nombre={item.Name} descripcion={item.Description} 
            clicVerMas={number} />
            <Modal id={item.ID} imagen={"/imagenes/"+item.Image} nombre={item.Name} descripcion={item.Description} ingredientes={item.Ingredients} caracteristicas={item.Characteristics} />
            </>
            ))}
        </div>
        </>
    )
}
