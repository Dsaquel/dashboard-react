import { ChevronRightIcon } from '../../theme/Icons'
import stylesBudget from './budget.module.scss'

const Budget = ({ children, title }) => {
  return (
    <div className={stylesBudget.content}>
      <div className={stylesBudget.header}>
        <h3>{title}</h3>
        <a href="#">
          <div>See Detail</div>
          <ChevronRightIcon />
        </a>
      </div>
      {children}
    </div>
  )
}

export default Budget
