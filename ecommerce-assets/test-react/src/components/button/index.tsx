import { Container } from './style'

type ButtonProps = React.ComponentProps<'button'>

export const Button = ({ ...props }: ButtonProps) => {
  return <Container {...props} />
}
