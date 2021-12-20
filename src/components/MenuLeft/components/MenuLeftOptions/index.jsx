import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom' // para usar la navegacion
import './styles.css'

const MenuLeftOptions = ({ text, direction }) => {
  const history = useHistory()

  const redirect = () => {
    history.push(direction)
  }

  return (
    <div className="option-menuleft-container">
      <span className="option-menuleft-text" onClick={redirect}>
        {text}
      </span>
    </div>
  )
}

MenuLeftOptions.propTypes = {
  text: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
}

export default MenuLeftOptions
