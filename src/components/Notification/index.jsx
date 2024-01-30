import { Container } from './styles';
import { ButtonText } from '../ButtonText'
import { IoIosClose } from 'react-icons/io'

/**
 * Componente Notification.
 *
 * Este componente renderiza uma notificação com uma mensagem, um tipo e um botão de fechar.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.message - A mensagem da notificação.
 * @param {string} props.type - O tipo da notificação (por exemplo, 'error', 'success').
 * @param {Function} props.onClose - A função a ser chamada quando o botão de fechar é clicado.
 *
 * @returns {JSX.Element} O elemento da notificação.
 */
export function Notification({ message, type, onClose }) {
  return (
    <Container>
      <div className={`notification ${type}`}>
      <p>{message}</p> {/* Renderiza a mensagem da notificação */}
        <ButtonText icon={IoIosClose} onClick={onClose} /> {/* Renderiza o botão de fechar com o ícone IoIosClose e chama onClose quando clicado */}
      </div>
    </Container>
  );
}