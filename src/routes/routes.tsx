import { Login } from '../modules/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../modules/common/nav-bar'
import { Dashboard } from '../modules/dashboard'
import { Users } from '../modules/users'
import { People } from '../modules/people'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/navbar' element={<NavBar />}>
          <Route path='home/dashboard' element={<Dashboard />} />
          <Route path='home/users' element={<Users />} />
          <Route path='home/people' element={<People />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
