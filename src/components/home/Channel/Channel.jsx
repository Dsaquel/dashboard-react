import { useState } from 'react'
import stylesChannel from './channel.module.scss'
import stylesBudget from '../budget.module.scss'
import Budget from '../Budget'
import {
  ArrowTopIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
} from '../../../theme/Icons'

const Channel = () => {
  let count = 0
  const length = 4
  const visitors = {
    rest: 500,
    initialValue: 500,
  }
  const pourcentsValues = [
    {
      min: 1,
      max: 25,
    },
    {
      min: 1,
      max: 45,
    },
    {
      min: 15,
      max: 35,
    },
    {
      min: 30,
      max: 75,
    },
  ]
  const pourcentToNumber = (pourcent) => {
    return (visitors.initialValue * pourcent) / 100
  }

  const numberToPourcent = (visitorsNumber) => {
    return (100 * visitorsNumber) / visitors.initialValue
  }

  const getRandomRangeNumber = () => {
    const pourcents = pourcentsValues[((length - count) * Math.random()) | 0]
    pourcentsValues.splice(pourcentsValues.indexOf(pourcents), 1)
    const minValue = pourcentToNumber(pourcents.min)
    const maxValue = pourcentToNumber(pourcents.max)

    return { minValue, maxValue }
  }

  const getRandomVisitors = () => {
    if (count === length - 1) return visitors.rest
    count += 1
    const { minValue, maxValue } = getRandomRangeNumber()
    const res = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
    visitors.rest -= res
    return res
  }

  const [items] = useState([
    {
      name: 'Facebook',
      visitorNumber: getRandomVisitors(),
      color: '#017EFA',
      icon: FacebookIcon,
    },
    {
      name: 'Instagram',
      visitorNumber: getRandomVisitors(),
      color: '#FD1F9B',
      icon: InstagramIcon,
    },
    {
      name: 'LinkedIn',
      visitorNumber: getRandomVisitors(),
      color: '#007AB5',
      icon: LinkedInIcon,
    },
    {
      name: 'Youtube',
      visitorNumber: getRandomVisitors(),
      color: '#FF0000',
      icon: YoutubeIcon,
    },
  ])

  return (
    <div>
      <Budget title="Top Channels">
        <div className={stylesBudget.item}>
          <div className={stylesChannel['big-stat']}>
            <h3>120K</h3>
            <div className={stylesChannel.info}>
              <ArrowTopIcon />
              <div style={{ color: '#30d988' }}>12%</div>
              <span>visit</span>
            </div>
          </div>
        </div>
        <div className={stylesBudget.item}>
          <div className={stylesChannel.progressContainer}>
            {items.map((item, i) => (
              <div
                key={i}
                className={`${stylesChannel.progress}
                  ${i === items.length - 1 && `${stylesChannel.last}`}
                  ${i === 0 && `${stylesChannel.first}`}`}
                style={{
                  width: `${Math.floor(item.visitorNumber / 5)}%`,
                  background: item.color,
                  border: '1px solid #fff',
                }}
              />
            ))}
          </div>
        </div>
        {items.map((item, i) => (
          <div key={i}>
            <div className={stylesBudget.item}>
              <div className={stylesChannel.itemContainer}>
                <div className={stylesChannel.left}>
                  <item.icon />
                  <div style={{ color: item.color }}>{item.name}</div>
                </div>
                <div className={stylesChannel.right}>
                  <div className={stylesChannel['visitors-number']}>
                    {item.visitorNumber} Visitors
                  </div>
                  <div className={stylesChannel['visitors-pourcent']}>
                    {numberToPourcent(item.visitorNumber)}%
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

export default Channel
