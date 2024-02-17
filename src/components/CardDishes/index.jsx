import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { CardContainer } from './styles';
import { useNavigation } from '../../hooks/useNavigate';
import { ButtonText } from '../../components/ButtonText';
import { useEffect } from 'react';
import { USER_ROLE } from '../../utils/roles';
import { Stepper } from '../Stepper';
import { useAuth } from '../../hooks/auth';
import { Button } from '../../components/Button';
import imagemBanner from '../../assets/banner.png';
import Heart from '../../components/Icons/HeartSVG';
import Pencil from '../Icons/PencilSVG';

const CardPrato = ({ nome, valor, role }) => {
  const { goEditPage, goToDetailsDishe } = useNavigation();

  return (
  <li className="splide__slide">
    <div className="card">
      {role === USER_ROLE.USUARIO ? <ButtonText icon={Heart} className="svg_heart"/> : <ButtonText icon={Pencil} className="svg_pencil" onClick={goEditPage}/>}
      <div className={role === USER_ROLE.USUARIO ? "card_description" : "card_description_admin"}>
        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
        <h3 onClick={goToDetailsDishe}>{nome} {">"}</h3>
        <p>{valor}</p>
        {role === USER_ROLE.USUARIO && <Stepper />}
        {role === USER_ROLE.USUARIO && <Button className="btn_inclusion" title="Incluir"/>}
      </div>
    </div>
  </li>
  )
};

export function CardPratos(){
  const { user } = useAuth();
  const pratos = ['Refeição 1', 'Refeição 2', 'Refeição 3', 'Refeição 4', 'Refeição 5', 'Refeição 6'];

  useEffect(() => {
    const options = {
      perPage: 2,
      perMove: 1,
      focus: 'center',
      rewind: true,
      arrows: false,
      pagination: false,
    };

    const splide = new Splide('.splide', options).mount();
    const splidePratosPrincipais = new Splide('.card_pratos_principais .splide', options).mount();
    const splidePratosSobremesa = new Splide('.card_pratos_sobremesa .splide', options).mount();


    const handleResize = () => {
      const shouldShowArrows = window.innerWidth >= 768;  // ajuste este valor conforme necessário
      const shouldDisableDrag = window.innerWidth >= 768;  // ajuste este valor conforme necessário

      splide.options = { ...splide.options, arrows: shouldShowArrows, drag: !shouldDisableDrag };
      splidePratosPrincipais.options = { ...splidePratosPrincipais.options, arrows: shouldShowArrows, drag: !shouldDisableDrag };
      splidePratosSobremesa.options = { ...splidePratosSobremesa.options, arrows: shouldShowArrows, drag: !shouldDisableDrag };
    };

    window.addEventListener('resize', handleResize);
    handleResize();  // chame a função uma vez para definir a opção `arrows` e `drag` corretamente na inicialização

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return(
    <CardContainer>
        {[USER_ROLE.USUARIO].includes(user.role) &&
        <>
            <div className="card_refeicoes">
              <h2>Refeições</h2>
              <div className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                  {pratos.map((prato, index) => <CardPrato key={index} nome={prato} valor="Valor" role={user.role} />)}
                </ul>
              </div>
            </div>
            </div>
            <div className="card_pratos_principais">
              <h2>Pratos principais</h2>
              <div className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                  {pratos.map((prato, index) => <CardPrato key={index} nome={prato} valor="Valor" role={user.role} />)}
                </ul>
              </div>
            </div>
            </div>
            <div className="card_pratos_sobremesa">
              <h2>Sobremesa</h2>
              <div className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                  {pratos.map((prato, index) => <CardPrato key={index} nome={prato} valor="Valor" role={user.role} />)}
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
                    {pratos.map((prato, index) => <CardPrato key={index} nome={prato} valor="Valor" role={user.role} />)}
                  </ul>
                </div>
              </div>
              </div>
              <div className="card_pratos_principais">
                <h2>Pratos principais</h2>
                <div className="splide">
                <div className="splide__track">
                  <ul className="splide__list">
                    {pratos.map((prato, index) => <CardPrato key={index} nome={prato} valor="Valor" role={user.role} />)}
                  </ul>
                </div>
              </div>
              </div>
              <div className="card_pratos_sobremesa">
                <h2>Sobremesa</h2>
                <div className="splide">
                <div className="splide__track">
                  <ul className="splide__list">
                    {pratos.map((prato, index) => <CardPrato key={index} nome={prato} valor="Valor" role={user.role} />)}
                  </ul>
                </div>
              </div>
              </div>
            </>
          }
          </CardContainer>
  )
}