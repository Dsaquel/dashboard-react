import styles from './home.module.scss'
import Schedule from '../components/home/Schedule/Schedule'
import Channel from '../components/home/Channel/Channel'
import LineChart from '../components/Charts/LineChart'

const Home = () => {
  return (
    <div className={styles.container}>
      <Schedule />
      <LineChart />
      <Channel />
      <div>{/* later */}</div>
    </div>
  )
}

export default Home
