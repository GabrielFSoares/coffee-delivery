import { HeaderContainer, LocationContainer } from './styles'
import logoCoffeeDelivery from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { ItemsInCartContext } from '../../contexts/ItemsInCartContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { quantityOfItemsInCart } = useContext(ItemsInCartContext)

  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="logotipo" />

      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Rio de Janeiro, RJ</span>
        </LocationContainer>
        <NavLink to="/checkout" title="Checkout">
          <button type="button">
            {quantityOfItemsInCart > 0 ? (
              <span>{quantityOfItemsInCart}</span>
            ) : null}
            <ShoppingCart size={22} weight="fill" />
          </button>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
