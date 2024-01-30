import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { NotFound } from '../pages/NotFound'

export function SaleRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Profile />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  )
}