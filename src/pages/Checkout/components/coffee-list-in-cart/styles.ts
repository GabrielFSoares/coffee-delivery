import styled from 'styled-components'

export const CoffeeListItemInCartContainer = styled.div`
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
