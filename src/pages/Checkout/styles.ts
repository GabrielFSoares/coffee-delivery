import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 40rem 28rem;
  justify-content: space-between;
  padding-top: 2.5rem;

  div > p {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`

const BaseContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`
export const InfoContainer = styled.div`
  /* form {
    

    #rua {
      width: 100%;
    }

    #complemento {
      width: 21.75rem;
    }

    #cidade {
      width: 17.25rem;
    }

    #uf {
      width: 3.75rem;
    }
  } */
`

export const AddressContainer = styled(BaseContainer)`
  margin-bottom: 0.75rem;
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    > span {
      color: ${(props) => props.theme['yellow-dark']};
    }

    label {
      font-size: 0.875rem;
      margin-top: 2px;

      color: ${(props) => props.theme['base-text']};
    }
  }

  form {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 0.75rem;
  }
`

const BaseInput = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  font-size: 0.875rem;
  padding: 0.75rem;
  //width: 12.5rem;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const CepInput = styled(BaseInput)``

export const StreetInput = styled(BaseInput)`
  width: 100%;
`

export const NumberInput = styled(BaseInput)``

export const ComplementInput = styled(BaseInput)`
  width: 21.75rem;
`

export const NeighborhoodInput = styled(BaseInput)``

export const CityInput = styled(BaseInput)`
  width: 17.25rem;
`

export const UFInput = styled(BaseInput)`
  width: 3.75rem;
`

export const SelectedCoffeesContainer = styled(BaseContainer)`
  border-radius: 6px 44px;
`
