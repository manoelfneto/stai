import { Login } from '../modules/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../modules/home'
import { Dashboard } from '../modules/dashboard'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />}>
          <Route path='home/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
