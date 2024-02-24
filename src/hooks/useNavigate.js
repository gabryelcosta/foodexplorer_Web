import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';
import { DEVICE_BREAKPOINTS } from "../styles/deviceBreakpoints";


// Função personalizada para navegação
export function useNavigation(){
  // Utiliza o hook useNavigate do react-router-dom
  const navigate = useNavigate();
  const { toggleMenu, toggleDropdown } = useContext(MenuContext);


  // Função para voltar para a página anterior
  function goBack(){
    navigate(-1);
  }

  // Função para ir para a página de cadastro
  function goRegisterPage(){
    navigate('/cadastro');

    if (window.matchMedia("(min-width: 768px)").matches) {
    toggleMenu();
    }
  }

  // Função para ir para a página inicial
  function goToHomePage(){
    navigate('/');
  }

  // Função para ir para a página de perfil
  function goProfilePage(event){
    event.stopPropagation();
    navigate('/perfil');

  // Verifica se a tela tem pelo menos 768px de largura
  if (window.matchMedia(`(min-width: ${DEVICE_BREAKPOINTS.MD})`).matches) {
    // Se a tela for grande, chama toggleDropdown
    toggleDropdown();
  } else {
    // Se a tela for pequena, chama toggleMenu
    toggleMenu();
    toggleDropdown();
  }
  }

    // Função para ir para a página de edição do prato
    function goEditPage(dishId){
      navigate(`/pratos/editar/${dishId}`);
    }

    // Função para ir para a página de novo prato
    function goNewDishePage(){
      navigate('/pratos/novoprato');
      toggleDropdown();
    }

    // Função para ir para a página de novo prato
    function goNewDishePageMobile(){
      navigate('/pratos/novoprato');
      toggleMenu();
    }

    function goToDetailsDishe(dishId){
      navigate(`/pratos/detalhes/${dishId}`);
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
    goNewDishePageMobile,
  };
}