import { useState } from 'react'
import stylesSchedule from './schedule.module.scss'
import stylesBudget from '../budget.module.scss'
import Budget from '../Budget'

const Schedule = () => {
  const randomPourcent = () =>
    `${Math.floor(Math.random() * (100 - 0 + 1)) + 0}%`
  const [items] = useState([
    {
      title: 'Write 5 microblog articles on Instagram',
      content: 'Office / Marketing',
      pourcent: randomPourcent(),
      date: {
        month: 'Jul',
        number: 18,
      },
    },
    {
      title: 'Publish 20 post on Dribbbles',
      content: 'Office / Marketing',
      pourcent: randomPourcent(),
      date: {
        month: 'Jul',
        number: 24,
      },
    },
    {
      title: 'Drafting Material for Travel Campaign',
      content: 'Drafting',
      pourcent: randomPourcent(),
      date: {
        month: 'Jul',
        number: 18,
      },
    },
  ])
  return (
    <div>
      <div className={stylesSchedule.title}>
        <h2>Dashboard</h2>
        <span>Welcome back, Dsaquel!</span>
      </div>
      <Budget title="Schedule content">
        {items.map((item, i) => (
          <div key={i}>
            <div className={stylesBudget.item}>
              <div className={stylesSchedule.itemContainer}>
                <div className={stylesSchedule.itemMain}>
                  <div className={stylesSchedule.date}>
                    <div className={stylesSchedule.month}>
                      {item.date.month}
                    </div>
                    <div className={stylesSchedule.number}>
                      {item.date.number}
                    </div>
                  </div>
                  <div className={stylesSchedule.itemInfo}>
                    <div className={stylesSchedule.itemTitle}>{item.title}</div>
                    <span>{item.content}</span>
                  </div>
                </div>
                <div className={stylesSchedule.itemFooter}>
                  <div className={stylesSchedule.progress}>
                    <div className={stylesSchedule.bg} />
                    <div
                      className={stylesSchedule.advance}
                      style={{ width: item.pourcent }}
                    />
                  </div>
                  <div className={stylesSchedule.progressInfo}>
                    {item.pourcent} Complete
                  </div>
                </div>
              </div>
            </div>
            {i !== items.length - 1 ? (
              <div className={stylesBudget.divider} />
            ) : (
              <div className={stylesBudget.spacer} />
            )}
          </div>
        ))}
      </Budget>
    </div>
  )
}

export default Schedule
