import { useContext } from 'react' // para usar el contexto
import { AppContext } from '../../data/state' // para usar el contexto

import NavigationBarLogIn from './components/NavigationBarLogIn'
import NavigationBarNoLogIn from './components/NavigationBarNoLogIn'

const NavigationBar = () => {
  const { state } = useContext(AppContext)

  return <>{state.nombre ? <NavigationBarLogIn /> : <NavigationBarNoLogIn />}</>
}

export default NavigationBar
