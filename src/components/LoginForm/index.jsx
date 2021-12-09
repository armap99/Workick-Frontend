import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../data/state'
import { logIn } from '../../services/accountService'
import './styles.css'

const LoginForm = () => {
  const { dispatch } = useContext(AppContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const onChangeEmail = (event) => {
    setEmail(event.target.value.trim())
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value.trim())
  }

  const logInFun = async (event) => {
    event.preventDefault()
    const data = {
      email,
      password,
    }
    try {
      const res = await logIn(data)
      // console.log(res)
      const { nombre, token, id, estatus } = res.data
      dispatch({
        type: 'set-nombre',
        nombre,
      })
      dispatch({
        type: 'set-token',
        token,
      })
      dispatch({
        type: 'set-id',
        id,
      })
      dispatch({
        type: 'set-status',
        estatus,
      })
      history.push('/')
    } catch (err) {
      if (err.response.status === 400) {
        alert('Datos Invalidos')
      } else {
        alert('Algo fallo')
        setEmail('')
        setPassword('')
      }
    }
  }

  return (
    <div className="form-container-login">
      <form action="" onSubmit={logInFun}>
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
