import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SideMenu } from '../../components/sideMenu';
import { useState } from 'react'
import CaretLeft from '../../components/Icons/CaretLeftSVG';
import imagemPrato from '../../assets/image2.png'
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import Receipt from '../../components/Icons/ReceiptSVG';
import { Stepper } from '../../components/Stepper';
import { useNavigation } from '../../hooks/useNavigate';
import { ButtonText } from '../../components/ButtonText';
import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';

export function DetailsDishes(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { goToHomePage, goEditPage } = useNavigation();
  const { user } = useAuth();

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
        <Content>
          <div className='nav_text'>
            <ButtonText icon={CaretLeft} title="voltar" onClick={goToHomePage}/>
          </div>
          {[USER_ROLE.USUARIO].includes(user.role) &&
          <>
            <div className="details_content">
              <div className="details_image">
                <img src={imagemPrato} alt="" />
              </div>
              <div className="details_descriptions">
                <div className="details_text">
                  <h2>Salada Ravanello</h2>
                  <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                </div>
                <div className="details_tag">
                  <Tag title="alface" />
                  <Tag title="cebola" />
                  <Tag title="pão naan" />
                  <Tag title="pepino" />
                  <Tag title="rabanete" />
                  <Tag title="tomate" />
                </div>
                <div className="details_buttons">
                  <Stepper />
                  <Button className="btn_order">
                    <Receipt />
                    <span>pedir ∙ R$ 25,00</span>
                  </Button>
              </div>
              </div>
            </div>
          </>
          }
          {[USER_ROLE.SALE, USER_ROLE.ADMIN].includes(user.role) &&
          <>
            <div className="details_content">
              <div className="details_image">
                <img src={imagemPrato} alt="" />
              </div>
              <div className="details_descriptions">
                <div className="details_text">
                  <h2>Salada Ravanello</h2>
                  <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                </div>
                <div className="details_tag">
                  <Tag title="alface" />
                  <Tag title="cebola" />
                  <Tag title="pão naan" />
                  <Tag title="pepino" />
                  <Tag title="rabanete" />
                  <Tag title="tomate" />
                </div>
                <div className="details_buttons">
                  <Button className="btn_order" title="Editar prato" onClick={goEditPage}/>
                </div>
              </div>
            </div>
          </>
          }
        </Content>
      <Footer />
    </Container>
  )
}