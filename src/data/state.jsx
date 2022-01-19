import { createContext, useReducer, useEffect } from 'react'
import { useLocalStorage } from './useLocalStoraje'

const AppContext = createContext()

const initialState = {
  token: undefined,
  nombre: undefined,
  id: undefined,
  estatus: undefined,
  idTrabajador: undefined,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-nombre':
      return {
        ...state,
        nombre: action.nombre,
      }
    case 'set-id':
      return {
        ...state,
        id: action.id,
      }
    case 'set-estatus':
      return {
        ...state,
        estatus: action.estatus,
      }
    case 'set-token':
      return { ...state, token: action.token }
    case 'set-idTrabajador':
      return { ...state, idTrabajador: action.idTrabajador }
    default:
      return state
  }
}

function AppContextProvider(propsp) {
  const fullInitialState = {
    ...initialState,
  }

  const [data, setData] = useLocalStorage('workick', fullInitialState) // workick es el nombre el state
  const [state, dispatch] = useReducer(reducer, data)
  const value = { state, dispatch }

  useEffect(() => {
    setData(state)
  }, [state, setData])

  return (
    <AppContext.Provider value={value}>{propsp.children}</AppContext.Provider>
  )
}

const AppContextConsumer = AppContext.Consumer

export { AppContext, AppContextProvider, AppContextConsumer }
