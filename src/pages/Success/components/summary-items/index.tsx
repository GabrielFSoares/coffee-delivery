import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { itemColorVariant } from '../../../Home/components/intro-items/style'
import { SummaryItemsContainer } from './styles'
import { useEffect, useState } from 'react'
import { NewOrderFormData } from '../../../Checkout'
import { useNavigate } from 'react-router-dom'

interface SummaryItemsProps {
  icon: 'MapPin' | 'Timer' | 'CurrencyDollar'
  variant?: itemColorVariant
}

export function SummaryItems({ icon, variant = 'yellow' }: SummaryItemsProps) {
  const [order, setOrder] = useState({} as NewOrderFormData)
  const navigate = useNavigate()

  useEffect(() => {
    const storageOrderJSON = localStorage.getItem('@coffee-delivery:order')

    if (storageOrderJSON) {
      setOrder(JSON.parse(storageOrderJSON))
    } else {
      navigate('/')
    }
  }, [navigate])

  function iconChange(icon: string) {
    if (order.address) {
      if (icon === 'MapPin') {
        return (
          <div>
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
          </div>
        )
      }
      if (icon === 'Timer') {
        return (
          <div>
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <p>
              Previsão de entrega <br />
              <span>20 min - 30 min</span>
            </p>
          </div>
        )
      }
      if (icon === 'CurrencyDollar') {
        return (
          <div>
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
          </div>
        )
      }
    }
  }
  return (
    <SummaryItemsContainer variant={variant}>
      <span>{iconChange(icon)}</span>
    </SummaryItemsContainer>
  )
}
