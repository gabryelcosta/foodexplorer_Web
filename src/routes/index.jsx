import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { useEffect } from 'react';
import{ api } from '../services/api';

import { AdminRoutes } from './admin.routes';
import { SaleRoutes } from './sale.routes'
import { UserRoutes } from './user.routes'
import { AuthRoutes } from './auth.routes';
import { NoRole } from './norole.routes'
import { USER_ROLE } from '../utils/roles';

export function Routes(){
  const { user, signOut } = useAuth();

  useEffect(() => {
    api.get('/users/validated').catch((error) => {
      if(error.response?.status === 401){
      signOut()}
    });
  },[]);

  function AccessRoute(){
    switch(user.role){
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.SALE:
        return <SaleRoutes />;
      case USER_ROLE.USUARIO:
        return <UserRoutes />;
      default:
        return <NoRole />;
    }
  }

  return (
    <BrowserRouter>
      { user ? <AccessRoute /> : <AuthRoutes /> }
    </BrowserRouter>
  )
}