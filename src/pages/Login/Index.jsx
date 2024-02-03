import { Container, Header, FormLogin } from './styles';
import Polygon from '../../components/Icons/PolygonSVG';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { Notification } from '../../components/Notification';
import { useNavigation } from '../../hooks/useNavigate'

export function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);
  const { goRegisterPage } = useNavigation();

  const { signIn, error } = useAuth();

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  useEffect(() => {
    if (error) {
      showNotification(error, 'error');
    }
  }, [error]);

  async function handleLogin() {
    try {
      await signIn({ email, password });
    } catch (error) {
      showNotification(error.message || 'Erro ao realizar o login.', 'error');
    }
  }

  return(
    <Container>
      <Header>
        <div>
        <Polygon className="svg_poligon"/>
        <h1>Food Explorer</h1>
        </div>
      </Header>
      <FormLogin>
        <div className="inputs">
          <label>
            <p>Email</p>
            <Input
              type="email"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label>
            <p>Senha</p>
            <Input
              type="password"
              placeholder="No mínimo 6 caracteres"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <Button className="btn_entrar" title="Entrar" onClick={handleLogin}/>
        <ButtonText title="Criar uma conta" onClick={goRegisterPage}/>
      </FormLogin>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
          />
        )}
    </Container>
  )
}