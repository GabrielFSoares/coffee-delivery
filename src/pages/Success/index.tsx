import {
  SuccessContainer,
  SummaryItemsContainer,
  SummaryItemsContent,
} from './styles'
import Illustration from '../../assets/Illustration.png'
import { useContext, useEffect, useState } from 'react'
import { ItemsInCartContext } from '../../contexts/ItemsInCartContext'
import { useNavigate } from 'react-router-dom'
import { NewOrderFormData } from '../Checkout'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function Success() {
  const { emptyCart } = useContext(ItemsInCartContext)
  const [order, setOrder] = useState({} as NewOrderFormData)
  const navigate = useNavigate()

  useEffect(() => {
    const storageOrderJSON = localStorage.getItem('@coffee-delivery:order')

    if (storageOrderJSON) {
      setOrder(JSON.parse(storageOrderJSON))
      emptyCart()
    } else {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <SummaryItemsContainer>
          {order.address ? (
            <>
              <SummaryItemsContent variant="purple">
                <span>
                  <MapPin size={16} weight="fill" />
                </span>
                <p>
                  Entrega em{' '}
                  <span>
                    {order.address.road}, {order.address.number}
                  </span>{' '}
                  <br />
                  {order.address.neighborhood} - {order.address.city},{' '}
                  {order.address.uf}
                </p>
              </SummaryItemsContent>
              <SummaryItemsContent variant="yellow">
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                <p>
                  Previsão de entrega <br />
                  <span>20 min - 30 min</span>
                </p>
              </SummaryItemsContent>
              <SummaryItemsContent variant="yellow-dark">
                <span>
                  <CurrencyDollar size={16} />
                </span>
                <p>
                  Pagamento na entrega <br />
                  <span>
                    {order.payment.formOfPayment === 'debit'
                      ? 'Cartão de Débito'
                      : order.payment.formOfPayment === 'credit'
                      ? 'Cartão de Crédito'
                      : order.payment.formOfPayment === 'money'
                      ? 'Dinheiro'
                      : null}
                  </span>
                </p>
              </SummaryItemsContent>
            </>
          ) : null}
        </SummaryItemsContainer>
      </div>

      <img src={Illustration} alt="Illustration" />
    </SuccessContainer>
  )
}
