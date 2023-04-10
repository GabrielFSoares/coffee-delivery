import {
  ButtonsContainer,
  CoffeeListInCartContainer,
  CoffeePrice,
  TotalPayableContainer,
  RemoveButton,
  CheckoutContainer,
  ConfirmButton,
} from './styles'
import imageCoffee from '../../../../assets/Coffee-types/Type=Americano.png'
import { ButtonMoreOrLess } from '../../../components/button-more-or-less'
import { useState } from 'react'
import { Trash } from '@phosphor-icons/react'

export function CoffeeListInCart() {
  const [itemQuantityIncart, setItemQuantityIncart] = useState(1)

  return (
    <CheckoutContainer>
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
              height={'2rem'}
            />
            <RemoveButton>
              <Trash size={16} />
              <span>Remover</span>
            </RemoveButton>
          </ButtonsContainer>
        </div>
        <CoffeePrice>
          <span>R$ 9,90</span>
        </CoffeePrice>
      </CoffeeListInCartContainer>
      <TotalPayableContainer>
        <div>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 29,70</span>
        </div>
        <div>
          <span>Total</span>
          <span>R$ 29,70</span>
        </div>
      </TotalPayableContainer>
      <ConfirmButton>Confirmar pedido</ConfirmButton>
    </CheckoutContainer>
  )
}
