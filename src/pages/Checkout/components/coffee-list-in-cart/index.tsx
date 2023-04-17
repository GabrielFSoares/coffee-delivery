import {
  ButtonsContainer,
  CoffeeListItemInCartContainer,
  CoffeePrice,
  RemoveButton,
} from './styles'

import { ButtonMoreOrLess } from '../../../components/button-more-or-less'
import { useContext } from 'react'
import { Trash } from '@phosphor-icons/react'
import { ItemsInCartContext } from '../../../../contexts/ItemsInCartContext'

interface CoffeeListInCartProps {
  coffeeId: string
  title: string
  image: string
  price: string
  quantity: number
}

export function CoffeeListInCart(props: CoffeeListInCartProps) {
  const { setItemQuantityInCart, removeItemInCart } =
    useContext(ItemsInCartContext)

  function handleSetItemQuantityInCart(
    quantity: number,
    id: string,
    action: string,
  ) {
    setItemQuantityInCart(quantity, id, action)
  }

  function handleRemoveItemInCart(coffeeId: string, quantity: number) {
    removeItemInCart(coffeeId, quantity)
  }

  return (
    <CoffeeListItemInCartContainer>
      <div>
        <img src={props.image} alt="Coffee image"></img>
      </div>
      <div>
        <p>{props.title}</p>
        <ButtonsContainer>
          <ButtonMoreOrLess
            selectedItemQuantity={props.quantity}
            setSelectedItemQuantity={handleSetItemQuantityInCart}
            id={props.coffeeId}
            height={'2rem'}
          />
          <RemoveButton
            onClick={() =>
              handleRemoveItemInCart(props.coffeeId, props.quantity)
            }
          >
            <Trash size={16} />
            <span>Remover</span>
          </RemoveButton>
        </ButtonsContainer>
      </div>
      <CoffeePrice>
        <span>{props.price.replace('.', ',')}</span>
      </CoffeePrice>
    </CoffeeListItemInCartContainer>
  )
}
