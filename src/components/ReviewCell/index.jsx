import PropTypes from 'prop-types'
import ReactStars from 'react-rating-stars-component'

import './styles.css'

const ReviewCell = ({ cliente, resena, calificacion, precio }) => {
  return (
    <div className="review-general-container">
      <div className="reviewcell-nametitle-container">
        <p className="reviewcell-nametitle">{cliente}</p>
      </div>
      <div className="reviewcell-container-review">
        <p className="reviewcell-textreview">{resena}</p>
      </div>
      <div className="reviewcell-botton-container">
        <div className="reviewcell-stars">
          <ReactStars
            count={5}
            value={calificacion}
            edit={false}
            activeColor={'#ffa500'}
            size={15}
          />
        </div>
        <div>
          <ReactStars
            count={5}
            value={precio}
            edit={false}
            activeColor={'#1e8e3e'}
            size={15}
            char={'$'}
          />
        </div>
      </div>
    </div>
  )
}

ReviewCell.propTypes = {
  cliente: PropTypes.string.isRequired,
  resena: PropTypes.string.isRequired,
  calificacion: PropTypes.number.isRequired,
  precio: PropTypes.number.isRequired,
}

export default ReviewCell
