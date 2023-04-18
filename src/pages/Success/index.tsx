import { SuccessContainer } from './styles'
import Illustration from '../../assets/Illustration.png'
import { MapPin } from '@phosphor-icons/react'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div>
          <div>
            <span>
              <MapPin size={16} />
            </span>
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
      <div>
        <img src={Illustration} alt="Illustration" />
      </div>
    </SuccessContainer>
  )
}
