import { Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { Register } from '../pages/Register'

export function AuthRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  )
}