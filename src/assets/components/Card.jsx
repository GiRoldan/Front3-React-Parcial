import React from 'react'

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = (props) => {
  return (
    <div>
      <h2>Soy card</h2>
      <h3>{props.nombre}: ¡Tu registro ha sido procesado con éxito!✨</h3>
      <h4>Tu contraseña registrada es: {props.password}</h4>

    </div>
  )
}

export default Card
