import { Container, ContentUser, ContentAdmin } from './styles';
import { useState, useEffect  } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SideMenu } from '../../components/sideMenu';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import CaretLeft from '../../components/Icons/CaretLeftSVG';
import { useNavigation } from '../../hooks/useNavigate';
import { Notification } from '../../components/Notification';
import { USER_ROLE } from '../../utils/roles';
import { SelectComponent } from '../../components/InputSelect';
import Ellipse from '../../components/Icons/EllipseSVG'

export function MyRequest(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { user } = useAuth();
  const totalValue = cartItems.reduce((total, item) => total + item.totalValue, 0).toFixed(2);
  const [notification, setNotification] = useState(null);
  const { goToHomePage } = useNavigation();
  const [orders, setOrders] = useState([]);
  const options = [
    { value: 'Pendente', label: 'Pendente' },
    { value: 'Preparando', label: 'Preparando' },
    { value: 'Entregue', label: 'Entregue' },
    { value: 'Cancelado', label: 'Cancelado' },
  ];

  const handleOptionChange = async (event, orderCode) => {
    const newStatus = event.target.value;

    if (user.role === USER_ROLE.ADMIN) {
      try {
        await api.put(`/orders/${orderCode}`, { status: newStatus });

        // Atualize o estado dos pedidos
        setOrders(orders.map(order => order.orderCode === orderCode ? { ...order, status: newStatus } : order));
      } catch (error) {
        console.error('Erro ao atualizar o status do pedido:', error);
      }
    }
  };

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

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  function goToHomePageDelay(){
    setTimeout(() => goToHomePage(), 3200)
  }

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await api.get(`/shoppingcart/${user.id}`);
        setCartItems(response.data);
      } catch (error) {
        console.error('Erro ao buscar itens do carrinho:', error);
      }
    };

    fetchCartItems();
  }, []);

  async function deleteItem(id) {
    try {
      await api.delete(`/shoppingcart/${id}`);
      const updatedItems = cartItems.filter(item => item.id !== id);
      setCartItems(updatedItems);
      showNotification('Item excluído com sucesso!', 'success');
    } catch (error) {
      console.error('Erro ao excluir o item:', error);
      showNotification('Erro ao excluir o item.', 'error');
    }
  }

  async function moveToOrders() {
    try {
      await api.post(`/orders/${user.id}`);
      setCartItems([]);
      showNotification('Pedido realizado com sucesso!', 'success');
      goToHomePageDelay();
    } catch (error) {
      console.error('Erro ao mover itens para os pedidos:', error);
      showNotification('Erro ao mover itens para pedidos.', 'error');
    }
  }

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
      {user.role === USER_ROLE.USUARIO && (
        <>
        <ContentUser>
          <div className="nav_text">
            <ButtonText icon={CaretLeft} title="voltar" onClick={goToHomePage}/>
          </div>
          <div className="content_title">
            <h2>Meu pedido</h2>
          </div>
          <div className="content_requests">
            {cartItems.map((item, index) => (
              <div className="requests" key={index}>
                <img src={`${api.defaults.baseURL}/files/${item.image}`} alt="" />
                <div className="request_title">
                  <div className="request_description">
                    <span>{item.quantity}x</span>
                    <p>{item.dishName}</p>
                    <small>R$ {item.dishPrice}</small>
                  </div>
                  <ButtonText title="Excluir" onClick={() => deleteItem(item.id)}/>
                </div>
              </div>
            ))}
            <div className="request_total">
              <span>Total: {totalValue}</span>
            </div>
          </div>
          <div className="btn_next">
            <Button title="Finalizar pedido" onClick={moveToOrders}/>
          </div>
          </ContentUser>
          </>
          )}
          {user.role === USER_ROLE.ADMIN && (
            <>
            <ContentAdmin>
            <div className="nav_text">
              <ButtonText icon={CaretLeft} title="voltar" onClick={goToHomePage}/>
            </div>
            <div className="container_main">
          <div className="content_title">
            <h2>Pedidos</h2>
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
                <div className="orders_select"><span>
                <SelectComponent
                  value={order.status}
                  onChange={(event) => handleOptionChange(event, order.orderCode)}
                  options={options}
                />
                </span></div>
              </div>
            </div>
          ))}
          </div>
          <div className="container_main_desktop">
          <div className="content_title">
            <h2>Pedidos</h2>
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
                  <div><span>
                  <SelectComponent
                    value={order.status}
                    onChange={(event) => handleOptionChange(event, order.orderCode)}
                    options={options}
                  />
                  </span></div>
                  <div><span>{order.orderCode}</span></div>
                  <div><span>{order.dishes.join(', ')}</span></div>
                  <div><span>{order.date} às {order.hour}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </ContentAdmin>
        </>
        )}

      <Footer />
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
          />
        )}
    </Container>
  )
}