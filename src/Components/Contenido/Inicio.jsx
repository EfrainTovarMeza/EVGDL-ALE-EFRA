import React from 'react'
import { Carrucel } from './Carrucel'
import { Redessociales } from './Redessociales'
import { Tips } from './Tips'

export const Inicio = () => {
    return (
        <div className="inicio">
            <div className="izq">
                <h2>Tips</h2>
                <hr/>
            <Tips texto={"fshjlahfj ljsfaljf jask iufgsi askhfkh akskgkhghkg sfakhgkhk"} imagen={"/imagenes/ropa.jpg"} titulo={"Facil lavado de ropa"} />
            <Tips texto={"fshjlahfj ljsfaljf jask iufgsi askhfkh akskgkhghkg sfakhgkhk"} imagen={"/imagenes/ropa.jpg"} titulo={"Facil lavado de ropa"} />
            <Tips texto={"fshjlahfj ljsfaljf jask iufgsi askhfkh akskgkhghkg sfakhgkhk"} imagen={"/imagenes/ropa.jpg"} titulo={"Facil lavado de ropa"} />
            </div>
            <div className="centro">
            <Carrucel titulo={"Los mas Nuevo"}/>
                <Carrucel titulo={"Los mas Vendidos"}/>
                <Carrucel titulo={"Ofertas"}/>
            </div>
            <div className="der">
            <Redessociales/>
            </div>
        </div>
    )
}
