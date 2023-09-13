import React from 'react'
import './Button.css'

export default props =>{
    return(
    <button className={`button ${props.operation ? 'operation' : ''}`}>{props.label}</button>
    )
}