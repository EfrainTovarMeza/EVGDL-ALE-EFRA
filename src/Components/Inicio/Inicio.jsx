import React from 'react'
import './styleInicio.css'
import {Slider} from '../Slider/Slider'
import { Feedhome } from './Feedhome'
export const Inicio = () => {
    return (
        <>
        <div className="inicio">
            <Slider/>
        </div>
        <Feedhome/>
        </>
    )
}
