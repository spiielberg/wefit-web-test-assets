import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 88px;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 16px;
  width: 100%;
  max-width: 1080px;
`

export const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const CartTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;

  @media (max-width: 768px) {
    display: none;
  }
`

export const CartSubtitle = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #999999;
`
