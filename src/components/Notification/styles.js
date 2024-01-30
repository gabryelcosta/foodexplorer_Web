import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 2.4rem;
  animation: fade-in 1s ease-in-out forwards;

.notification {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 1rem;
  margin-bottom: 1.6rem;
  gap: 1rem;

  button {
    width: 2rem;
    height: 2rem;
    margin: -3rem -1rem 0 0;
    color: black;
  }
}

.notification.success {
  background-color: #4caf50;
  color: white;
}

.notification.error {
  background-color: #f44336;
  color: white;
}

.notification.warning {
  background-color: #ff9800;
  color: white;
}

@keyframes fade-in {
  0% {
    left: -100px;
    opacity: 0;
  }
  100% {
    left: 5rem;
    opacity: 1;
  }
}
`