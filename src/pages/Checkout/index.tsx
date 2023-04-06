import { MapPinLine } from '@phosphor-icons/react'
import {
  AddressContainer,
  CepInput,
  CheckoutContainer,
  CityInput,
  ComplementInput,
  NeighborhoodInput,
  NumberInput,
  SelectedCoffeesContainer,
  StreetInput,
  UFInput,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <p>Complete seu pedido</p>
        <AddressContainer>
          <header>
            <span>
              <MapPinLine size={22} />
            </span>
            <p>
              <p>Endereço de Entrega</p>
              <label>Informe o endereço onde deseja receber seu pedido</label>
            </p>
          </header>
          <form>
            <CepInput type="number" placeholder="CEP" />
            <StreetInput type="text" placeholder="Rua" />
            <NumberInput type="number" placeholder="Número" />
            <ComplementInput type="text" placeholder="Complemento" />
            <NeighborhoodInput type="text" placeholder="Bairro" />
            <CityInput type="text" placeholder="Cidade" />
            <UFInput type="text" placeholder="UF" />
          </form>
        </AddressContainer>
        <div>Pagamento</div>
      </div>
      <div>
        <p>Cafés Selecionados</p>
        <SelectedCoffeesContainer>Cafés</SelectedCoffeesContainer>
      </div>
    </CheckoutContainer>
  )
}
