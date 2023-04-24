import { Outlet } from 'react-router-dom'
import SideBar from '../Sidebar/Sidebar'
import './layoutAdmin.scss'
import Toolbar from '../Toolbar/Toolbar'
import { useState } from 'react'
const LayoutAdmin = () => {
  const [showSidebar, setShowsidebar] = useState(true)

  return (
    <div className={showSidebar ? 'layout' : 'layout-no-sidebar'}>
      <Toolbar showSidebar={showSidebar} setShowsidebar={setShowsidebar} />
      {showSidebar && <SideBar />}
      <div className="main">
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutAdmin
