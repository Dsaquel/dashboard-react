import Logo from '../Logo/Logo'
import './toolbar.scss'

const Toolbar = ({ showSidebar, setShowsidebar }) => {
  return (
    <div className="toolbar">
      {showSidebar ? (
        <div className="chevron" onClick={() => setShowsidebar(false)}>
          &#60;
        </div>
      ) : (
        <Logo showSidebar={showSidebar} setShowsidebar={setShowsidebar} />
      )}
      <div className="user">{showSidebar}</div>
    </div>
  )
}

export default Toolbar
