import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { DetailsDishes } from '../pages/DetailsDishes';
import { Profile } from '../pages/Profile';
import { EditDishes } from '../pages/EditDishes';
import { NewDishes } from '../pages/NewDishes';
import { MyRequest } from '../pages/MyRequest'
import { OrderHistory } from '../pages/OrderHistory'
import { MyFavorites } from '../pages/MyFavorites'
import { NotFound } from '../pages/NotFound'

export function AdminRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/detalhes" element={<DetailsDishes />} />
      <Route path="/editar" element={<EditDishes />} />
      <Route path="/novoprato" element={<NewDishes />} />
      <Route path="/meupedido" element={<MyRequest />} />
      <Route path="/historicodepedidos" element={<OrderHistory />} />
      <Route path="/favoritos" element={<MyFavorites/>} />


      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  )
}
