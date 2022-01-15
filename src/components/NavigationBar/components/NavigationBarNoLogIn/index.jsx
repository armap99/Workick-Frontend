import { useHistory } from 'react-router-dom' // para usar la navegacion
import './styles.css'

const NavigationBarNoLogIn = () => {
  const history = useHistory()

  const redirectLogin = () => {
    history.push('login')
  }

  return (
    <nav className="navigation-bar-container">
      <ul>
        <li className="container-li-bienvedios-nav">
          <p className="text-nav-bar">Bienvenidos a Workick</p>
        </li>
        <li className="container-li-login">
          <div className="login-container-icon">
            <img
              onClick={redirectLogin}
              className="login-icon"
              src="assets/img/Icons/login.svg"
              alt="loginIcon"
            />
          </div>
        </li>
        <li className="container-li-login container-li-icon">
          <p onClick={redirectLogin} className="text-login-nav">
            Iniciar Sesión
          </p>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBarNoLogIn
