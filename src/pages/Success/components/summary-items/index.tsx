import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { itemColorVariant } from '../../../Home/components/intro-items/style'
import { SummaryItemsContainer } from './styles'

interface SummaryItemsProps {
  icon: 'MapPin' | 'Timer' | 'CurrencyDollar'
  variant?: itemColorVariant
}

export function SummaryItems({ icon, variant = 'yellow' }: SummaryItemsProps) {
  function iconChange(icon: string) {
    if (icon === 'MapPin') {
      return (
        <div>
          <span>
            <MapPin size={16} weight="fill" />
          </span>
          <p>
            Entrega em <span>Rua João Daniel Martinelli, 102</span> <br />
            Farrapos - Porto Alegre, RS
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
            <span>Cartão de Crédito</span>
          </p>
        </div>
      )
    }
  }
  return (
    <SummaryItemsContainer variant={variant}>
      <span>{iconChange(icon)}</span>
    </SummaryItemsContainer>
  )
}
