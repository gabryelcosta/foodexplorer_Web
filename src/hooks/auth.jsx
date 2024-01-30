import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

// Cria um contexto de autenticação
const AuthContext = createContext({});

// Provedor de autenticação
function AuthProvider({ children }){
  // Define os estados para dados do usuário, erro e mensagem de atualização de perfil
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [profileUpdateMessage, setProfileUpdateMessage] = useState(null);

  // Função para realizar o login do usuário
  async function signIn({ email, password }){
    setError(null); // Limpa o estado de erro
    try {
      const response = await api.post("/sessions", { email, password });
      const { user } = response.data;

      // Armazena os dados do usuário no local storage
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      // Atualiza o estado com os dados do usuário
      setData({ user });

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
  }

  // Função para atualizar o perfil do usuário
  async function updateProfile({ user }){
    setError(null);
    setProfileUpdateMessage(null);
    try {
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

  // Busca os dados do usuário do local storage quando o componente é montado
  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");
      if(user){
          setData({
            user: JSON.parse(user)
          });
      }
  }, []);

  // Retorna o provedor de contexto de autenticação
  return (
    <div>
      <AuthContext.Provider value={{ signIn, signOut, updateProfile, user: data.user, error, profileUpdateMessage }}>
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