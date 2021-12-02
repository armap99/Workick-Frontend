import './styles.css'

const LoginForm = () => {
  return (
    <div className="form-container-login">
      <form action="">
        <div className="container-image-icon-login-form">
          <img
            className="image-icon-login-form"
            src="/assets/img/Logos/LogoIcono.png"
            alt="logo-login"
          />
          <p>orkick</p>
          <p>Bienvenido</p>
          <input type="email" placeholder="Correo electronico" />
          <input type="password" placeholder="Contraseña" />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>¿No tienes una cuenta?</p>
      <button>Crear una Cuenta</button>
    </div>
  )
}

export default LoginForm
