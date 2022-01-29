import { useEffect, useState } from 'react'
import {
  getAllWorkersInfo,
  getAllWorkersInfoFilter,
} from '../../services/workerService'
import WorkerCell from '../../components/WorkerCell'

import './styles.css'

const DefaultPage = () => {
  const [workers, setWorkers] = useState([])
  const [texto, setTexto] = useState('')

  useEffect(() => {
    requestWorkers()
  }, []) // con [] para que se comporte como como didMount

  const requestWorkers = async () => {
    const lista = await getAllWorkersInfo()
    setWorkers(lista)
    console.log(lista)
  }

  const onChangeTexte = (event) => {
    setTexto(event.target.value.trim())
  }

  const requestWorkersFilter = async (evento) => {
    evento.preventDefault()
    const data = { texto }
    const trabajadores = await getAllWorkersInfoFilter(data)
    console.log(trabajadores)
    setWorkers(trabajadores)
  }

  return (
    <div>
      <div className="filter-defaultpage-container">
        <h2 className="filter-defaultpage-container-text">Filtro</h2>
        <form
          action=""
          onSubmit={requestWorkersFilter}
          className="filter-defaultpage-form-container"
        >
          <input
            type="text"
            placeholder="Buscar..."
            className="filter-defaultpage-form-input"
            onChange={onChangeTexte}
          />
          <hr className="filter-line-defaulpage" />
        </form>
      </div>
      <div>
        {workers.map((worker) => (
          <div key={worker.trabajador.Id}>
            <WorkerCell
              titulo={worker.trabajador.TituloTrabajo}
              nombre={worker.Nombre}
              descripcion={worker.trabajador.DescripcionCorta}
              estrellas={worker.trabajador.CalificacionGlobal}
              coste={worker.trabajador.CalificacionPrecio}
              trabajos={worker.trabajador.Trabajos}
              id={worker.trabajador.Id}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DefaultPage
