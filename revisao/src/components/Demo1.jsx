import React from 'react'
import'./Demo1.css'
import { CiBasketball } from "react-icons/ci";

function Demo1() {

  function responderClique() {
    alert("Olá, amigo!")
  }

  return (

    <div className='container-demo1'>

        <button className='btn' onClick={responderClique}>Clique aqui</button>
        <button  className='btn' onClick={() => { alert( "Olá, tudo bem?" )} }> ➡️ </button>

        <img className='img-african-family' src="public/images/African family-rafiki.svg" alt="african family" />

        <CiBasketball onClick={responderClique} className='icon-basket'/>
      
    </div>
  )
}

export default Demo1
