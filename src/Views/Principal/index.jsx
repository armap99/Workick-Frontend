// import { useContext } from 'react'
// import { AppContext } from '../../data/state'
import PropTypes from 'prop-types'
import NavigationBar from '../../components/NavigationBar'
import MenuLeft from '../../components/MenuLeft'

import './styles.css'

const Principal = ({ children }) => {
  // const { state } = useContext(AppContext)

  return (
    <div className="container-principal">
      <div className="right-principal-container">
        <NavigationBar />
        {/* <p>Principal</p>
        <p>{state.nombre}</p> */}
        {children}
      </div>
      <aside className="left-principal-container">
        <MenuLeft />
      </aside>
    </div>
  )
}

Principal.propTypes = {
  children: PropTypes.any,
}

export default Principal
