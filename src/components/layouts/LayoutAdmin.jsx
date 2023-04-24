import { Outlet } from 'react-router-dom'
import SideBar from '../sidebar/Sidebar'
import './layoutAdmin.scss'
import Toolbar from '../toolbar/Toolbar'
const LayoutAdmin = () => {
  return (
    <div className="layout">
      <Toolbar />
      <SideBar />
      <div className='main'>
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutAdmin
