import './logo.scss'
import logoIMG from '../../assets/images/logo.svg'

const Logo = () => {
  return (
    <div>
      <div className="logo align-content">
        <img src={logoIMG} />
        <span>Dash</span>
      </div>
    </div>
  )
}

export default Logo
