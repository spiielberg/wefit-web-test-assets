import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
  width: 100%;
  max-width: 1080px;
  margin: 0 16px 40px;
  padding: 24px;

  @media (max-width: 540px) {
    padding: 16px;
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 32px;
  gap: 24px;

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
  }
`

export const ProductGridTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #999999;
  width: 100%;
  max-width: 280px;

  @media (max-width: 540px) {
    display: none;
  }
`

export const ProductGridContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  @media (max-width: 540px) {
    display: none;
  }
`

export const ProductGridContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 540px) {
    display: none;
  }
`

export const ProductGridImage = styled.img`
  height: 114px;
`

export const ProductTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #2f2e41;
`

export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #2f2e41;
  white-space: nowrap;
`

export const CountText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  color: #2f2e41;
  width: 62px;
  height: 26px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`

export const PriceText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #2f2e41;
  white-space: nowrap;
`

export const ActionButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;

  cursor: pointer;
  width: 24px;
  height: 24px;
`

export const ProductFlexContainer = styled.div`
  display: none;

  @media (max-width: 540px) {
    display: flex;
    align-items: center;
    gap: 11px;
  }
`

export const ProductFlexContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProductFlexImage = styled.img`
  height: 82px;
`

export const FinishButtonContainer = styled.div`
  width: 173px;

  @media (max-width: 540px) {
    width: 100%;
  }
`

export const EmptyCartContent = styled.div`
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

export const EmptyCartText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #2f2e41;
  margin-top: 64px;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 447px;
  border-bottom: 2px solid #3f3d56;
  margin-top: 24px;
`

export const EmptyCartImg = styled.img`
  height: 264px;
`
