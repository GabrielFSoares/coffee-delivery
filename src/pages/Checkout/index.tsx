import {
  CheckoutContainer,
  InfoContainer,
  SelectedCoffeesContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <InfoContainer>
        <p>Complete seu pedido</p>
        <div>Endereço</div>
        <div>Pagamento</div>
      </InfoContainer>
      <SelectedCoffeesContainer>
        <p>Cafés Selecionados</p>
        <div>Cafés</div>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}
