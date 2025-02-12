import React from 'react'
import './Body.css'
import Demo1 from './Demo1'
import Demo2 from './Demo2'

function Body() {

  return (

    <div className='container-body'>

        <h1>Página importante para o body</h1>

        <Demo2/>
        <Demo1/>

        <img className='img-visu4life' src="public/images/Visu4life.jpg" alt="Visú4life" />
      
    </div>

  )
}

export default Body
