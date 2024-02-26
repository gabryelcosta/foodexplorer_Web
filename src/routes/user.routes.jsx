import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { DetailsDishes } from '../pages/dishes/DetailsDishes';
import { MyRequest } from '../pages/MyRequest'
import { NotFound } from '../pages/NotFound'
import { OrderHistory } from '../pages/OrderHistory'
import { MyFavorites } from '../pages/MyFavorites'


export function UserRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/pratos/detalhes/:id" element={<DetailsDishes />} />
      <Route path="/meupedido" element={<MyRequest />} />
      <Route path="/pedidos" element={<OrderHistory />} />
      <Route path="/favoritos" element={<MyFavorites/>} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  )
}