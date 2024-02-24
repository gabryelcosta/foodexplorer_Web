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
import slugify from 'slugify';

export function CardPratos(){
  const { user } = useAuth();
  const [pratos, setPratos] = useState({});

  const CardPrato = ({ id, nome, valor, role, image, descricao }) => {
    const { goEditPage, goToDetailsDishe } = useNavigation();
    const imageUrl = `${api.defaults.baseURL}/files/${image}`

    const handleClick = (e) => {
      e.preventDefault();
      // Aqui você pode fazer o que quiser com o ID do prato
      // Por exemplo, você pode chamar a função goToDetailsDishe
      goToDetailsDishe(id); // Use 'id' em vez de 'prato.id'
    };

    return (
    <li className="splide__slide">
      <div className="card">
        {role === USER_ROLE.USUARIO ? <ButtonText icon={Heart} className="svg_heart"/> : <ButtonText icon={Pencil} className="svg_pencil" onClick={() => goEditPage(id)}/>}
        <div className={role === USER_ROLE.USUARIO ? "card_description" : "card_description_admin"}>
          <img src={imageUrl} />
          <h3 onClick={handleClick}>{nome} {">"}</h3>
          <p className="food_description">{descricao}</p>
          <p>R$ {valor}</p>
          <div className="card_actions">
            {role === USER_ROLE.USUARIO && <Stepper />}
            {role === USER_ROLE.USUARIO && <Button className="btn_inclusion" title="Incluir"/>}
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

        // Crie um objeto para armazenar os pratos por categoria
        const pratosPorCategoria = {};

        // Preencha o objeto com os pratos
        response.data.forEach(prato => {
          // Se a categoria do prato ainda não está no objeto, adicione-a
          if (!pratosPorCategoria[prato.category]) {
            pratosPorCategoria[prato.category] = [];
          }

          // Adicione o prato à sua categoria
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
        perPage: 4,
        perMove: 1,
        rewind: true,
        arrows: false,
        pagination: false,
      };

      const splide = new Splide('.splide', options).mount();
      const splidePratosSobremesa = new Splide('.card_pratos_sobremesa .splide', options).mount();
      const splideBebidas = new Splide('.card_bebidas .splide', options).mount();

      const handleResize = () => {
        const shouldShowArrows = window.innerWidth >= 768;  // ajuste este valor conforme necessário
        const shouldDisableDrag = window.innerWidth >= 768;  // ajuste este valor conforme necessário

        const shouldShowArrowsRefeicoes = shouldShowArrows && pratos['Refeições'] && pratos['Refeições'].length > 4;
        const shouldShowArrowsBebidas = shouldShowArrows && pratos['Bebida'] && pratos['Bebida'].length > 4;
        const shouldShowArrowsSobremesa = shouldShowArrows && pratos['Sobremesa'] && pratos['Sobremesa'].length > 4;

        splide.options = { ...splide.options, arrows: shouldShowArrowsRefeicoes, drag: !shouldDisableDrag };
        splideBebidas.options = { ...splideBebidas.options, arrows: shouldShowArrowsBebidas, drag: !shouldDisableDrag };
        splidePratosSobremesa.options = { ...splidePratosSobremesa.options, arrows: shouldShowArrowsSobremesa, drag: !shouldDisableDrag };
      };

      window.addEventListener('resize', handleResize);
      handleResize();  // chame a função uma vez para definir a opção `arrows` e `drag` corretamente na inicialização

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
          </CardContainer>
  )
}