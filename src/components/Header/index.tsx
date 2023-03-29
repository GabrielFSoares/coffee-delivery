import { HeaderContainer, LocationContainer } from './styles'
import logoCoffeeDelivery from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="logotipo" />
      <span>3</span>

      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Rio de Janeiro, RJ</span>
        </LocationContainer>
        <button type="button">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </nav>
    </HeaderContainer>
  )
}
