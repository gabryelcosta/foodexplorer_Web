import styled from 'styled-components';

export const Container = styled.div`
background: none;
border: none;


.container {
  text-align: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 3.4rem;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_TOGGLE_BUTTON_INATIVE : theme.BACKGROUND.BG_TOGGLE_BUTTON_INATIVE};
  transition: 0.4s;
  border-radius: 4rem;
  border: .2rem solid ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_TOGGLE_BUTTON_BORDER : theme.BACKGROUND.BG_TOGGLE_BUTTON_BORDER};
}

.slider:before {
  position: absolute;
  content: "";
  height: 2.6rem;
  width: 2.6rem;
  left: .4rem;
  bottom: .4rem;
  background-color: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_TOGGLE_BUTTON_ICON : theme.BACKGROUND.BG_TOGGLE_BUTTON_ICON};
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: ${({ theme }) => theme.title === 'light' ? theme.BACKGROUND.BG_TOGGLE_BUTTON_ACTIVE : theme.BACKGROUND.BG_TOGGLE_BUTTON_ACTIVE};
}

input:checked + .slider:before {
  transform: translateX(2.6rem);
}
`