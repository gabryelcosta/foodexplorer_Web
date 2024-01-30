import { Container } from './styles'

/**
 * Componente Button.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.title - O título do botão.
 * @param {boolean} [props.loading=false] - O estado de carregamento do botão.
 * @param {...Object} rest - Outras propriedades passadas para o botão.
 *
 * @returns {JSX.Element} O elemento do botão.
 */
export function Button({ title, loading = false, ...rest}){
  return(
    <Container
      type="button" // Define o tipo do elemento como botão
      disabled={loading} // Desativa o botão se a propriedade loading for verdadeira
      {...rest} // Espalha o resto das props no botão
    >
      {loading ? 'Carregando...' : title} {/* Se estiver carregando, mostra "Carregando...", caso contrário, mostra o título */}
    </Container>
  )
}