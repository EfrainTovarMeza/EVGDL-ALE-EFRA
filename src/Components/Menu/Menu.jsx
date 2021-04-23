import React from 'react'
import './Menu.css'
import logo from './logo.png'
import { Inicio } from '../Inicio/Inicio'
import { Hogar } from '../Productos/Hogar'
import { Institucion } from '../Productos/Institucion'
import { Industrial } from '../Productos/Industrial'
import  PropTypes from 'prop-types'
export const Menu = ({cambiarcomponente}) => {
    return (
        <div className="Menu">
            <div className="items">
               <div className="item">
                   <div className="icon">
                   <i className="fa fa-list-alt" aria-hidden="true"></i>
                   </div>
                   <div className="letra">
                       <p onClick = { () => {
                        cambiarcomponente(<Inicio/>)
                        }}>Inicio
                    </p>
                   </div>
               </div>
               <div className="item">
                   <div className="icon">
                   <i className="fa fa-home" aria-hidden="true"></i>
                   </div>
                   <div className="letra">
                       <p onClick = { () => {
                        cambiarcomponente(<Hogar/>)
                        }}> Hogar
                       </p>
                   </div>
               </div>
               <div className="item">
                   <div className="icon">
                   <i className="fa fa-university" aria-hidden="true"></i>
                   </div>
                   <div className="letra">
                       <p onClick = { () => {
                        cambiarcomponente(<Institucion/>)
                        }}>Institucion

                       </p>
                   </div>
               </div>
               <div className="item">
                   <div className="icon">
                   <i className="fa fa-industry" aria-hidden="true"></i>
                   </div>
                   <div className="letra">
                       <p onClick = { () => {
                        cambiarcomponente(<Industrial/>)
                        }}> Industrial

                       </p>
                   </div>
               </div>
               <div className="item">
                   <div className="icon">
                   <i className="fa fa-handshake-o" aria-hidden="true"></i>
                   </div>
                   <div className="letra">
                       <p> <a href="index.html">Desinfección</a></p>
                   </div>
               </div>
            </div>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="buscador">
                <div className="text">
                    <input type="text" name="" id=""/>
                </div>
                <div className="btnbuscar">
                <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

Menu.propTypes={
    cambiarcomponente : PropTypes.func.isRequired
}