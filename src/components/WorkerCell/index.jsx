import PropTypes from 'prop-types'
import ReactStars from 'react-rating-stars-component'

import './styles.css'

const WorkerCell = ({
  titulo,
  nombre,
  descripcion,
  estrellas,
  coste,
  trabajos,
}) => {
  return (
    <div className="general-container-workercell">
      <div className="title-workercell-container">
        <p className="title-workercell">{titulo}</p>
      </div>
      <div className="name-workercell-container">
        <p className="name-workercell">{nombre}</p>
      </div>
      <div className="description-workercell-container">
        <p className="description-workercell">{descripcion}</p>
      </div>
      <div className="botton-worker-cell">
        <ReactStars
          count={5}
          value={estrellas}
          edit={false}
          activeColor={'#ffa500'}
          size={'20px'}
        />
        <p className="description-workercell separador-workercell"> | </p>
        <ReactStars
          count={5}
          value={coste}
          edit={false}
          activeColor={'#1e8e3e'}
          size={'20px'}
          char={'$'}
        />
        <p className="description-workercell separador-workercell"> | </p>
        <p className="trabajos-workercell">Trabajos {trabajos}</p>
      </div>
      <hr />
      <div className="button-workercell-container">
        <button className="button-workercell">Contactar</button>
      </div>
    </div>
  )
}

WorkerCell.propTypes = {
  titulo: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  estrellas: PropTypes.number.isRequired,
  coste: PropTypes.number.isRequired,
  trabajos: PropTypes.number.isRequired,
}

export default WorkerCell
