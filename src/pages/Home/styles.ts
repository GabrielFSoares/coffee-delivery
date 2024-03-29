import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 5.75rem 0px;

  h1 {
    font-size: 3rem;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 4.125rem;
    font-size: 1.25rem;
  }
`
export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;
`

export const CoffeeListContainer = styled.div`
  padding-top: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 2rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const FiltersMenu = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const FiltersMenuButton = styled(RadioGroup.Item)`
  border: 1px solid ${(props) => props.theme.yellow};
  border-radius: 100px;

  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-dark']};

  padding: 0.375rem 0.75rem;

  cursor: pointer;

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    transition: background-color 0.2s, color 0.2s;
  }

  &[data-state='checked'] {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
  }
`

export const CoffeeListItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  margin-top: 3.875rem;
`
