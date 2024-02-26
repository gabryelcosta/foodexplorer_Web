import { Container } from './styles'

export function Input({ icon:Icon, ...rest }){
  return(
    <Container>
      {Icon && <Icon size={20}/>} {/* Se um ícone for fornecido, renderiza o ícone com tamanho 20 */}
      <input {...rest} /> {/* Espalha o resto das props no campo de entrada */}
    </Container>
  )
}