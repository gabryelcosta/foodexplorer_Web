import { Container, Content } from './styles';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SideMenu } from '../../components/sideMenu';
import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';
import Ellipse from '../../components/Icons/EllipseSVG'
import { api } from '../../services/api';
import CaretLeft from '../../components/Icons/CaretLeftSVG';
import { ButtonText } from '../../components/ButtonText';
import { useNavigation } from '../../hooks/useNavigate';

export function OrderHistory(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const { goToHomePage } = useNavigation();

  useEffect(() => {
    async function fetchOrders() {
      let response;
      if (user.role === USER_ROLE.ADMIN) {
        response = await api.get("/orders");
      } else {
        response = await api.get(`/orders/${user.id}`);
      }

      const groupedOrders = {};

      for (const order of response.data) {
        if (!groupedOrders[order.orderCode]) {
          groupedOrders[order.orderCode] = {
            ...order,
            dishes: [`${order.quantity} x ${order.dishName}`],
          };
        } else {
          groupedOrders[order.orderCode].dishes.push(`${order.quantity} x ${order.dishName}`);
        }
      }

      setOrders(Object.values(groupedOrders));
    }

    fetchOrders();
  }, [user]);

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
        <Content>
          <div className="nav_text">
            <ButtonText icon={CaretLeft} title="voltar" onClick={goToHomePage}/>
          </div>
          <div className="container_main">
          <div className="content_title">
            <h2>Historico de pedidos</h2>
          </div>
          {orders.map((order) => (
            <div className="content_orders" key={order.orderCode}>
              <div className="orders">
                <div className="orders_title">
                  <span>{order.orderCode}</span><span><Ellipse status={order.status} />{order.status}</span><span>{order.date} às {order.hour}</span>
                </div>
                <div className="orders_description">
                  <span>{order.dishes.join(', ')}</span>
                </div>
              </div>
            </div>
          ))}
          </div>
          <div className="container_main_desktop">
          <div className="content_title">
            <h2>Historico de pedidos</h2>
          </div>
          {orders.map((order, index) => (
            <div className={`content_orders ${index === 0 ? 'first' : ''}`} key={order.orderCode}>
              <div className="orders">
                {index === 0 && (
                <div className="orders_title">
                  <>
                    <div><h3>Status</h3></div>
                    <div><h3>Código</h3></div>
                    <div><h3>Detalhamento</h3></div>
                    <div><h3>Data e hora</h3></div>
                  </>
                </div>
                )}
                <div className={`orders_description ${index === 0 ? 'first' : ''}`}>
                  <div><span><Ellipse status={order.status}/>{order.status}</span></div>
                  <div><span>{order.orderCode}</span></div>
                  <div><span>{order.dishes.join(', ')}</span></div>
                  <div><span>{order.date} às {order.hour}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </Content>
      <Footer />
    </Container>
  )
}