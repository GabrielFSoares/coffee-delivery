import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  button {
    border: none;
    border-radius: 6px;

    cursor: pointer;
  }
`

export const CoffeeListInCartContainer = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    width: 64px;
    margin-right: 1.25rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`
export const RemoveButton = styled.button`
  display: flex;
  align-items: flex-end;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};

  padding: 0.5rem;
  height: 2rem;

  :hover {
    color: ${(props) => props.theme['purple-dark']};
    background-color: ${(props) => props.theme['base-hover']};

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CoffeePrice = styled.div`
  margin-left: auto;

  span {
    font-weight: bold;
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

  :hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
