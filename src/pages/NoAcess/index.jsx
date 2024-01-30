import { Container, Content } from "./styles";

export function NoAcess() {

  return (
    <Container>
      <Content>
        <h1>Página indisponível</h1>
        <span>Acesso não autorizado.</span>
      </Content>
    </Container>
  )
}