import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 1080px;
  padding: 0 16px;
  margin-bottom: 40px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 24px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 920px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`
