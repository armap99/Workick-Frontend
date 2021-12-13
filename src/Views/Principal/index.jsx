import { useContext } from 'react'
import { AppContext } from '../../data/state'
import NavigationBar from '../../components/NavigationBar'
import MenuLeft from '../../components/MenuLeft'

import './styles.css'

const Principal = () => {
  const { state } = useContext(AppContext)
  return (
    <div className="container-principal">
      <div className="right-principal-container">
        <NavigationBar />
        <p>Principal</p>
        <p>{state.nombre}</p>
      </div>
      <aside className="left-principal-container">
        <MenuLeft />
      </aside>
    </div>
  )
}

export default Principal
