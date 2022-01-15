import { useContext } from 'react' // para usar el contexto
import { AppContext } from '../../../../data/state' // para usar el contexto

import './styles.css'
const NavigationBarLogIn = () => {
  const { state } = useContext(AppContext)
  return (
    <nav className="navigation-bar-container-login">
      <ul>
        <li className="container-li-bienvedios-nav-login">
          <p className="text-nav-bar-login">Bienvenidos a Workick</p>
        </li>
        <li className="container-li-login-login container-li-icon-login">
          <p className="text-login-nav-login">{state.nombre} ▼</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBarLogIn
