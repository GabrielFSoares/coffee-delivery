import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  AddressContainer,
  CheckoutContainer,
  CoffeeListInCartContainer,
  ConfirmButton,
  EmptyCart,
  FormOfPaymentConatiner,
  HeaderContainer,
  PaymentContainer,
  SelectedCoffeesContainer,
  TotalPayableContainer,
} from './styles'
import { CoffeeListInCart } from './components/coffee-list-in-cart'
import { useContext, useEffect, useState } from 'react'
import { CoffeeListContext } from '../../contexts/CoffeeListContext'
import { ItemsInCartContext } from '../../contexts/ItemsInCartContext'
import { NavLink } from 'react-router-dom'

export function Checkout() {
  const { coffeeList } = useContext(CoffeeListContext)
  const { itemsInCart } = useContext(ItemsInCartContext)

  const [totalItems, setTotalItems] = useState('0')

  const deliveryPrice = itemsInCart.length > 0 ? (3.5).toFixed(2) : '0'

  const totalPayable = (
    parseFloat(deliveryPrice) + parseFloat(totalItems)
  ).toFixed(2)

  useEffect(() => {
    let sumItemPrices = 0
    if (coffeeList.length > 0 && itemsInCart.length > 0) {
      itemsInCart.map((item) => {
        const currentItemIndex = coffeeList.findIndex((itemId) => {
          return itemId.id === item.coffeeId
        })

        sumItemPrices =
          sumItemPrices +
          parseFloat(coffeeList[currentItemIndex].price) * item.quantity
        setTotalItems(sumItemPrices.toFixed(2))

        return item
      })
    } else {
      setTotalItems('0')
    }
  }, [itemsInCart, coffeeList])

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <AddressContainer>
          <HeaderContainer>
            <span>
              <MapPinLine size={22} />
            </span>
            <span>
              <p>Endereço de Entrega</p>
              <label>Informe o endereço onde deseja receber seu pedido</label>
            </span>
          </HeaderContainer>
          <form>
            <input type="number" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="number" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </form>
        </AddressContainer>
        <PaymentContainer>
          <HeaderContainer>
            <span>
              <CurrencyDollar size={22} />
            </span>
            <span>
              <p>Pagamento</p>
              <label>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </label>
            </span>
          </HeaderContainer>
          <FormOfPaymentConatiner>
            <input type="radio" id="credito" name="FormOfPayment" />
            <label htmlFor="credito">
              <span>
                <CreditCard size={16} />
              </span>
              Cartão de crédito
            </label>
            <input type="radio" id="debito" name="FormOfPayment" />
            <label htmlFor="debito">
              <span>
                <Bank size={16} />
              </span>
              Cartão de débito
            </label>
            <input type="radio" id="dinheiro" name="FormOfPayment" />
            <label htmlFor="dinheiro">
              <span>
                <Money size={16} />
              </span>
              Dinheiro
            </label>
          </FormOfPaymentConatiner>
        </PaymentContainer>
      </div>
      <div>
        <h2>Cafés Selecionados</h2>
        <SelectedCoffeesContainer>
          <CoffeeListInCartContainer>
            {itemsInCart.length > 0 ? (
              itemsInCart.map((item) => {
                const currentItemIndex = coffeeList.findIndex((itemId) => {
                  return itemId.id === item.coffeeId
                })

                if (currentItemIndex > -1) {
                  return (
                    <CoffeeListInCart
                      key={currentItemIndex}
                      coffeeId={item.coffeeId}
                      title={coffeeList[currentItemIndex].title}
                      image={coffeeList[currentItemIndex].image}
                      price={(
                        parseFloat(coffeeList[currentItemIndex].price) *
                        item.quantity
                      ).toFixed(2)}
                      quantity={item.quantity}
                    />
                  )
                }

                return null
              })
            ) : (
              <EmptyCart>Seu Carrinho está vazio</EmptyCart>
            )}

            <TotalPayableContainer>
              <div>
                <span>Total de itens</span>
                <span>R$ {totalItems.replace('.', ',')}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ {deliveryPrice.replace('.', ',')}</span>
              </div>
              <div>
                <span>Total</span>
                <span>R$ {totalPayable.replace('.', ',')}</span>
              </div>
            </TotalPayableContainer>
            <NavLink to="/success" title="Success">
              <ConfirmButton>Confirmar pedido</ConfirmButton>
            </NavLink>
          </CoffeeListInCartContainer>
        </SelectedCoffeesContainer>
      </div>
    </CheckoutContainer>
  )
}
