import { Container } from './styles';

/**
 * Componente ToggleSwitch.
 *
 * Este componente renderiza um interruptor de alternância (toggle switch).
 *
 * @param {Object} props - As propriedades do componente.
 * @param {Function} props.onChange - A função a ser chamada quando o estado do interruptor muda.
 * @param {boolean} props.checked - O estado atual do interruptor.
 * @param {string} props.title - O título do interruptor.
 *
 * @returns {JSX.Element} O elemento do interruptor de alternância.
 */
export function ToggleSwitch({ onChange, checked, title }){
  return(
    <Container title={title}>
      <label className="switch">
        <input type="checkbox" onChange={onChange} checked={checked} />
        <span className="slider"></span>
      </label>
    </Container>
  )
}