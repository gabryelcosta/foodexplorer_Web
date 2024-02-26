import { Container } from './styles';
import { ButtonText } from '../ButtonText'
import { IoIosClose } from 'react-icons/io'

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