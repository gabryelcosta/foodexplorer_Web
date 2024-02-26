import { Container, Menu } from './styles';
import Polygon from '../Icons/PolygonSVG';
import menuSvg from '../../assets/Icons/Menu.svg';
import Receipt from '../../components/Icons/ReceiptSVG';
import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';
import { useContext, useEffect, useState } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { Button } from '../../components/Button';
import { Input } from '../Input';
import SearchSVG from '../Icons/SearchSVG';
import { ProfileImagem } from '../ProfileImage';
import { useNavigation } from '../../hooks/useNavigate';
import { api } from '../../services/api';

export function Header(){
  const { user } = useAuth();
  const { toggleMenu } = useContext(MenuContext);
  const { goToMyRequest } = useNavigation();
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [pendingOrdersCount, setPendingOrdersCount] = useState(0);

  useEffect(() => {
    const fetchPendingOrdersCount = async () => {
      try {
        const response = await api.get('/orders');
        if (Array.isArray(response.data)) {
          const pendingAndPreparingOrders = response.data.filter(order =>
            order.status.toLowerCase().includes('pendente') ||
            order.status.toLowerCase().includes('preparando')
          );

          const groupedByOrderCode = pendingAndPreparingOrders.reduce((acc, order) => {
            acc[order.orderCode] = order;
            return acc;
          }, {});

          setPendingOrdersCount(Object.keys(groupedByOrderCode).length);
        } else {
          console.error('A resposta da API não é um array:', response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar a quantidade de pedidos pendentes:', error);
      }
    };

    if (user.role === USER_ROLE.ADMIN) {
      fetchPendingOrdersCount();
    }
  }, [user.role]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await api.get(`/shoppingcart/${user.id}`);
        if (Array.isArray(response.data)) { // Verifica se response.data é um array
          setCartItems(response.data);
          setCartItemCount(response.data.length); // Atualiza a quantidade de itens no carrinho
        } else {
          console.error('A resposta da API não é um array:', response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar itens do carrinho:', error);
      }
    };

    fetchCartItems();
  }, []);

    useEffect(() => {
    setCartItemCount(cartItems.length);
  }, [cartItems]);

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
            <Button className="btn_container_desktop" onClick={goToMyRequest}>
              <Receipt />
              <p>Pedidos ({cartItemCount})</p>
            </Button>
            <ProfileImagem />
          </div>
        </div>
          <button className="btn_container" onClick={goToMyRequest}>
            <p>{cartItemCount}</p>
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
              <p>Administrador</p>
            </div>
          </div>
          <div className="container_desktop">
            <div className="container_input">
              <Input icon={SearchSVG} placeholder="Busque por pratos ou ingredientes" className="input_search"/>
            </div>
            <Button className="btn_container_desktop" onClick={goToMyRequest}>
              <Receipt />
              <p>Pedidos ({pendingOrdersCount})</p>
            </Button>
            <ProfileImagem />
          </div>
        </div>
      </div>
      </>
      }
    </Container>
  )
}