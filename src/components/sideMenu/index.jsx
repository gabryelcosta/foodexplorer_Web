import { Container, Header, Button, Content } from './styles';
import CloseSVG from '../Icons/CloseSVG'
import { ProfileImagem } from '../ProfileImage';
import { Input } from '../Input';
import SearchSVG from '../Icons/SearchSVG';
import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ButtonText } from '../ButtonText';
import { useNavigation } from '../../hooks/useNavigate';
import Polygon from '../Icons/PolygonSVG';
import { Footer } from '../Footer'


export function SideMenu({ menuIsOpen, onCloseMenu }){
  // Estado para controlar o botão ativo
  const [activeButton, setActiveButton] = useState(null);
    // Obtenha os dados do usuário do contexto de autenticação
    const { user, signOut } = useAuth();

    // Obtenha a localização atual do hook useLocation
    const location = new useLocation();

    // Obtenha os métodos de navegação do hook de navegação
    const { goToHomePage, goNewDishePage } = useNavigation();

    function handleSignOut(){
      signOut();
      goToHomePage();
    }

  // Efeito para definir o botão ativo com base na localização atual
  useEffect(() => {
    const pathname = location.pathname;
      if(pathname === '/'){
        setActiveButton(null);
      } else if (pathname.startsWith('/clientes')){
        setActiveButton('clients');
      } else if (pathname.startsWith('/fornecedores')){
        setActiveButton('suppliers');
      } else if (pathname.startsWith('/ordemdeservicos')){
        setActiveButton('serviceorders');
      } else if (pathname.startsWith('/equipamentos')){
        setActiveButton('equipments');
      } else if (pathname.startsWith('/usuarios')){
        setActiveButton('user')
      }

  }, [location.pathname])

    return(
        <Container data-menu-is-open={menuIsOpen}>
          <Header>
            <div>
              {menuIsOpen &&
                <Button onClick={onCloseMenu}>
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