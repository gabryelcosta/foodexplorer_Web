import { Container } from './styles'

/**
 * Componente ButtonText.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.title - O título do botão.
 * @param {string} props.tooltip - O texto da dica de ferramenta do botão.
 * @param {boolean} [props.disabled=false] - Se o botão está desativado.
 * @param {boolean} [props.isActive=false] - Se o botão está ativo.
 * @param {React.Component} [props.icon] - O ícone do botão.
 * @param {...Object} rest - Outras propriedades passadas para o botão.
 *
 * @returns {JSX.Element} O elemento do botão.
 */
export function ButtonText({ title, tooltip, disabled = false, isActive = false, icon: Icon, ...rest }){
  return(
    <Container
      type="button" // Define o tipo do elemento como botão
      title={tooltip} // Define o texto da dica de ferramenta do botão
      disabled={disabled} // Desativa o botão se a propriedade disabled for verdadeira
      $isactive={isActive} // Define o estado ativo do botão
      {...rest} // Espalha o resto das props no botão
    >
      {Icon && <Icon size={30} />} {/* Se um ícone for fornecido, renderiza o ícone com tamanho 30 */}
      {title} { /* Renderiza o título do botão */}
    </Container>
  )
}