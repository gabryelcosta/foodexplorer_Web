import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';

// Função personalizada para navegação
export function useNavigation(){
  // Utiliza o hook useNavigate do react-router-dom
  const navigate = useNavigate();
  const { toggleMenu } = useContext(MenuContext);

  // Função para voltar para a página anterior
  function goBack(){
    navigate(-1);
  }

  // Função para ir para a página de cadastro
  function goRegisterPage(){
    navigate('/cadastro');
    toggleMenu();
  }

  // Função para ir para a página inicial
  function goToHomePage(){
    navigate('/');
  }

  // Função para ir para a página de perfil
  function goProfilePage(event){
    event.stopPropagation();
    navigate('/perfil');
    toggleMenu();
  }

    // Função para ir para a página de edição do prato
    function goEditPage(){
      navigate('/editar');
    }

    // Função para ir para a página de novo prato
    function goNewDishePage(){
      navigate('/novoprato');
      toggleMenu();
    }

    function goToDetailsDishe(){
      navigate('/detalhes');
    }

  // Retorna todas as funções de navegação
  return {
    goBack,
    goToHomePage,
    goProfilePage,
    goRegisterPage,
    goEditPage,
    goNewDishePage,
    goToDetailsDishe,
  };
}