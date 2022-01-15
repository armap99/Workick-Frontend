import './styles.css'
import RegisterForm from '../../components/RegisterForm'

const Register = () => {
  return (
    <div className="general-register-container">
      <div className="image-container-register">
        <img
          className="image-register"
          src="assets/img/Logos/LogoPrincipalNoFondo.png"
          alt="Workick-logo-register"
        />
      </div>
      <div>
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
