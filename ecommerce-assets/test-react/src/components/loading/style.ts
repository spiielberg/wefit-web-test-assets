import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 40px;
`

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoadingImg = styled.img`
  animation: ${rotateAnimation} 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`
