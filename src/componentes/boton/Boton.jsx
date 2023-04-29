import React from 'react'
import './boton.css'

const Boton = (props) => (
    <button className='boton' onClick={props.buscar}>
        {props.children}
    </button>
  )

export default Boton