import { useEffect, useContext, useState } from 'react'
import ReviewCell from '../../components/ReviewCell'
import WorkerProfileContainer from '../../components/WorkerProfileContainer'
import { getWorkerById } from '../../services/workerService'
import { AppContext } from '../../data/state' // para usar el contexto

import './styles.css'

const WorkerProfile = () => {
  const [reviews, setReviews] = useState([])
  const [profile, setProfile] = useState({})
  const { state } = useContext(AppContext)
  useEffect(() => {
    requestWorkerById()
  }, [])

  const requestWorkerById = async () => {
    const data = { id: state.idTrabajador }
    const trabajadorP = await getWorkerById(data)
    setProfile(trabajadorP)
    setReviews(trabajadorP.trabajador.resenas)
    console.log(trabajadorP)
  }

  return (
    <div className="view-workerprofile-general-container">
      <div className="view-workerprofile-information-container">
        <WorkerProfileContainer
          nombre={profile.Nombre ?? ''}
          direccion={profile.Direccion + ' ' + profile.Municipio}
          descripcion={profile.trabajador?.DescripcionLarga ?? ''}
          trabajos={profile.trabajador?.Trabajos ?? 0}
          estrellas={profile.trabajador?.CalificacionGlobal ?? 0}
          costo={profile.trabajador?.CalificacionPrecio ?? 0}
        />
      </div>
      <div className="view-workerprofile-reviews-container">
        {reviews.map((review) => (
          <div key={review.Id}>
            <ReviewCell
              cliente={'Anónimo'}
              resena={review.Resena}
              calificacion={review.Estrellas}
              precio={review.Precio}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkerProfile
