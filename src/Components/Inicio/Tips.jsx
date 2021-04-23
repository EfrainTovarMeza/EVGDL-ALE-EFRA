import React from 'react'
import './Tips.css'
export const Tips = ({texto,imagen,titulo}) => {
    return (
        <div className="Tips">
            <div className="tipstitle">
                <p>{titulo}</p>
                <hr/>
            </div>
            <div className="tipsimage">
                <img src={imagen} alt=""/>
            </div>
            <div className="tipstext">
                <p>{texto}</p>
            </div>
        </div>
    )
}
