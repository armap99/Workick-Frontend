import { useEffect, useState } from 'react'
import { getAllWorkersInfo } from '../../services/workerService'
import WorkerCell from '../../components/WorkerCell'

const DefaultPage = () => {
  const [workers, setWorkers] = useState([])

  useEffect(() => {
    requestWorkers()
  }, []) // con [] para que se comporte como como didMount

  const requestWorkers = async () => {
    const lista = await getAllWorkersInfo()
    setWorkers(lista)
    console.log(lista)
  }

  return (
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
  )
}

export default DefaultPage
