import { Container, Content } from './styles';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SideMenu } from '../../components/sideMenu';
import Ellipse from '../../components/Icons/EllipseSVG'


export function OrderHistory(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
        <Content>
          <div className="container_main">
          <div className="content_title">
            <h2>Pedidos</h2>
          </div>
          <div className="content_orders">
            <div className="orders">
              <div className="orders_title">
                <span>000001</span><span><Ellipse />Pendente</span><span>20/05 às 18h00</span>
              </div>
              <div className="orders_description">
                <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
              </div>
            </div>
          </div>
          <div className="content_orders">
            <div className="orders">
              <div className="orders_title">
                <span>000001</span><span><Ellipse />Pendente</span><span>20/05 às 18h00</span>
              </div>
              <div className="orders_description">
                <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
              </div>
            </div>
          </div>
          <div className="content_orders">
            <div className="orders">
              <div className="orders_title">
                <span>000001</span><span><Ellipse />Pendente</span><span>20/05 às 18h00</span>
              </div>
              <div className="orders_description">
                <p>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
              </div>
            </div>
          </div>
          </div>
        </Content>
      <Footer />
    </Container>
  )
}