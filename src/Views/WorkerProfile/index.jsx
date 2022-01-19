import { useEffect, useContext } from 'react'
import ReviewCell from '../../components/ReviewCell'
import WorkerProfileContainer from '../../components/WorkerProfileContainer'
import { getWorkerById } from '../../services/workerService'
import { AppContext } from '../../data/state' // para usar el contexto

import './styles.css'

const WorkerProfile = () => {
  // const [reviews, setReviews] = useState([])
  const { state } = useContext(AppContext)
  useEffect(() => {
    requestWorkerById()
  }, [])

  const requestWorkerById = async () => {
    const data = { id: state.idTrabajador }
    const trabajador = await getWorkerById(data)
    console.log(trabajador)
  }

  return (
    <div className="view-workerprofile-general-container">
      <WorkerProfileContainer
        nombre={'Jose Sena'}
        direccion={'Navio 7'}
        descripcion={'dsahd  asd as dha sdas sd'}
        trabajos={10}
        estrellas={5}
        costo={3}
      ></WorkerProfileContainer>
      <ReviewCell
        cliente={'Armando'}
        resena={'Muy buen trabajo'}
        calificacion={5}
        precio={3}
      />
    </div>
  )
}

export default WorkerProfile
