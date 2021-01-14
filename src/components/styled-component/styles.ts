import styled, { keyframes } from 'styled-components';

const spinning = keyframes`
  {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`;

export const Container = styled.div`
  width: 100%;
  margin: 30px 10px;
  padding: 30px;
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const Spinning = styled.div`
  animation: ${spinning} 2s infinite;
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;
