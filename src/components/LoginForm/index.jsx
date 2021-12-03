import { useState } from 'react'
import './styles.css'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className="form-container-login">
      <form action="">
        <div className="title-container-login-form">
          <div className="container-image-icon-login-form">
            <img
              className="image-icon-login-form"
              src="/assets/img/Logos/LogoIcono.png"
              alt="logo-login"
            />
          </div>
          <p className="part-text-title-login">orkick</p>
        </div>
        <p className="bienvenido-text-login">Bienvenido</p>
        <input
          className="input-login-form"
          type="email"
          placeholder="Correo electronico"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          className="input-login-form"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={onChangePassword}
        />
        <div className="buton-container-login">
          <button className="button-login-form" type="submit">
            Iniciar Sesión
          </button>
        </div>
      </form>
      <div className="footer-container-login-form">
        <p className="some-text-footer-login">¿No tienes una cuenta?</p>
        <button className="footer-button-login-form">Crear una Cuenta</button>
      </div>
    </div>
  )
}

export default LoginForm
