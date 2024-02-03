import { Container } from './styles'

/**
 * Componente Button.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.title - O título do botão.
 * @param {boolean} [props.loading=false] - O estado de carregamento do botão.
 * @param {JSX.Element} [props.icon] - O ícone do botão.
 * @param {...Object} rest - Outras propriedades passadas para o botão.
 *
 * @returns {JSX.Element} O elemento do botão.
 */
export function Button({ title, loading = false, children, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : (children || title)}
    </Container>
  );
}