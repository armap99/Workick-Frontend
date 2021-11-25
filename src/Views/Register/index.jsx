import './styles.css'
import RegisterForm from '../../components/RegisterForm'

const Register = () => {
  return (
    <div className="general-register-container">
      <div>
        <img
          className="image-container-register"
          src="assets/img/Logos/LogoPrincipalNoFondo.png"
          alt="Workick-logo-register"
        />
      </div>
      <div>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  )
}

export default Register
