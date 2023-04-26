import {
  ChevronBottomIcon,
  ChevronRightIcon,
  DotIcon,
  LineIcon,
  SearchBarIcon,
} from '../../theme/Icons'
import styles from './toolbar.module.scss'
import avatarImg from '../../assets/images/avatar.jpg'
import user0 from '../../assets/images/user0.jpg'
import user1 from '../../assets/images/user1.jpg'
import user2 from '../../assets/images/user2.jpg'
import user3 from '../../assets/images/user3.jpg'

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
          <input type="search" placeholder="Search..." />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.userStatus}>
          <DotIcon />
          ONLINE
        </div>

        <div className={styles.multipleUsers}>
          <img src={user0} style={{ zIndex: 5 }} />
          <img src={user1} style={{ zIndex: 4 }} />
          <img src={user2} style={{ zIndex: 3 }} />
          <img className={styles.last} src={user3} style={{ zIndex: 2 }} />
        </div>
        <LineIcon className={styles.line} />

        <div></div>
      </div>
    </div>
  )
}

export default Toolbar
