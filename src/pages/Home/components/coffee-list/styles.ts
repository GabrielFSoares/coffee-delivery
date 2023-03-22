import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  margin: 0px 10rem;
  padding-top: 2rem;
`

export const CoffeeListHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
