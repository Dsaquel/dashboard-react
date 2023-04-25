import { ChevronRightIcon } from '../../theme/Icons'
import './toolbar.scss'

const Toolbar = ({ showSidebar, setShowsidebar }) => {
  return (
    <div className="toolbar">
      <div className="chevron" onClick={() => setShowsidebar(false)}>
        <ChevronRightIcon />
      </div>
      <div className="user">{showSidebar}</div>
    </div>
  )
}

export default Toolbar
