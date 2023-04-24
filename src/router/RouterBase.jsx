import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import LayoutAdmin from '../components/layout.jsx/LayoutAdmin'
import Home from '../pages/Home'
import { BrowserRouter } from 'react-router-dom'

const RouterBase = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterBase
