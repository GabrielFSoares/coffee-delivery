import {
  ButtonsContainer,
  CoffeeListInCartContainer,
  CoffeePrice,
  TotalPayableContainer,
  RemoveButton,
  CheckoutContainer,
  ConfirmButton,
} from './styles'

import { ButtonMoreOrLess } from '../../../components/button-more-or-less'
import { useContext, useEffect, useState } from 'react'
import { Trash } from '@phosphor-icons/react'
import { CoffeeListContext } from '../../../../contexts/CoffeeListContext'
import { ItemsInCartContext } from '../../../../contexts/ItemsInCartContext'

export function CoffeeListInCart() {
  const { coffeeList } = useContext(CoffeeListContext)
  const { itemsInCart } = useContext(ItemsInCartContext)

  const [test, setTest] = useState(0)

  const [itemQuantityInCart, setItemQuantityInCart] = useState(1)

  // useEffect(() => {
  //   // const storageAsJSON = localStorage.getItem(
  //   //   '@coffee-delivery:coffee-list-in-cart',
  //   // )
  //   // if (storageAsJSON) {
  //   //   return JSON.parse(storageAsJSON)
  //   // }
  // })

  // function setItemQuantityIncart() {}

  function setItemQuantityInStorage(id: string | null, quantity: number) {
    const currentItemIndex = itemsInCart.findIndex((item) => {
      return item.coffeeId === id
    })

    console.log(id, currentItemIndex)

    if (currentItemIndex > -1) {
      itemsInCart[currentItemIndex].quantity = quantity
      localStorage.setItem(
        '@coffee-delivery:coffee-list-in-cart',
        JSON.stringify(itemsInCart),
      )
    }
  }

  return (
    <CheckoutContainer>
      {itemsInCart.map((item) => {
        const currentItemIndex = coffeeList.findIndex((itemId) => {
          return itemId.id === item.coffeeId
        })

        if (currentItemIndex > -1) {
          return (
            <CoffeeListInCartContainer key={currentItemIndex}>
              <div>
                <img
                  src={coffeeList[currentItemIndex].image}
                  alt="Coffee image"
                ></img>
              </div>
              <div>
                <p>{coffeeList[currentItemIndex].title}</p>
                <ButtonsContainer>
                  <ButtonMoreOrLess
                    selectedItemQuantity={itemQuantityInCart}
                    setSelectedItemQuantity={setItemQuantityInCart}
                    // setItemQuantityInCart={setItemQuantityInStorage}
                    height={'2rem'}
                  />
                  <RemoveButton
                    onClick={() => setItemQuantityInStorage(item.coffeeId, 5)}
                  >
                    <Trash size={16} />
                    <span>Remover</span>
                  </RemoveButton>
                </ButtonsContainer>
              </div>
              <CoffeePrice>
                <span>{coffeeList[currentItemIndex].price}</span>
              </CoffeePrice>
            </CoffeeListInCartContainer>
          )
        }

        return null
      })}

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
