import { useContext } from 'react'
import { AppContext } from '../../data/state'
import NavigationBar from '../../components/NavigationBar'
import MenuLeft from '../../components/MenuLeft'
import WorkerCell from '../../components/WorkerCell'

import './styles.css'

const Principal = () => {
  const { state } = useContext(AppContext)
  return (
    <div className="container-principal">
      <div className="right-principal-container">
        <NavigationBar />
        <p>Principal</p>
        <p>{state.nombre}</p>
        <WorkerCell
          titulo={'Prueba'}
          nombre={'Jose serna'}
          descripcion={'descripcion asdasdas da sd as das'}
          estrellas={4}
          coste={3}
          trabajos={10}
        />
      </div>
      <aside className="left-principal-container">
        <MenuLeft />
      </aside>
    </div>
  )
}

export default Principal
