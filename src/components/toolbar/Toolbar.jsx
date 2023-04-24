import './toolbar.scss'

const Toolbar = ({ showSidebar, setShowsidebar }) => {
  return (
    <div className="toolbar">
      <div className="chevron" onClick={() => setShowsidebar(false)}>
        &#60;
      </div>
      <div className="content">
        <div className="user">
f
        </div>
      </div>
    </div>
  )
}

export default Toolbar
