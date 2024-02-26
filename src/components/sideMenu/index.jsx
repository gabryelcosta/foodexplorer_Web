import { Container, Header, Button, Content } from './styles';
import CloseSVG from '../Icons/CloseSVG'
import { ProfileImagem } from '../ProfileImage';
import { Input } from '../Input';
import SearchSVG from '../Icons/SearchSVG';
import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';
import { ButtonText } from '../ButtonText';
import { useNavigation } from '../../hooks/useNavigate';
import { Footer } from '../Footer'
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext'


export function SideMenu(){
    // Obtenha os dados do usuário do contexto de autenticação
    const { user, signOut } = useAuth();
    const { menuIsOpen, toggleMenu } = useContext(MenuContext);

    // Obtenha os métodos de navegação do hook de navegação
    const { goToHomePage, goNewDishePageMobile, goToMyHistory, goToMyRequestSideMenu } = useNavigation();

    function handleSignOut(){
      signOut();
      goToHomePage();
      if (menuIsOpen){
        toggleMenu();
      }
    }

    return(
        <Container data-menu-is-open={menuIsOpen}>
          <Header>
            <div className="container_menu">
              {menuIsOpen &&
                <Button onClick={toggleMenu}>
                  <CloseSVG />
                </Button>
              }
              <h2>Menu</h2>
            </div>
              <ProfileImagem />
          </Header>
          <Content>
              <Input icon={SearchSVG} placeholder="Busque por pratos ou ingredientes" className="input_search"/>
              <div className='nav'>
                {[USER_ROLE.ADMIN].includes(user.role) &&
                  <>
                    <ButtonText
                      title="Novo prato"
                      onClick={goNewDishePageMobile}
                    />
                    <ButtonText
                      title="Pedidos"
                      onClick={goToMyRequestSideMenu}
                    />
                    <ButtonText
                      title="Historico de pedidos"
                      onClick={goToMyHistory}
                    />
                    <ButtonText
                      title="Sair"
                      onClick={handleSignOut}
                    />
                  </>
                }
                {[USER_ROLE.USUARIO].includes(user.role) &&
                  <>
                    <ButtonText
                      title="Meus Favoritos"
                    />
                    <ButtonText
                      title="Histórico de pedidos"
                      onClick={goToMyHistory}
                    />
                    <ButtonText
                      title="Sair"
                      onClick={handleSignOut}
                    />
                  </>
                }
              </div>
          </Content>
          <Footer />
        </Container>
    )
}