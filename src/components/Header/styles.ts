import styled from 'styled-components'

export const HeaderContainer = styled.header`
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
    position: relative;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    padding: 0.5rem;
    border: none;
    border-radius: 6px;

    cursor: pointer;

    > span {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;

      width: 20px;
      height: 20px;
      right: -8.35px;
      top: -8px;

      background-color: ${(props) => props.theme['yellow-dark']};
      border-radius: 1000px;
      color: ${(props) => props.theme.white};
      font-size: 0.7rem;
      font-weight: 700;
    }
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
