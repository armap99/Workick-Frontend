import MenuLeftOptions from './components/MenuLeftOptions'
import './styles.css'

const MenuLeft = () => {
  return (
    <div className="menuleft-general-container">
      <div
        className="menuleft-background-img"
        style={{ backgroundImage: 'url(assets/img/Logos/header-profile.png)' }}
      >
        <div className="container-icon-menuleft">
          <img
            src="assets/img/Logos/LogoIcono.png"
            alt="workick-icon"
            className="icon-menuleft"
          />
        </div>
      </div>
      <MenuLeftOptions text={'LogIn'} direction={'/login'}></MenuLeftOptions>
    </div>
  )
}

export default MenuLeft
