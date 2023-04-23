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
  FormConatiner,
  FormOfPaymentConatiner,
  HeaderContainer,
  PaymentContainer,
  SelectedCoffeesContainer,
  TotalPayableContainer,
} from './styles'
import { CoffeeListInCart } from './components/coffee-list-in-cart'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { CoffeeListContext } from '../../contexts/CoffeeListContext'
import { ItemsInCartContext } from '../../contexts/ItemsInCartContext'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newOrderValidationSchema = zod.object({
  address: zod.object({
    zipCode: zod.string().length(9, 'CEP inválido'),
    road: zod.string().min(1, 'Informe seu endereço'),
    number: zod.number().min(1),
    complement: zod.string().optional(),
    neighborhood: zod.string().min(1, 'Informe seu bairro'),
    city: zod.string().min(1, 'Informe sua cidade'),
    uf: zod.string().length(2).toUpperCase(),
  }),
  payment: zod.object({
    formOfPayment: zod.string().min(1, 'Informe a forma de pagamento'),
    totalPayable: zod.string(),
  }),
  items: zod.any(),
})

export type NewOrderFormData = zod.infer<typeof newOrderValidationSchema>

export function Checkout() {
  const { coffeeList } = useContext(CoffeeListContext)
  const { itemsInCart } = useContext(ItemsInCartContext)
  const navigate = useNavigate()

  const [totalItems, setTotalItems] = useState('0')

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

    localStorage.removeItem('@coffee-delivery:order')
  }, [itemsInCart, coffeeList])

  const deliveryPrice = itemsInCart.length > 0 ? (3.5).toFixed(2) : '0'
  const totalPayable = (
    parseFloat(deliveryPrice) + parseFloat(totalItems)
  ).toFixed(2)

  const { register, handleSubmit, formState, setValue } =
    useForm<NewOrderFormData>({
      resolver: zodResolver(newOrderValidationSchema),
      defaultValues: {
        address: {
          zipCode: '',
          road: '',
          number: undefined,
          complement: '',
          neighborhood: '',
          city: '',
          uf: '',
        },
        payment: {
          formOfPayment: '',
          totalPayable,
        },
        items: itemsInCart,
      },
    })

  const isSubmitDisabled = itemsInCart.length > 0

  const handleZipCodeMask = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      let zipCodeValue = e.currentTarget.value.replace(/\D/g, '')
      zipCodeValue = zipCodeValue.replace(/^(\d{5})(\d)/, '$1-$2')
      e.currentTarget.value = zipCodeValue

      if (zipCodeValue.length === 9) {
        zipCodeValue = zipCodeValue.replace('-', '')
        fetch(`http://viacep.com.br/ws/${zipCodeValue}/json/`)
          .then((res) => res.json())
          .then((res) => {
            setValue('address.road', res.logradouro)
            setValue('address.complement', res.complemento)
            setValue('address.neighborhood', res.bairro)
            setValue('address.city', res.localidade)
            setValue('address.uf', res.uf)
          })
      }
    },
    [setValue],
  )

  function handleCreateNewOrder(order: NewOrderFormData) {
    order.payment.totalPayable = totalPayable
    localStorage.setItem('@coffee-delivery:order', JSON.stringify(order))
    navigate('/success')
  }

  return (
    <form onSubmit={handleSubmit(handleCreateNewOrder)}>
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
            <FormConatiner>
              <input
                type="text"
                placeholder="CEP"
                maxLength={9}
                {...register('address.zipCode')}
                onKeyUp={handleZipCodeMask}
              />
              <input
                type="text"
                placeholder="Rua"
                {...register('address.road')}
              />
              <input
                type="number"
                placeholder="Número"
                {...register('address.number', { valueAsNumber: true })}
              />
              <input
                type="text"
                placeholder="Complemento"
                {...register('address.complement')}
              />
              <input
                type="text"
                placeholder="Bairro"
                {...register('address.neighborhood')}
              />
              <input
                type="text"
                placeholder="Cidade"
                {...register('address.city')}
              />
              <input
                type="text"
                placeholder="UF"
                maxLength={2}
                {...register('address.uf')}
              />
            </FormConatiner>
          </AddressContainer>
          <PaymentContainer>
            <HeaderContainer>
              <span>
                <CurrencyDollar size={22} />
              </span>
              <span>
                <p>Pagamento</p>
                <label>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </label>
              </span>
            </HeaderContainer>
            <FormOfPaymentConatiner>
              <input
                type="radio"
                id="credit"
                value="credit"
                {...register('payment.formOfPayment')}
              />
              <label htmlFor="credit">
                <span>
                  <CreditCard size={16} />
                </span>
                Cartão de crédito
              </label>
              <input
                type="radio"
                id="debit"
                value="debit"
                {...register('payment.formOfPayment')}
              />
              <label htmlFor="debit">
                <span>
                  <Bank size={16} />
                </span>
                Cartão de débito
              </label>
              <input
                type="radio"
                id="money"
                value="money"
                {...register('payment.formOfPayment')}
              />
              <label htmlFor="money">
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

              <ConfirmButton type="submit" disabled={!isSubmitDisabled}>
                Confirmar pedido
              </ConfirmButton>
              <span>{formState.errors.payment?.formOfPayment?.message}</span>
            </CoffeeListInCartContainer>
          </SelectedCoffeesContainer>
        </div>
      </CheckoutContainer>
    </form>
  )
}
