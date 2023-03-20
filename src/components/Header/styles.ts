import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0px 10rem;

  nav {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
  }

  button {
    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    padding: 0.5rem;

    border: none;
    border-radius: 6px;

    cursor: pointer;
  }
`

export const LocationContainer = styled.div`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};

  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 8px;
  border-radius: 6px;

  span {
    font-size: 0.875rem;
    font-weight: 200;
    color: ${(props) => props.theme['purple-dark']};
  }
`
