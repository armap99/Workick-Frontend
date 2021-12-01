import { useState } from 'react'
import './styles.css'

const RegisterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')

  const onChangeName = (e) => {
    console.log(name)
    setName(e.target.value)
  }

  const onChangeEmail = (event) => {
    console.log(email)
    setEmail(event.target.value)
  }

  const onChangeAddress = (e) => {
    console.log(address)
    setAddress(e.target.value)
  }

  const onChangeCity = (e) => {
    console.log(city)
    setCity(e.target.value)
  }

  return (
    <div className="form-container-register">
      <p className="text-register-title">Bienvenidos a Workick</p>
      <form className="sub-container-form-register">
        <input
          className="input-register-for"
          type="text"
          placeholder="Nombre de usuario"
          onChange={onChangeName}
        />
        <input
          className="input-register-for"
          type="email"
          placeholder="Corre"
          onChange={onChangeEmail}
        />
        <input
          className="input-register-for"
          type="text"
          placeholder="Dirección"
          onChange={onChangeAddress}
        />
        <p className="municipio-text-register-form">Municipio</p>
        <select className="input-register-for" onChange={onChangeCity}>
          <option value="Guadalajara">Guadalajara</option>
          <option value="Zapopan">Zapopan</option>
          <option value="Tlajomulco">Tlajomulco</option>
          <option value="Tlaquepaque">Tlaquepaque</option>
        </select>
        <button className="button-register-form">Registrate</button>
      </form>
      <p className="footer-registerform-text">¿Ya tienes cuenta?</p>
      <button className="footer-button-login-register">Inicia Sesión</button>
    </div>
  )
}

export default RegisterForm
