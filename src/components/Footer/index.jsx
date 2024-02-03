import { Container } from './styles';
import Polygon from '../Icons/PolygonSVG';

export function Footer(){
  return(
    <Container>
      <div className="footer_content">
        <div>
          <Polygon />
          <h4>food explorer</h4>
        </div>
        <p>© 2023 - Todos os direitos reservados.</p>
      </div>
    </Container>
  )
}