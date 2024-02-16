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
    const { goToHomePage, goNewDishePage } = useNavigation();

    function handleSignOut(){
      signOut();
      goToHomePage();
      toggleMenu();
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
                      onClick={goNewDishePage}
                    />
                    <ButtonText
                      title="Usuários"
                    />
                    <ButtonText
                      title="Sair"
                      onClick={handleSignOut}
                    />
                  </>
                }
                {[USER_ROLE.SALE].includes(user.role) &&
                  <>
                    <ButtonText
                      title="Novo prato"
                      onClick={goNewDishePage}
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