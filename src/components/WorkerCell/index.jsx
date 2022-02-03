import PropTypes from 'prop-types'
import ReactStars from 'react-rating-stars-component'
import { useContext } from 'react'
import { AppContext } from '../../data/state' // para variables locales
import { useHistory } from 'react-router-dom' // cambio de vista
import Swal from 'sweetalert2' // para alertas
import withReactContent from 'sweetalert2-react-content'

import { addWorkOffer } from '../../services/offerService'

import './styles.css'

const MySwal = withReactContent(Swal)

const WorkerCell = ({
  titulo,
  nombre,
  descripcion,
  estrellas,
  coste,
  trabajos,
  id,
  categoria,
}) => {
  const { state } = useContext(AppContext)
  const history = useHistory()
  const { dispatch } = useContext(AppContext)

  const contactarTrabajador = () => {
    if (!state.id) history.push('/login')
    else {
      MySwal.fire({
        title: 'Propuesta',
        confirmButtonText: 'Enviar',
        width: '550px',
        html:
          '<div class="">' +
          '<div class="swal2-html-container swal-worker-cell"><p>Direccion</p></div>' +
          '<input id="swal-input1" class="swal2-input">' +
          '<div class="swal2-html-container swal-worker-cell"><p>Municipio</p></div>' +
          '<select id="swal-input2" name="select" class="swal2-select">' +
          '<option value="Guadalajara">Guadalajara</option>' +
          '<option value="Zapopan">Zapopan</option>' +
          '<option value="Tlajomulco">Tlajomulco</option>' +
          '<option value="Tlaquepaque">Tlaquepaque</option>' +
          '</select>' +
          '<div class="swal2-html-container swal-worker-cell"><p>Descripción</p></div>' +
          '<textarea id="swal-input3" class="swal2-textarea"></textarea>' +
          '</di>',
        focusConfirm: false,
        preConfirm: () => {
          const direccion = document.getElementById('swal-input1').value
          const municipio = document.getElementById('swal-input2').value
          const descripcion = document.getElementById('swal-input3').value
          const data = {
            idUsuario: state.id,
            idTrabajador: id,
            ubicacionPropuesta: direccion,
            municipio: municipio,
            descripcion: descripcion,
            categoria: categoria,
          }
          sedOffer(data)
        },
      })
    }
  }

  const sedOffer = async (par) => {
    try {
      const res = await addWorkOffer(par)
      console.log(res)
    } catch (err) {
      console.log(err)
      if (err.message === 'Request failed with status code 401') {
        throwUnAuthorizedMessage()
      }
    }
  }

  const throwUnAuthorizedMessage = () => {
    let timerInterval
    MySwal.fire({
      title: 'Sesión inválida!',
      html: 'Por favor reingrese sus credenciales.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        history.push('/login')
      }
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
          onClick={() => contactarTrabajador()}
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
  categoria: PropTypes.number.isRequired,
}

export default WorkerCell
