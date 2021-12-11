import { useState } from 'react'
import { createNewAccount } from '../../services/accountService'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './styles.css'

const MySwal = withReactContent(Swal)

const RegisterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const sendDataAccount = async (evento) => {
    evento.preventDefault() // para no recargar pagina
    setName(name.trim())
    setEmail(email.trim())
    setAddress(address.trim())
    setPassword(password.trim())
    const data = {
      name,
      email,
      address,
      city,
      password,
    }
    try {
      const res = await createNewAccount(data)
      console.log(res)
      successAlert()
    } catch (err) {
      if (err.response.status === 400) {
        errorAlert()
        // alert('Datos invalidos')
      } else {
        console.log(err)
        alert('Algo salio mal')
      }
    }
  }

  const loginRedirect = () => {
    history.push('/login')
  }

  const successAlert = () => {
    MySwal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Su usuario a sido registrado',
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      history.push('/login')
    })
  }

  const errorAlert = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Datos invaalidos!',
    })
  }

  const onChangeName = (e) => {
    // console.log(name)
    setName(e.target.value)
  }

  const onChangeEmail = (event) => {
    // console.log(email)
    setEmail(event.target.value)
  }

  const onChangeAddress = (e) => {
    // console.log(address)
    setAddress(e.target.value)
  }

  const onChangeCity = (e) => {
    // console.log(city)
    setCity(e.target.value)
  }

  const onChangePassword = (e) => {
    // console.log(password)
    setPassword(e.target.value)
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
      <button onClick={loginRedirect} className="footer-button-login-register">
        Inicia Sesión
      </button>
    </div>
  )
}

export default RegisterForm
