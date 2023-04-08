import { ButtonsContainer, CoffeeListInCartContainer } from './styles'
import imageCoffee from '../../../../assets/Coffee-types/Type=Americano.png'
import { ButtonMoreOrLess } from '../../../components/button-more-or-less'
import { useState } from 'react'

export function CoffeeListInCart() {
  const [itemQuantityIncart, setItemQuantityIncart] = useState(1)

  return (
    <CoffeeListInCartContainer>
      <div>
        <img src={imageCoffee} alt=""></img>
      </div>
      <div>
        <p>Expresso Tradicional</p>
        <ButtonsContainer>
          <ButtonMoreOrLess
            selectedItemQuantity={itemQuantityIncart}
            setSelectedItemQuantity={setItemQuantityIncart}
          />
        </ButtonsContainer>
      </div>
      <div>.</div>
    </CoffeeListInCartContainer>
  )
}
