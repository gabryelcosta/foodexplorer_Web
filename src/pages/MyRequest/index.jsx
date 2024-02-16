import { Container, Content } from './styles';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SideMenu } from '../../components/sideMenu';
import imagemPrato from '../../assets/image2.png';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function MyRequest(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
            <div className="requests">
              <img src={imagemPrato} alt="" />
              <div>
                <p>Salada Radish</p>
                <ButtonText title="Excluir"/>
              </div>
            </div>
            <div className="requests">
              <img src={imagemPrato} alt="" />
              <div>
                <p>Salada Radish</p>
                <ButtonText title="Excluir"/>
              </div>
            </div>
            <div className="requests">
              <img src={imagemPrato} alt="" />
              <div>
                <p>Salada Radish</p>
                <ButtonText title="Excluir"/>
              </div>
            </div>
            <div className="requests">
              <img src={imagemPrato} alt="" />
              <div>
                <p>Salada Radish</p>
                <ButtonText title="Excluir"/>
              </div>
            </div>
            <div className="requests">
              <img src={imagemPrato} alt="" />
              <div>
                <p>Salada Radish</p>
                <ButtonText title="Excluir"/>
              </div>
            </div>
            <div className="requests">
              <img src={imagemPrato} alt="" />
              <div>
                <p>Salada Radish</p>
                <ButtonText title="Excluir"/>
              </div>
            </div>
            <div className="request_total">
              <span>Total: R$ 103,88</span>
            </div>
          </div>
          <div className="btn_next">
            <Button title="Avançar" />
          </div>
        </Content>
      <Footer />
    </Container>
  )
}