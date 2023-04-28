import { useState } from 'react'
import './sidebar.scss'
import Logo from '../Logo/Logo'
import {
  CalendarIcon,
  ChatIcon,
  FolderIcon,
  GraphIcon,
  SearchIcon,
  SettingsIcon,
  StatIcon,
  UserIcon,
} from '../../theme/Icons'

const SideBar = () => {
  const [sideBarItems] = useState([
    {
      sectionTitle: 'main menu',
      items: [
        { image: StatIcon, itemTitle: 'Dashboard' },
        { image: ChatIcon, itemTitle: 'Inbox', notificationCount: 1 },
      ],
    },
    {
      sectionTitle: 'Workspace',
      items: [
        { image: UserIcon, itemTitle: 'Accounts' },
        { image: CalendarIcon, itemTitle: 'Schedule Post' },
        { image: SearchIcon, itemTitle: 'Communities' },
        { image: GraphIcon, itemTitle: 'Analytics' },
      ],
    },
    {
      sectionTitle: 'General',
      items: [
        { image: FolderIcon, itemTitle: 'File & Folders' },
        { image: SettingsIcon, itemTitle: 'Settings' },
      ],
    },
  ])

  return (
    <section className="sidebar">
      <div className="top">
        <Logo />
        {sideBarItems.map((sideBarItem, sideBarItemIndex) => (
          <ul className="section" key={sideBarItemIndex}>
            <div className="section-title">{sideBarItem.sectionTitle}</div>
            {sideBarItem.items.map((item, itemIndex) => (
              <li className="item" key={itemIndex}>
                <div className="align-content">
                  <item.image fill="none" />
                  <span>{item.itemTitle}</span>
                </div>
                {item.notificationCount && (
                  <div className="notification">{item.notificationCount}</div>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="footer">
        <div className="helper">
          <div>?</div>
        </div>
        <div className="content">
          Need help with <span className="bold">Dash</span> ?
        </div>
        <button>bonsoir</button>
      </div>
    </section>
  )
}

export default SideBar
