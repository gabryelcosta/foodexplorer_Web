import { useNavigate } from "react-router-dom";
import { Container, Content } from "./styles";
import { ButtonText } from '../../components/ButtonText';

export function NotFound() {
  const navigate = new useNavigate();

  function handleBack(){
    navigate("/");
  }

  return (
    <Container>
      <Content>
        <h1>Página indisponível</h1>
          <ButtonText title="voltar para o início" onClick={handleBack}/>
      </Content>
    </Container>
  )
}