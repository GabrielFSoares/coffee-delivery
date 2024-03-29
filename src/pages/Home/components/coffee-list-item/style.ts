import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px;

  background-color: ${(props) => props.theme['base-card']};

  img {
    position: relative;
    top: -20px;
    width: 7.5rem;
    height: 7.5rem;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 700;

    text-align: center;
    margin-top: 1rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    text-align: center;
    margin: 0.5rem 1.25rem 2.0625rem 1.25rem;

    color: ${(props) => props.theme['base-label']};
  }
`

export const ItemCategory = styled.div`
  display: flex;
  gap: 0.25rem;

  span {
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`

export const CoffeeItemFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0rem 1.5rem;
  gap: 1.4375rem;

  div:nth-child(1) span {
    font-size: 0.875rem;

    span {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const PutInCartButton = styled.button`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.purple};
  }
`
