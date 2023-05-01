import { HeaderContainer, LocationContainer } from './styles'
import logoCoffeeDelivery from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'
import { ItemsInCartContext } from '../../contexts/ItemsInCartContext'
import { NavLink } from 'react-router-dom'

interface UfAndCity {
  city: string
  uf: string
}

export function Header() {
  const { quantityOfItemsInCart } = useContext(ItemsInCartContext)
  const [ufAndCity, setUfAndCity] = useState<UfAndCity>({
    city: 'Porto Alegre',
    uf: 'RS',
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const { latitude, longitude } = position.coords
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
      )
        .then((res) => res.json())
        .then((data) => {
          const ISO3166 = Object.keys(data.address).findIndex((key) => {
            return key === 'ISO3166-2-lvl4'
          })
          const ufString = Object.values(data.address)[ISO3166] as string

          setUfAndCity({ city: data.address.city, uf: ufString.slice(-2) })
        })
    })
  }, [])

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="logotipo" />
      </NavLink>

      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>{`${ufAndCity.city}, ${ufAndCity.uf}`}</span>
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
