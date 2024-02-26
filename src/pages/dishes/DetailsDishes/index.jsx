import { Container, Content } from './styles';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { SideMenu } from '../../../components/sideMenu';
import { useState, useEffect } from 'react'
import CaretLeft from '../../../components/Icons/CaretLeftSVG';
import { Tag } from '../../../components/Tag';
import { Button } from '../../../components/Button';
import Receipt from '../../../components/Icons/ReceiptSVG';
import { Stepper } from '../../../components/Stepper';
import { useNavigation } from '../../../hooks/useNavigate';
import { ButtonText } from '../../../components/ButtonText';
import { USER_ROLE } from '../../../utils/roles';
import { useAuth } from '../../../hooks/auth';
import { api } from '../../../services/api';
import { useParams } from 'react-router-dom';


export function DetailsDishes(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { goToHomePage, goEditPage } = useNavigation();
  const [dish, setDish] = useState(null);  // novo estado para os dados do prato
  const { user } = useAuth();
  const { id: dishId } = useParams();
  const [imageUrl, setImageUrl] = useState(null);  // novo estado para a URL da imagem
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newTotalPrice, newQuantity) => {
    setTotalPrice(newTotalPrice);
    setQuantity(newQuantity);
  };

  useEffect(() => {
    // função para buscar os dados do prato
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${dishId}`);
        setDish(response.data);
        setImageUrl(`${api.defaults.baseURL}/files/${response.data.image}`);
      } catch (error) {
        console.error('An error occurred while fetching the dish:', error);
      }
    }

    // buscar os dados do prato quando o componente for montado
    fetchDish();
  }, [dishId]);

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
          {[USER_ROLE.USUARIO, USER_ROLE.ADMIN].includes(user.role) && dish &&
      <div className="details_content">
        <div className="details_image">
          <img src={imageUrl} alt={dish.name} />
        </div>
        <div className="details_descriptions">
          <div className="details_text">
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
          </div>
          <div className="details_tag">
            {dish.ingredients.map(ingredient => (
              <Tag key={ingredient} title={ingredient} />
            ))}
          </div>
          <div className="details_buttons">
            {user.role === USER_ROLE.USUARIO &&
              <>
                <Stepper price={dish.price} onQuantityChange={handleQuantityChange}/>
                <Button className="btn_order">
                  <Receipt />
                  <span>pedir ∙ R$ {totalPrice}</span>
                </Button>
              </>
            }
            {[USER_ROLE.ADMIN].includes(user.role) &&
              <Button className="btn_order" title="Editar prato" onClick={() => goEditPage(dishId)}/>
            }
          </div>
        </div>
      </div>
    }
        </Content>
      <Footer />
    </Container>
  )
}