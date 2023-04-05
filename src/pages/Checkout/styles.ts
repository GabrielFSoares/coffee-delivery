import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 40rem 28rem;
  justify-content: space-between;
  margin: 0px 10rem;
  padding-top: 2.5rem;

  div {
    p {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.125rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    > div {
      background-color: ${(props) => props.theme['base-card']};
      padding: 2.5rem;
    }
  }
`
export const InfoContainer = styled.div`
  > div {
    margin-bottom: 0.75rem;
  }
  div {
    border-radius: 6px;
  }
`

export const SelectedCoffeesContainer = styled.div`
  div {
    border-radius: 6px 44px;
  }
`
