import { Container, Content } from './styles';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SideMenu } from '../../components/sideMenu';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { useEffect } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';


export function MyRequest(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { user } = useAuth();
  const totalValue = cartItems.reduce((total, item) => total + item.totalValue, 0);

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

  async function deleteItem(orderCode) {
    try {
      await api.delete(`/shoppingcart/${orderCode}`);
      const updatedItems = cartItems.filter(item => item.orderCode !== orderCode);
      setCartItems(updatedItems);
    } catch (error) {
      console.error('Erro ao excluir o item:', error);
    }
  }

  async function moveToOrders() {
    try {
      console.log('Movendo itens para pedidos para o usuário:', user.id);
      await api.post(`/orders/${user.id}`);
      console.log('Itens movidos para pedidos. Limpando carrinho...');
      setCartItems([]);
    } catch (error) {
      console.error('Erro ao mover itens para os pedidos:', error);
    }
  }

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
        <Content>
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
                  <ButtonText title="Excluir" onClick={() => deleteItem(item.orderCode)}/>
                </div>
              </div>
            ))}
            <div className="request_total">
              <span>Total: {totalValue}</span>
            </div>
          </div>
          <div className="btn_next">
            <Button title="Avançar" onClick={moveToOrders}/>
          </div>
        </Content>
      <Footer />
    </Container>
  )
}