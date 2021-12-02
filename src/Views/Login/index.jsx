import './styles.css'
import LoginForm from '../../components/LoginForm'

const Login = () => {
  return (
    <div
      className="general-container-login"
      style={{ backgroundImage: 'url(assets/img/Logos/resumen.jpg)' }}
    >
      <LoginForm />
    </div>
  )
}

export default Login
