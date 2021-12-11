import { useContext } from 'react'
import { AppContext } from '../../data/state'
import NavigationBar from '../../components/NavigationBar'
import MenuLeft from '../../components/MenuLeft'

const Principal = () => {
  const { state } = useContext(AppContext)
  return (
    <div>
      <NavigationBar />
      <MenuLeft />
      <p>Principal</p>
      <p>{state.nombre}</p>
    </div>
  )
}

export default Principal
