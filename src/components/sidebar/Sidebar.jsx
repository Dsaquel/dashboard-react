import { useState } from 'react'
import './sidebar.scss'

const SideBar = () => {
  const [sideBarItems] = useState([
    {
      sectionTitle: 'main menu',
      items: [
        { image: 'vite.svg', itemTitle: 'Dashboard' },
        { image: 'vite.svg', itemTitle: 'Inbox', notificationCount: 1 },
      ],
    },
    {
      sectionTitle: 'Workspace',
      items: [
        { image: 'vite.svg', itemTitle: 'Accounts' },
        { image: 'vite.svg', itemTitle: 'Schedule Post' },
        { image: 'vite.svg', itemTitle: 'Communities' },
        { image: 'vite.svg', itemTitle: 'Analytics' },
      ],
    },
    {
      sectionTitle: 'Workspace',
      items: [
        { image: 'vite.svg', itemTitle: 'File & Folders' },
        { image: 'vite.svg', itemTitle: 'Settings' },
      ],
    },
  ])

  return (
    <section className="sidebar">
      <div className="header align-content">
        <img src="vite.svg" />
        <span>name</span>
      </div>

      {sideBarItems.map((sideBarItem, sideBarItemIndex) => (
        <ul className="section" key={sideBarItemIndex}>
          <div className="section-title">{sideBarItem.sectionTitle}</div>
          {sideBarItem.items.map((item, itemIndex) => (
            <li className="item" key={itemIndex}>
              <div className="align-content">
                <img src={item.image} />
                <span>{item.itemTitle}</span>
              </div>
              {item.notificationCount && (
                <div className="notification">{item.notificationCount}</div>
              )}
            </li>
          ))}
        </ul>
      ))}

      <div className="footer">
        <div className="helper">
          <div>?</div>
        </div>
        <div className='content'>
          Need help with <span className="bold">Dash</span> ?
        </div>
        <button>bonsoir</button>
      </div>
    </section>
  )
}

export default SideBar
