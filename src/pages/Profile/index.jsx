import { Container, Form, Avatar, Header } from './styles';
import { Footer } from '../../components/Footer';
import { useNavigation } from '../../hooks/useNavigate';
import { ButtonText } from '../../components/ButtonText';
import CaretLeft from '../../components/Icons/CaretLeftSVG';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { useState, useEffect } from 'react';
import { UserAvatar } from '../../components/UserAvatar';
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Notification } from '../../components/Notification';


export function Profile(){
  const { user, updateProfile, profileUpdateMessage, error } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();
  const [avatar, setAvatar] = useState(user.avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);
  const { goBack } = useNavigation();
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  async function handleUpdate(){
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated);

    try {
      await updateProfile({ user: userUpdated, avatarFile });
      if (profileUpdateMessage) {
        showNotification(profileUpdateMessage, "success");
      }
    } catch(error) {
      if (error.response && error.response.data && error.response.data.message) {
        if (error.response.data.message === 'Senha antiga incorreta.') {
          showNotification("Senha inválida. Verifique a senha antiga.", "error");
          return;
        } else {
          showNotification(error.response.data.message, "error");
        }
      } else {
        showNotification("Não foi possível atualizar o perfil.", "error");
      }
    }
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  useEffect(() => {
    if (profileUpdateMessage) {
      showNotification(profileUpdateMessage, "success");
    }
  }, [profileUpdateMessage]);

  useEffect(() => {
    if (error) {
      showNotification(error, "error");
    }
  }, [error]);

  return (
    <Container>
      <Header>
        <div className="nav_text">
          <ButtonText icon={CaretLeft} title="voltar" onClick={goBack}/>
        </div>
      </Header>
      <Form>
        <Avatar>
          <UserAvatar avatarUrl={avatar} />
          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
        <Input
          icon={FiUser}
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
          type ="text"
        />
        <Input
          icon={FiMail}
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type ="text"
        />
        <Input
          icon={FiLock}
          placeholder="Senha atual"
          type ="password"
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input
          icon={FiLock}
          placeholder="Nova senha"
          type ="password"
          onChange={e => setPasswordNew(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
      <Footer />
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