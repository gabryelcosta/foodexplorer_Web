import { Container, Content } from './styles';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SideMenu } from '../../components/sideMenu';
import imagemPrato from '../../assets/image2.png';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function MyFavorites(){
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
            <h2>Meus Favoritos</h2>
          </div>
          <div className="content_requests">
            <div className="requests">
              <img src={imagemPrato} alt="" />
              <div>
                <p>Salada Radish</p>
                <ButtonText title="Remover dos favoritos"/>
              </div>
            </div>
            <div className="requests">
              <img src={imagemPrato} alt="" />
              <div>
                <p>Salada Radish</p>
                <ButtonText title="Remover dos favoritos"/>
              </div>
            </div>
            <div className="requests">
              <img src={imagemPrato} alt="" />
              <div>
                <p>Salada Radish</p>
                <ButtonText title="Remover dos favoritos"/>
              </div>
            </div>
            <div className="requests">
              <img src={imagemPrato} alt="" />
              <div>
                <p>Salada Radish</p>
                <ButtonText title="Remover dos favoritos"/>
              </div>
            </div>
            <div className="requests">
              <img src={imagemPrato} alt="" />
              <div>
                <p>Salada Radish</p>
                <ButtonText title="Remover dos favoritos"/>
              </div>
            </div>
            <div className="requests">
              <img src={imagemPrato} alt="" />
              <div>
                <p>Salada Radish</p>
                <ButtonText title="Remover dos favoritos"/>
              </div>
            </div>
          </div>
        </Content>
      <Footer />
    </Container>
  )
}