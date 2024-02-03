import { Container, Menu } from './styles';
import Polygon from '../Icons/PolygonSVG';
import menuSvg from '../../assets/Icons/Menu.svg';
import Receipt from '../../components/Icons/ReceiptSVG';
import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';

export function Header({ onOpenMenu }){
  const { user } = useAuth();

  return (
    <Container>
      {[USER_ROLE.USUARIO].includes(user.role) &&
      <>
        <div className="container">
          <Menu onClick={onOpenMenu}>
            <img src={menuSvg}/>
          </Menu>
          <div className='container_title'>
            <Polygon/>
            <h1>food explorer</h1>
          </div>
          <button className="btn_container">
            <p>0</p>
            <Receipt />
          </button>
        </div>
      </>
      }
      {[USER_ROLE.ADMIN].includes(user.role) &&
      <>
      <div className="container">
        <Menu onClick={onOpenMenu}>
          <img src={menuSvg}/>
        </Menu>
        <div className='container_title'>
          <Polygon/>
          <h1>food explorer</h1>
          <p>admin</p>
        </div>
      </div>
      </>
      }
      {[USER_ROLE.SALE].includes(user.role) &&
      <>
      <div className="container">
        <Menu onClick={onOpenMenu}>
          <img src={menuSvg}/>
        </Menu>
        <div className='container_title'>
          <Polygon/>
          <h1>food explorer</h1>
          <p>vendedor</p>
        </div>
      </div>
      </>
      }
    </Container>
  )
}