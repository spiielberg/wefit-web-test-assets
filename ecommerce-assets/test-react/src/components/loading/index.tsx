import loadSpinner from '../../assets/load-spinner.png'
import { Container, LoadingImg } from './style'

export const Loading = () => {
  return (
    <Container>
      <LoadingImg src={loadSpinner} alt="Loading" />
    </Container>
  )
}
