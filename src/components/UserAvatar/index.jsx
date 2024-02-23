import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatarplaceholder.svg';
import { Container } from './styles'

export function UserAvatar({ avatarUrl, onClick }) {
  const { user } = useAuth();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (avatarUrl) {
      setAvatar(avatarUrl);
    } else {
      const defaultAvatarUrl = user && user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
      setAvatar(defaultAvatarUrl);
    }
  }, [user, avatarUrl]);

  return (
    <Container>
      <img src={avatar} alt="Foto do usuário" />
    </Container>
  );
}