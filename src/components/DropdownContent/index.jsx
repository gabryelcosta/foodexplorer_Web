// DropdownContent.jsx
import { useState } from 'react';
import { useNavigation } from '../../hooks/useNavigate';
import { useTheme } from '../../context/ThemeContext';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { ToggleSwitch } from '../SwitchButton';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { Dropdown } from './styles'
import { ButtonText } from '../ButtonText'

export function DropdownContent() {
  const { dropdownIsActive } = useContext(MenuContext);
  const { goProfilePage } = useNavigation();
  const { theme, toggleTheme } = useTheme();
  const { user, updateUser } = useAuth();
  const [userThemePreference, setUserThemePreference] = useState(user.theme_preference);

  const handleToggleTheme = (event) => {
    event.stopPropagation();
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setUserThemePreference(newTheme);
    api.put('users/', { user_id: user.id, theme_preference: newTheme })
      .then(() => {
        toggleTheme(newTheme);
        updateUser({ ...user, theme_preference: newTheme });
      });
  };

  return dropdownIsActive ? (
    <Dropdown>
      <li onClick={(e) => e.stopPropagation()}>
          <ButtonText onClick={goProfilePage} title="Editar perfil"/>
      </li>
      <li>
      <div className="container_theme" onClick={(e) => e.stopPropagation()}>
        <span>Tema Escuro</span>
        <ToggleSwitch
          checked={userThemePreference === 'dark'}
          onChange={(e) => {
            e.stopPropagation();
            handleToggleTheme(e);
          }}
        />
        </div>
      </li>
    </Dropdown>
  ) : null;
}