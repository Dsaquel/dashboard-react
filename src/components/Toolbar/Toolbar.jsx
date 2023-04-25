import {
  ChevronBottomIcon,
  ChevronRightIcon,
  LineIcon,
} from '../../theme/Icons'
import styles from './toolbar.module.scss'
import avatarImg from '../../assets/images/avatar.jpg'

const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <div className={styles.chevron}>
          <ChevronRightIcon />
        </div>
        <div className={styles.user}>
          <img src={avatarImg} />
          <div className={styles.userInfo}>
            <div className={styles.title}>Dsaquel</div>
            <div>pas@dinspi.com</div>
          </div>
          <ChevronBottomIcon />
        </div>
        <LineIcon className={styles.line} />
      </div>
    </div>
  )
}

export default Toolbar
