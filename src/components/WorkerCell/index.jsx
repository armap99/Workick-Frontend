import PropTypes from 'prop-types'
import ReactStars from 'react-rating-stars-component'
import { useContext } from 'react'
import { AppContext } from '../../data/state' // para variables locales
import { useHistory } from 'react-router-dom' // cambio de vista

import './styles.css'

const WorkerCell = ({
  titulo,
  nombre,
  descripcion,
  estrellas,
  coste,
  trabajos,
  id,
}) => {
  const history = useHistory()
  const { dispatch } = useContext(AppContext)

  const contactarTrabajador = (aux) => {
    dispatch({
      type: 'set-idTrabajador',
      idTrabajador: aux,
    })
  }

  const verPerfilTrabajador = () => {
    console.log(id)
    dispatch({
      type: 'set-idTrabajador',
      idTrabajador: id,
    })
    history.push('/perfilTrabajador')
  }

  return (
    <div className="general-container-workercell">
      <div className="title-workercell-container" onClick={verPerfilTrabajador}>
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
          size={15}
        />
        <p className="description-workercell separador-workercell"> | </p>
        <ReactStars
          count={5}
          value={coste}
          edit={false}
          activeColor={'#1e8e3e'}
          size={15}
          char={'$'}
        />
        <p className="description-workercell separador-workercell"> | </p>
        <p className="trabajos-workercell">Trabajos {trabajos}</p>
      </div>
      <hr />
      <div className="button-workercell-container">
        <button
          className="button-workercell"
          onClick={() => contactarTrabajador(id)}
        >
          Contactar
        </button>
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
  id: PropTypes.number.isRequired,
}

export default WorkerCell
