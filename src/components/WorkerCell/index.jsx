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
      <div>
        <p>{titulo}</p>
      </div>
      <div>
        <p>{nombre}</p>
      </div>
      <div>
        <p>{descripcion}</p>
      </div>
      <div>
        <ReactStars
          count={5}
          value={estrellas}
          edit={false}
          activeColor={'#ffa500'}
          size={'20px'}
        />
        <ReactStars
          count={5}
          value={coste}
          edit={false}
          activeColor={'#1e8e3e'}
          size={'20px'}
          char={'$'}
        />
        <p>{trabajos}</p>
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
