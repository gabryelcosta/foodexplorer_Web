import { Routes, Route } from 'react-router-dom';

import { NoAcess } from '../pages/NoAcess'

export function NoRole(){
  return(
    <Routes>
      <Route path="*" exact={true} element={<NoAcess />} />
    </Routes>
  )
}