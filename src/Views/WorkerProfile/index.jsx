import ReviewCell from '../../components/ReviewCell'
import WorkerProfileContainer from '../../components/WorkerProfileContainer'

import './styles.css'

const WorkerProfile = () => {
  return (
    <div className="view-workerprofile-general-container">
      <WorkerProfileContainer></WorkerProfileContainer>
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
