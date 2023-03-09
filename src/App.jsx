import { useState } from 'react'
import './App.css'
import Card from './assets/components/Card'

function App() {
    //Aqui deberias agregar los estados y los handlers para los inputs
    const [input, setInput] = useState({
      nombre: '',
      password: ''
    })
    

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
      event.preventDefault()
      const nombreClear = input.nombre.trim();
      const passClear = input.password.trim();
      console.log(input.nombre, nombreClear);
      console.log(input.password, passClear);
      if(nombreClear.length > 3 && passClear.length > 6) {
          setShow(true)
          setErr(false)
      } else {
          setErr(true)
      }
    }
    console.log(input);
    console.log(err);

  return (
    <div className="app">
      <h1>Su Banco Digital</h1>
      <br />
      <h2>Bienvenido!</h2>
      <h3>Por favor ingrese sus datos para registrarse en nuestro sistema</h3>
      <form onSubmit={handleSubmit}>
        <label className='lab' htmlFor="" >Ingrese su nombre: </label>
        <input className='in' type="text" value={input.nombre} onChange={(e) => setInput({...input, nombre: e.target.value})} />
        <label className='lab' htmlFor="">Ingresa tu contraseña: </label>
        <input className='in'type="text" value={input.password} onChange={(e) => setInput({...input, password: e.target.value})} />       
        <button className='miBoton' type='submit'>Enviar</button>
        <br />
        <span className='error'>{err && 'Por favor chequea que la información sea correcta'}</span>
      </form>
      <br />
      {/* <Card/> */}
      {show  && <Card nombre={input.nombre} password={input.password}/>}
    </div>
  )
}

export default App
