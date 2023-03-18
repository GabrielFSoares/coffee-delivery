import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="logotipo" />

      <nav>
        <div>Location</div>
        <div>Carrinho</div>
      </nav>
    </HeaderContainer>
  )
}
