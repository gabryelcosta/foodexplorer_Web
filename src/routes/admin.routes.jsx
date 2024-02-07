import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { DetailsDishes } from '../pages/DetailsDishes';
import { Profile } from '../pages/Profile';
import { EditDishes } from '../pages/EditDishes';
import { NewDishes } from '../pages/NewDishes';
import { NotFound } from '../pages/NotFound'

export function AdminRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/detalhes" element={<DetailsDishes />} />
      <Route path="/editar" element={<EditDishes />} />
      <Route path="/novoprato" element={<NewDishes />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  )
}
