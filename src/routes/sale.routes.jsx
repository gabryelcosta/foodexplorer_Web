import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { NotFound } from '../pages/NotFound'
import { DetailsDishes } from '../pages/dishes/DetailsDishes';
import { EditDishes } from '../pages/dishes/EditDishes';
import { NewDishes } from '../pages/dishes/NewDishes';

export function SaleRoutes(){
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