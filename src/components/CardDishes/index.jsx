import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { CardContainer } from './styles';
import { useNavigation } from '../../hooks/useNavigate';
import { ButtonText } from '../../components/ButtonText';
import { useEffect, useState } from 'react';
import { USER_ROLE } from '../../utils/roles';
import { Stepper } from '../Stepper';
import { useAuth } from '../../hooks/auth';
import { Button } from '../../components/Button';
import Heart from '../../components/Icons/HeartSVG';
import Pencil from '../Icons/PencilSVG';
import { api } from '../../services/api';
import { Notification } from '../../components/Notification';

const generateOrderCode = (userId) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

  return `${year}${month}${day}-${randomNumber}-${userId}`;
};


export function CardPratos(){
  const { user } = useAuth();
  const [pratos, setPratos] = useState({});
  const [notification, setNotification] = useState(null);
  const [orderCodeData, setOrderCodeData] = useState({
    orderCode: generateOrderCode(user.id),
    generatedAt: Date.now(),
  });


  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const CardPrato = ({ id, nome, valor, role, image, descricao }) => {
    const { goEditPage, goToDetailsDishe } = useNavigation();
    const imageUrl = `${api.defaults.baseURL}/files/${image}`
    const [totalPrice, setTotalPrice] = useState(valor);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newTotalPrice, newQuantity) => {
      setTotalPrice(newTotalPrice);
      setQuantity(newQuantity);
    };

    const handleClick = (e) => {
      e.preventDefault();
      goToDetailsDishe(id);
    };

    const handleIncludeClick = async () => {
      try {
        const valorNumerico = parseFloat(valor.replace(',', '.'));
        const totalValue = quantity * valorNumerico;
        const currentTime = Date.now();
        const fifteenMinutesInMilliseconds = 15 * 60 * 1000;

        let orderCode;

        if (currentTime - orderCodeData.generatedAt > fifteenMinutesInMilliseconds) {
          orderCode = generateOrderCode(user.id);
          setOrderCodeData({ orderCode, generatedAt: currentTime });
        } else {
          orderCode = orderCodeData.orderCode;
        }

        await api.post('/shoppingcart', {
          orderCode,
          userId: user.id,
          userName: user.name,
          dishId: id,
          dishName: nome,
          quantity: quantity,
          totalValue: totalValue,
          dishPrice: valorNumerico,
          image: image,
        });
        showNotification('Prato adicionado!', "success")
      } catch (error) {
        console.error('Erro ao criar pedido:', error);
      }
    };

    return (
    <li className="splide__slide">
      <div className="card">
        {role === USER_ROLE.USUARIO ? <ButtonText icon={Heart} className="svg_heart"/> : <ButtonText icon={Pencil} className="svg_pencil" onClick={() => goEditPage(id)}/>}
        <div className={role === USER_ROLE.USUARIO ? "card_description" : "card_description_admin"}>
          <img src={imageUrl} />
          <h3 onClick={handleClick}>{nome} {">"}</h3>
          <p className="food_description">{descricao}</p>
          <p>R$ {totalPrice}</p>
          <div className="card_actions">
            {role === USER_ROLE.USUARIO && <Stepper price={valor} onQuantityChange={handleQuantityChange}/>}
            {role === USER_ROLE.USUARIO && <Button className="btn_inclusion" title="Incluir" onClick={handleIncludeClick}/>}
          </div>
        </div>
      </div>
    </li>
    )
  };

  useEffect(() => {
    const fetchPratos = async () => {
      try {
        const response = await api.get('dishes/');

        const pratosPorCategoria = {};

        response.data.forEach(prato => {
          if (!pratosPorCategoria[prato.category]) {
            pratosPorCategoria[prato.category] = [];
          }
          pratosPorCategoria[prato.category].push(prato);
        });
        setPratos(pratosPorCategoria);
      } catch (error) {
        console.error('Erro ao buscar pratos:', error);
      }
    };

    fetchPratos();
  }, []);

  useEffect(() => {
    if (Object.keys(pratos).length > 0) {
      const options = {
        perPage: 1,
        perMove: 2,
        rewind: true,
        arrows: false,
        pagination: false,
      };

      const splide = new Splide('.splide', options).mount();
      const splidePratosSobremesa = new Splide('.card_pratos_sobremesa .splide', options).mount();
      const splideBebidas = new Splide('.card_bebidas .splide', options).mount();

      const handleResize = () => {
        const shouldShowArrows = window.innerWidth >= 768 && window.innerWidth < 1024;
        const shouldDisableDrag = window.innerWidth >= 768;

        const hasEnoughDishesRefeicoes = pratos['Refeições'] && pratos['Refeições'].length > 4;
        const hasEnoughDishesBebidas = pratos['Bebida'] && pratos['Bebida'].length > 4;
        const hasEnoughDishesSobremesa = pratos['Sobremesa'] && pratos['Sobremesa'].length > 4;

        const shouldShowArrowsRefeicoes = shouldShowArrows || (window.innerWidth >= 1024 && hasEnoughDishesRefeicoes);
        const shouldShowArrowsBebidas = shouldShowArrows || (window.innerWidth >= 1024 && hasEnoughDishesBebidas);
        const shouldShowArrowsSobremesa = shouldShowArrows || (window.innerWidth >= 1024 && hasEnoughDishesSobremesa);

        splide.options = { ...splide.options, arrows: shouldShowArrowsRefeicoes, drag: !shouldDisableDrag };
        splideBebidas.options = { ...splideBebidas.options, arrows: shouldShowArrowsBebidas, drag: !shouldDisableDrag };
        splidePratosSobremesa.options = { ...splidePratosSobremesa.options, arrows: shouldShowArrowsSobremesa, drag: !shouldDisableDrag };
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => {
        splide.destroy();
        splideBebidas.destroy();
        splidePratosSobremesa.destroy();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [pratos]);


  return(
    <CardContainer>
        {[USER_ROLE.USUARIO].includes(user.role) &&
        <>
            <div className="card_refeicoes">
              <h2>Refeições</h2>
              <div className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                {pratos['Refeicao'] && pratos['Refeicao'].map((prato, index) => <CardPrato key={index} id={prato.id} nome={prato.name} image={prato.image} descricao={prato.description} valor={prato.price} role={user.role} />)}
                </ul>
              </div>
            </div>
            </div>
            <div className="card_pratos_sobremesa">
              <h2>Sobremesa</h2>
              <div className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                {pratos['Sobremesa'] && pratos['Sobremesa'].map((prato, index) => <CardPrato key={index} id={prato.id} nome={prato.name} image={prato.image} descricao={prato.description} valor={prato.price} role={user.role} />)}
                </ul>
              </div>
            </div>
            </div>
            <div className="card_bebidas">
              <h2>Bebidas</h2>
              <div className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                {pratos['Bebida'] && pratos['Bebida'].map((prato, index) => <CardPrato key={index} id={prato.id} nome={prato.name} image={prato.image} descricao={prato.description} valor={prato.price} role={user.role} />)}
                </ul>
              </div>
            </div>
            </div>
            </>
          }
          {[USER_ROLE.ADMIN, USER_ROLE.SALE].includes(user.role) &&
            <>
              <div className="card_refeicoes">
                <h2>Refeições</h2>
                <div className="splide">
                <div className="splide__track">
                  <ul className="splide__list">
                  {pratos['Refeicao'] && pratos['Refeicao'].map((prato, index) => <CardPrato key={index} id={prato.id} nome={prato.name} image={prato.image} descricao={prato.description} valor={prato.price} role={user.role} />)}
                  </ul>
                </div>
              </div>
              </div>
              <div className="card_pratos_sobremesa">
                <h2>Sobremesa</h2>
                <div className="splide">
                <div className="splide__track">
                  <ul className="splide__list">
                  {pratos['Sobremesa'] && pratos['Sobremesa'].map((prato, index) => <CardPrato key={index} id={prato.id} nome={prato.name} image={prato.image} descricao={prato.description} valor={prato.price} role={user.role} />)}
                  </ul>
                </div>
              </div>
              </div>
              <div className="card_bebidas">
                <h2>Bebidas</h2>
                <div className="splide">
                <div className="splide__track">
                  <ul className="splide__list">
                  {pratos['Bebida'] && pratos['Bebida'].map((prato, index) => <CardPrato key={index} id={prato.id} nome={prato.name} image={prato.image} descricao={prato.description} valor={prato.price} role={user.role} />)}
                  </ul>
                </div>
              </div>
              </div>
            </>
          }
          {notification && (
            <Notification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification(null)}
              />
          )}
          </CardContainer>
  )
}