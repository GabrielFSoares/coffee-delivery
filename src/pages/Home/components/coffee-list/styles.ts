import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  margin: 0px 10rem;
  padding-top: 2rem;
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

  span {
    font-size: 0.625rem;
  }

  h1 {
    font-size: 1.25rem;
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
