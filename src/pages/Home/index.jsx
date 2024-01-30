import { Container, Content, Header, Footer } from './styles';
import { useEffect } from 'react';
import Polygon from '../../components/PolygonSVG';
import menuSvg from '../../assets/Icons/Menu.svg';
import receiptSvg from '../../assets/Icons/Receipt.svg';
import imagemBanner from '../../assets/banner.png';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Heart from '../../components/HeartSVG';
import { Button } from '../../components/Button';
import minusSvg from '../../assets/Icons/Minus.svg';
import plusSvg from '../../assets/Icons/Plus.svg';

export function Home(){

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
    new Splide('.card_pratos_principais_second .splide', options).mount();
  }, []);

  return (
    <Container>
      <Header>
        <div className="container">
          <img src={menuSvg} />
          <div className='container_title'>
            <Polygon/>
            <h1>food explorer</h1>
          </div>
          <img src={receiptSvg} />
        </div>
      </Header>
      <Content>
        <div className="banner">
          <img src={imagemBanner} alt="Imagem de biscoitos e frutas." />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
                    <Button className="btn_inclusion" title="Incluir"/>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="card_pratos_principais_second">
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
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
                    <div className='card_amount'>
                      <img src={minusSvg}/>
                      <input type="number" placeholder='01'/>
                      <img src={plusSvg} />
                    </div>
                    <Button className="btn_inclusion" title="Incluir"/>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </Content>
      <Footer>
        <div>
          <div>
            <Polygon />
            <h4>food explorer</h4>
          </div>
          <p>© 2023 - Todos os direitos reservados.</p>
        </div>
      </Footer>
    </Container>
  )
}