import { useState } from 'react'
import { createNewAccount } from '../../services/accountService'
import './styles.css'

const RegisterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [password, setPassword] = useState('')

  const sendDataAccount = async (evento) => {
    evento.preventDefault() // para no recargar pagina
    const data = {
      name,
      email,
      address,
      city,
      password,
    }
    const res = await createNewAccount(data)
    console.log(res)
    setAddress('')
  }

  const onChangeName = (e) => {
    // console.log(name)
    setName(e.target.value.trim())
  }

  const onChangeEmail = (event) => {
    // console.log(email)
    setEmail(event.target.value.trim())
  }

  const onChangeAddress = (e) => {
    // console.log(address)
    setAddress(e.target.value.trim())
  }

  const onChangeCity = (e) => {
    // console.log(city)
    setCity(e.target.value.trim())
  }

  const onChangePassword = (e) => {
    // console.log(password)
    setPassword(e.target.value.trim())
  }

  return (
    <div className="form-container-register">
      <p className="text-register-title">Bienvenidos a Workick</p>
      <form className="sub-container-form-register" onSubmit={sendDataAccount}>
        <input
          className="input-register-for"
          type="text"
          placeholder="Nombre de usuario"
          onChange={onChangeName}
          value={name}
        />
        <input
          className="input-register-for"
          type="email"
          placeholder="Correo"
          onChange={onChangeEmail}
          value={email}
        />
        <input
          className="input-register-for"
          type="password"
          placeholder="Contraseña"
          onChange={onChangePassword}
          value={password}
        />
        <input
          className="input-register-for"
          type="text"
          placeholder="Dirección"
          onChange={onChangeAddress}
          value={address}
        />
        <p className="municipio-text-register-form">Municipio</p>
        <select
          className="input-register-for"
          onChange={onChangeCity}
          value={city}
        >
          <option value="Guadalajara">Guadalajara</option>
          <option value="Zapopan">Zapopan</option>
          <option value="Tlajomulco">Tlajomulco</option>
          <option value="Tlaquepaque">Tlaquepaque</option>
        </select>
        <button className="button-register-form" type="submit">
          Registrate
        </button>
      </form>
      <p className="footer-registerform-text">¿Ya tienes cuenta?</p>
      <button className="footer-button-login-register">Inicia Sesión</button>
    </div>
  )
}

export default RegisterForm
