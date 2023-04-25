import {
  ChevronBottomIcon,
  ChevronRightIcon,
  DotIcon,
  LineIcon,
  SearchBarIcon,
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
        <div className={styles.searchBar}>
          <SearchBarIcon />
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.userStatus}>
          <DotIcon />
          ONLINE
        </div>

        <div></div>
      </div>
    </div>
  )
}

export default Toolbar
