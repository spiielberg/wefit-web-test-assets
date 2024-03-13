import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  width: 100%;
  height: 86vh;
  max-width: 1080px;
  margin: 0 16px;
  padding: 0 64px;
`

export const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #2f2e41;
  margin-top: 64px;
`

export const ImageContainer = styled.div`
  margin-top: 24px;
`

export const Img = styled.img`
  height: 264px;
`
