import { Container, Content } from './styles';
import { useState } from 'react';
import imagemBanner from '../../assets/banner.png';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SideMenu } from '../../components/sideMenu';
import { CardPratos } from '../../components/CardDishes';

export function Home(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
        <Content>
          <div className="banner">
            <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </div>
          <CardPratos />
        </Content>
      <Footer />
    </Container>
  )
}