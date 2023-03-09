import React from 'react'

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = (props) => {
  return (
    <div className='card'>
      <h3>{props.nombre}: ¡Su registro ha sido procesado con éxito! </h3>
      <h4>Su contraseña registrada es: {props.password}</h4>

    </div>
  )
}

export default Card
