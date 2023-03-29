import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  margin: 0px 10rem;
  padding-top: 2rem;

  p,
  span,
  h1 {
    line-height: 130%;
  }
`

export const CoffeeListHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.375rem;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button {
      border: 1px solid ${(props) => props.theme.yellow};
      border-radius: 100px;

      font-size: 0.625rem;
      font-weight: 700;
      color: ${(props) => props.theme['yellow-dark']};

      padding: 0.375rem 0.75rem;

      cursor: pointer;

      :hover {
        background-color: ${(props) => props.theme.yellow};
        color: ${(props) => props.theme.white};
      }
    }
  }
`

export const CoffeeListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
`

export const CoffeeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px 6px 36px;

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
    font-weight: 400;

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

  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  div:nth-child(2) div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    padding: 0.53125rem 0.5rem;
  }

  div:nth-child(2) span {
    width: 1.25rem;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
  }

  div:nth-child(2) div button {
    border: none;
    background: none;

    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`

export const PutInCartButton = styled.button`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};

  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  cursor: pointer;
`
