import { Container, Menu } from './styles';
import Polygon from '../Icons/PolygonSVG';
import menuSvg from '../../assets/Icons/Menu.svg';
import Receipt from '../../components/Icons/ReceiptSVG';
import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { Button } from '../../components/Button';
import { Input } from '../Input';
import SearchSVG from '../Icons/SearchSVG';
import { ProfileImagem } from '../ProfileImage';

export function Header(){
  const { user } = useAuth();
  const { toggleMenu } = useContext(MenuContext); // Obtenha toggleMenu do MenuContext

  return (
    <Container>
      {[USER_ROLE.USUARIO].includes(user.role) &&
      <>
        <div className="container_navbar">
          <Menu onClick={toggleMenu}>
            <img src={menuSvg}/>
          </Menu>
          <div className='container_title'>
          <div className="container_svg_text">
            <Polygon/>
            <div className="title">
              <h1>food explorer</h1>
            </div>
          </div>
          <div className="container_desktop">
            <div className="container_input">
              <Input icon={SearchSVG} placeholder="Busque por pratos ou ingredientes" className="input_search"/>
            </div>
            <Button className="btn_container_desktop">
              <Receipt />
              <p>Pedidos (0)</p>
            </Button>
            <ProfileImagem />
          </div>
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
      <div className="container_navbar">
        <Menu onClick={toggleMenu}>
          <img src={menuSvg}/>
        </Menu>
        <div className='container_title'>
          <div className="container_svg_text">
            <Polygon/>
            <div className="title">
              <h1>food explorer</h1>
              <p>admin</p>
            </div>
          </div>
          <div className="container_desktop">
            <div className="container_input">
              <Input icon={SearchSVG} placeholder="Busque por pratos ou ingredientes" className="input_search"/>
            </div>
            <Button className="btn_container_desktop">
              <Receipt />
              <p>Pedidos (0)</p>
            </Button>
            <ProfileImagem />
          </div>
        </div>
      </div>
      </>
      }
      {[USER_ROLE.SALE].includes(user.role) &&
      <>
      <div className="container_navbar">
        <Menu onClick={toggleMenu}>
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