import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import { useTheme } from '../context/ThemeContext'; // Certifique-se de importar o useTheme

// Cria um contexto de autenticação
const AuthContext = createContext({});

// Provedor de autenticação
function AuthProvider({ children }){
  // Define os estados para dados do usuário, erro e mensagem de atualização de perfil
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileUpdateMessage, setProfileUpdateMessage] = useState(null);
  const { theme, setTheme } = useTheme();


// Função para realizar o login do usuário
// Função para realizar o login do usuário
async function signIn({ email, password }){
  setError(null); // Limpa o estado de erro
  try {
    const response = await api.post("/sessions", { email, password });
    const { user } = response.data;

    // Armazena os dados do usuário no local storage
    localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

    // Atualiza o estado com os dados do usuário
    setData({ user: user });
  // Se o usuário tiver uma preferência de tema, use-a. Caso contrário, use a preferência do sistema.
    if (user.theme_preference) {
      setTheme(user.theme_preference);
    } else {
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDarkMode ? 'dark' : 'light');
    }

  } catch(error){
    // Define o estado de erro com a mensagem de erro da resposta ou uma mensagem padrão
    setError(error.response ? error.response.data.message : "Não foi possível entrar.");
  }
}

  // Função para realizar o logout do usuário
  function signOut(){
    // Remove os dados do usuário do local storage e limpa os estados
    localStorage.removeItem("@foodexplorer:user");
    setData({});
    setError(null);
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }

  // Função para atualizar o perfil do usuário
  async function updateProfile({ user, avatarFile }){
    setError(null);
    setProfileUpdateMessage(null);
    try {
      if(avatarFile){
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      const response = await api.put("/users", user);

      // Se a atualização for bem-sucedida, atualiza o estado e o local storage com os novos dados do usuário
      if (response.status === 200 && response.data.message !== "Senha incorreta") {
        setProfileUpdateMessage("Perfil atualizado com sucesso!")
        setData({ user, token: data.token });
        localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      } else {
        throw new Error("Não foi possível atualizar o perfil.");
      }
    } catch(error){
      // Define o estado de erro com a mensagem de erro da resposta ou uma mensagem padrão
      setError(error.response ? error.response.data.message : "Não foi possível atualizar o perfil.");
    }
  }

  const updateUser = (updatedUser) => {
    setData({ user: updatedUser });
    localStorage.setItem("@foodexplorer:user", JSON.stringify(updatedUser));
  };

// Busca os dados do usuário do local storage quando o componente é montado
useEffect(() => {
  const user = localStorage.getItem("@foodexplorer:user");
  if(user){
    const parsedUser = JSON.parse(user);
    setData({
      user: parsedUser
    });

    // Se o usuário tiver uma preferência de tema, use-a. Caso contrário, use a preferência do sistema.
    if (parsedUser.theme_preference) {
      setTheme(parsedUser.theme_preference);
    } else {
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDarkMode ? 'dark' : 'light');
    }
  }
  setLoading(false);
}, []);

  // Retorna o provedor de contexto de autenticação
  return (
    <div>
      <AuthContext.Provider value={{ loading, signIn, signOut, updateProfile, user: data.user, error, profileUpdateMessage, updateUser }}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

// Hook personalizado para usar o contexto de autenticação
function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

// Exporta o provedor de contexto e o hook personalizado
export { AuthProvider, useAuth }