import { CardContainer } from './styles';
import Heart from '../../components/Icons/HeartSVG';
import { Button } from '../../components/Button';
import imagemBanner from '../../assets/banner.png';
import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Stepper } from '../Stepper';

export function CardPratos(){

  useEffect(() => {
    const options = {
      perPage: 2,
      rewind: true,
      arrows: false, // desativa os botões de navegação
      pagination: false, // desativa a paginação
    };
    new Splide('.splide', options).mount();
    new Splide('.card_pratos_principais .splide', options).mount();
    new Splide('.card_pratos_principais .splide', options).mount();
    new Splide('.card_pratos_sobremesa .splide', options).mount();
  }, []);

  return(
    <CardContainer>
            <div className="card_refeicoes">
              <h2>Refeições</h2>
              <div className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            </div>
            <div className="card_pratos_principais">
              <h2>Pratos principais</h2>
              <div className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            </div>
            <div className="card_pratos_sobremesa">
              <h2>Sobremesa</h2>
              <div className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card">
                      <Heart className="svg_heart"/>
                      <div className="card_description">
                        <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
                        <h3>Refeição 1</h3>
                        <p>Valor</p>
                        <Stepper />
                        <Button className="btn_inclusion" title="Incluir"/>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </CardContainer>
  )
}