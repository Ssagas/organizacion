import { useState } from "react"
import "./Campo.css"

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`

//destructuración
const { type="text" }= props //aqui estamos dandole un valor por defecto, si no viene nada en props que sea type, el valor type sera text por defecto.

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
 // con ese className {`campo campo-${type}`} le indicamos que puede ser campo o campo-el tipo de input que es
    return <div className={`campo campo-${type}`}> 
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type= {type}
        />
    </div>
}

export default CampoTexto