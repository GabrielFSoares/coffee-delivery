import { SuccessContainer } from './styles'
import Illustration from '../../assets/Illustration.png'
import { SummaryItems } from './components/summary-items'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div>
          <SummaryItems icon="MapPin" variant="purple" />
          <SummaryItems icon="Timer" />
          <SummaryItems icon="CurrencyDollar" variant="yellow-dark" />
        </div>
      </div>
      <div>
        <img src={Illustration} alt="Illustration" />
      </div>
    </SuccessContainer>
  )
}
