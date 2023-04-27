import styles from './home.module.scss'
import Schedule from '../components/home/Schedule/Schedule'
import Channel from '../components/home/Channel/Channel'

const Home = () => {
  return (
    <div className={styles.container}>
      <Schedule />
      <div>{/* later */}</div>
      <Channel />
      <div>{/* later */}</div>
    </div>
  )
}

export default Home
