import { useState, useEffect, useRef } from 'react';
import { Container, DropdownMenu } from './styles';
import ProfileIcon from '../Icons/ProfileIconSVG';
import { useNavigation } from '../../hooks/useNavigate';
import { useTheme } from '../../context/ThemeContext';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { ToggleSwitch } from '../SwitchButton';


export function ProfileImagem() {
  const { goProfilePage } = useNavigation();
  const [dropdownOpen, setDropdownOpen] = useState(() => {
    const storedDropdownOpen = localStorage.getItem('@foodexplorer:dropdownOpen');
    return storedDropdownOpen ? JSON.parse(storedDropdownOpen) : false;
  });
  const { theme, toggleTheme } = useTheme();
  const { user, updateUser } = useAuth();
  const [userThemePreference, setUserThemePreference] = useState(user.theme_preference);

  const dropdownOpenRef = useRef(dropdownOpen); // Criar uma ref para armazenar o estado

  const handleProfileClick = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const handleToggleTheme = () => {
    console.log("handleToggleTheme - Clicked");
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    api.put('users/', { user_id: user.id, theme_preference: newTheme })
      .then(() => {
        toggleTheme(newTheme);
        updateUser({ ...user, theme_preference: newTheme });
        setUserThemePreference(newTheme);
        dropdownOpenRef.current = !dropdownOpenRef.current; // Atualizar o valor da ref
      });
  };

  useEffect(() => {
    setDropdownOpen(dropdownOpenRef.current); // Atualizar o estado usando a ref
    console.log("useEffect - dropdownOpen:", dropdownOpenRef.current);
    localStorage.setItem('@foodexplorer:dropdownOpen', JSON.stringify(dropdownOpenRef.current));
  }, [dropdownOpen]);

  return (
    <Container onClick={handleProfileClick}>
      <ProfileIcon />
      {dropdownOpen && (
        <DropdownMenu onClick={e => e.stopPropagation()}>
          <li>
            <div onClick={goProfilePage}>
              Perfil
            </div>
          </li>
          <li>
            <div className="container_theme">
              <span>Tema Escuro</span>
              <ToggleSwitch
                checked={userThemePreference === 'dark'}
                onClick={(event) => event.stopPropagation()}
                onChange={(event) => {
                  event.stopPropagation();
                  handleToggleTheme();
                }}
              />
            </div>
          </li>
        </DropdownMenu>
      )}
    </Container>
  );
}