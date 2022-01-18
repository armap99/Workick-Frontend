import './styles.css'

const WorkerProfileContainer = () => {
  return (
    <div className="worker-profile-general-container">
      <div className="worker-profile-img-container">
        <img
          className="worker-profile-img"
          src="/assets/img/Logos/LogoIcono.png"
          alt="profile image"
        />
      </div>
      <p>Detalles del perfil</p>
      <p>Jose Luis Serna</p>
      <p>Sobre mí</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        officiis, quis itaque esse et obcaecati necessitatibus provident
        deleniti fuga eos saepe animi facere similique voluptatum iste
        exercitationem soluta in rem.
      </p>
    </div>
  )
}

export default WorkerProfileContainer
