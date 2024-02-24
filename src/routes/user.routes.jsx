import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { DetailsDishes } from '../pages/dishes/DetailsDishes';
import { NotFound } from '../pages/NotFound'

export function UserRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/detalhes" element={<DetailsDishes />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  )
}