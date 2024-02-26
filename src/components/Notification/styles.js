import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);

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
`