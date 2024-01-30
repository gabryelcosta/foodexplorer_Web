import { Container } from './styles'

/**
 * Componente Input.
 *
 * Este componente renderiza um campo de entrada com um ícone opcional.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {React.Component} [props.icon] - O ícone do campo de entrada.
 * @param {...Object} rest - Outras propriedades passadas para o campo de entrada.
 *
 * @returns {JSX.Element} O elemento do campo de entrada.
 */
export function Input({ icon:Icon, ...rest }){
  return(
    <Container>
      {Icon && <Icon size={20}/>} {/* Se um ícone for fornecido, renderiza o ícone com tamanho 20 */}
      <input {...rest} /> {/* Espalha o resto das props no campo de entrada */}
    </Container>
  )
}