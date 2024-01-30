import { useNavigate } from 'react-router-dom';

// Função personalizada para navegação
export function useNavigation(){
  // Utiliza o hook useNavigate do react-router-dom
  const navigate = useNavigate();

  // Função para voltar para a página anterior
  function goBack(){
    navigate(-1);
  }

  // Função para ir para a página de cadastro
  function goRegisterPage(){
    navigate('/cadastro');
  }

  // Função para ir para a página inicial
  function goToHomePage(){
    navigate('/');
  }

  // Função para ir para a página de perfil
  function goProfilePage(){
    navigate('/perfil');
  }



  // Retorna todas as funções de navegação
  return {
    goBack,
    goToHomePage,
    goProfilePage,
    goRegisterPage
  };
}