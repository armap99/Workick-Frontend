import { useContext } from 'react'
import { AppContext } from '../../data/state'

const Principal = () => {
  const { state } = useContext(AppContext)
  return (
    <div>
      <p>Principal</p>
      <p>{state.nombre}</p>
    </div>
  )
}

export default Principal
