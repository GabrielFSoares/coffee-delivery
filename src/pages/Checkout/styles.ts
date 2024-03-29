import styled from 'styled-components'

export const FormCheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 40rem 28rem;
  justify-content: space-between;
  padding-top: 2.5rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

const BaseContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`

export const HeaderContainer = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  label {
    font-size: 0.875rem;
    margin-top: 2px;

    color: ${(props) => props.theme['base-text']};
  }
`

export const AddressContainer = styled(BaseContainer)`
  margin-bottom: 0.75rem;
  border-radius: 6px;

  header > span {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddressInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.75rem;

  input[placeholder='UF'] {
    text-transform: uppercase;
  }
`

interface AddressInputProps {
  variant: number
}

export const AddressInput = styled.input<AddressInputProps>`
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  font-size: 0.875rem;
  width: ${(props) => props.variant}rem;
  padding: 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`

export const PaymentContainer = styled(BaseContainer)`
  border-radius: 6px;

  header > span {
    color: ${(props) => props.theme.purple};
  }
`
export const FormOfPaymentConatiner = styled.div`
  display: flex;
  gap: 0.75rem;

  input[type='radio'] {
    display: none;

    &:checked + label {
      border: 1px solid ${(props) => props.theme.purple};
    }

    + label {
      color: ${(props) => props.theme['base-text']};
      border: 1px solid ${(props) => props.theme['base-button']};
      background-color: ${(props) => props.theme['base-button']};

      font-size: 0.75rem;
      text-transform: uppercase;
      padding: 1rem;
      border-radius: 6px;
      width: 11.17rem;

      cursor: pointer;

      display: flex;
      align-items: center;

      &:hover {
        color: ${(props) => props.theme['base-subtitle']};
        background-color: ${(props) => props.theme['base-hover']};
      }

      span {
        display: flex;
        margin-right: 0.75rem;

        color: ${(props) => props.theme.purple};
      }
    }
  }
`

export const SelectedCoffeesContainer = styled(BaseContainer)`
  border-radius: 6px 44px;
`

export const CoffeeListInCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  button {
    border: none;
    border-radius: 6px;

    cursor: pointer;
  }

  > span:last-of-type {
    text-align: center;
    font-size: 0.875rem;
    color: red;
  }
`

export const TotalPayableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
    }
  }

  div:last-of-type {
    span {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ConfirmButton = styled.button`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  text-transform: uppercase;
  padding: 0.75rem;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme['yellow-light']};
  }
`

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.75rem;
  text-transform: uppercase;
  padding: 2rem;
  color: ${(props) => props.theme['base-label']};
`
