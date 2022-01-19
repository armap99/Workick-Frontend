import PropTypes from 'prop-types'
import './styles.css'

const WorkerProfileContainer = ({
  nombre,
  direccion,
  descripcion,
  trabajos,
  estrellas,
  costo,
}) => {
  return (
    <div className="worker-profile-general-container">
      <h5 className="aboutme-workerprofile">Detalles del perfil</h5>
      <div className="center-class-img-profileworker">
        <div className="worker-profile-img-container">
          <img
            className="worker-profile-img"
            src="/assets/img/Logos/LogoIcono.png"
            alt="profile image"
          />
        </div>
      </div>
      <p className="worker-profile-name">{nombre}</p>
      <p className="worker-profile-normal-text">{direccion} </p>
      <p className="worker-profile-normal-text">Sobre mí</p>
      <div className="workerprofile-description-container">
        <p className="worker-profile-normal-text">{descripcion}</p>
      </div>
      <div className="general-worker-profile-bottomc">
        <div className="worker-profile-bottomc">
          <img
            className="imgs-worker-profile"
            src="/assets/img/icons/hammer.svg"
            alt="hammer-icon"
          />
          <p>{trabajos}</p>
          <p>Trabajos</p>
        </div>
        <div className="worker-profile-bottomc">
          <img
            className="imgs-worker-profile"
            src="/assets/img/icons/star.svg"
            alt="start-icon"
          />
          <p>{estrellas}</p>
          <p>Estrellas</p>
        </div>
        <div className="worker-profile-bottomc">
          <img
            className="imgs-worker-profile"
            src="/assets/img/icons/coin.svg"
            alt=""
          />
          <p>{costo}</p>
          <p>Coste</p>
        </div>
      </div>
    </div>
  )
}

WorkerProfileContainer.propTypes = {
  nombre: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  trabajos: PropTypes.number.isRequired,
  estrellas: PropTypes.number.isRequired,
  costo: PropTypes.number.isRequired,
}

export default WorkerProfileContainer
