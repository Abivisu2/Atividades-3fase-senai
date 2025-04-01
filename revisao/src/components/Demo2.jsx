import React, { useState } from 'react'
import './Demo2.css'
import Usuario from './Usuario'

function Demo2() {

const [valor, setValor]= useState(0)
const [usuario, setUsuario]= useState('')

  return (

    <div className='container-demo2'>

        <h2>useState</h2>

        <div className='div-btn'>

        <button className='btnContador' onClick={() => {setValor(valor - 1)}}> - </button>
         {valor}
        <button className='btnContador' onClick={() => (setValor(valor + 1))}> + </button>

        </div>

        <button onClick={() => {setUsuario(prompt("digita seu nome: "))}}>
          fazer login
        </button>

        {/*Renderização condicional*/}
        {/*{usuario &&  <p>Olá {usuario} !</p>}*/}

        {usuario ?  <p>Olá {usuario} !</p> : <p>Faça login</p>} 
        {/* Operdaor ternario */}

        {usuario &&  <Usuario username={usuario}/>}

        
      
    </div>

  )
}

export default Demo2
