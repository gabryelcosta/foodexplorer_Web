import { Container, Header, FormLogin } from './styles';
import Polygon from '../../components/Icons/PolygonSVG';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { useState } from 'react';
import { Notification } from '../../components/Notification';
import { useNavigation } from '../../hooks/useNavigate'
import { api } from '../../services/api'


export function Register(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);
  const { goToHomePage } = useNavigation();

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  function isPasswordValid(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$!%^&*])[A-Za-z\d@#$!%^&*]{8,}$/;
    return passwordRegex.test(password);
  }


  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      if(!name || !email || !password){
        return showNotification("Preencha todos os campos!", "warning");
      }

      if (!isEmailValid(email)) {
        return showNotification("Email inválido. Por favor, insira um email válido.", "error");
      }

      if (!isPasswordValid(password)) {
        return showNotification("A senha deve conter pelo menos 8 caracteres, contendo uma letra maiúscula e uma minuscula, incluindo um caractere especial (!@#$%^&*).", "warning");
      }


      const response = await api.post('/users', {
        name,
        email,
        password,
        role: 'usuario' // role padrão
      });

      if (response.status === 201) {
        // Adicionar notificação de sucesso
        showNotification('Cadastro realizado com sucesso!', 'success');
        setTimeout(goToHomePage, 3200);
      } else {
        // Tratar erros de resposta
        showNotification('Erro ao criar conta', 'error');
      }
    } catch (error) {
      // Tratar erros de rede e erros retornados pelo backend
      const errorMessage = error.response?.data?.error || 'Erro de rede';
      showNotification(errorMessage, 'error');
    }
  };

  return(
    <Container>
      <Header>
        <div>
        <Polygon className="svg_poligon"/>
        <h1>Food Explorer</h1>
        </div>
      </Header>
      <FormLogin onSubmit={handleRegister}>
        <div className="inputs">
          <div className="inputs_title_desktop">
            <h2>Crie sua conta</h2>
          </div>
          <label>
            <p>Seu Nome</p>
            <Input
              placeholder="Exemplo: Maria da Silva"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            <p>Email</p>
            <Input
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
        <Button className="btn_create" title="Criar conta" type="submit"/>
        <ButtonText title="Já tenho uma conta" onClick={goToHomePage}/>
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