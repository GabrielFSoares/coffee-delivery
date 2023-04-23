import {
  CoffeeListContainer,
  CoffeeListItemContainer,
  HomeContainer,
  InfoContainer,
} from './styles'
import imageHome from '../../assets/Imagem.png'

import { ItemsIntro } from './components/intro-items'

import React, { useContext, useEffect, useState } from 'react'
import {
  CoffeeListItem,
  CoffeListItemProps,
} from './components/coffee-list-item'
import { CoffeeListContext } from '../../contexts/CoffeeListContext'

export function Home() {
  const { coffeeList } = useContext(CoffeeListContext)

  const [coffeeListFiltered, setCoffeeListFiltered] = useState(
    Array<CoffeListItemProps>,
  )
  const [filter, setFilter] = useState(Array<string>)

  useEffect(() => {
    if (filter.length === 0) {
      setCoffeeListFiltered(coffeeList)
    } else {
      const filteredCoffeeList = coffeeList.filter((item) => {
        const correctFilter = false

        // filter.filter((f) => {
        //   Object.values(item.category).filter((category) => {
        //     if (f === category) {
        //       correctFilter = true
        //     }
        //     return null
        //   })
        //   return null
        // })

        Object.values(item.category).findIndex((category) => {
          // if (filter[0] === category) correctFilter = true

          // const test = filter.findIndex((item) => {
          //   return item === category
          // })

          // if (test !== -1) {
          //   correctFilter = true
          // }

          // test === -1 ? (correctFilter = false) : (correctFilter = true)
          // if (filter[index]) {
          //   filter[index] === category
          //     ? (correctFilter = true)
          //     : (correctFilter = false)
          // }

          //   // if (filter.length === 1) {
          //   //   if (filter[index] === category) correctFilter = true
          //   // } else {
          //   //   filter.filter((t) =>
          //   //     t === category ? (correctFilter = true) : (correctFilter = false),
          //   //   )

          //   // console.log(index)

          //   // while (i < filter.length) {
          //   //   filter[i] === category
          //   //     ? (correctFilter = true)
          //   //     : (correctFilter = false)
          //   //   i = filter.length
          //   // }
          //   // for (let i = 0; i < filter.length; i++) {
          //   //   if (filter[i] === category) {
          //   //     correctFilter = true
          //   //   } else {
          //   //     correctFilter = false
          //   //   }
          //   // }
          //   // }

          return null
        })

        return correctFilter ? item : null
      })

      setCoffeeListFiltered(filteredCoffeeList)
    }
  }, [filter, coffeeList])

  function handleFilterCoffeeList(
    type: string,
    event: React.MouseEvent<HTMLInputElement>,
  ) {
    // console.log(event.currentTarget.checked)
    if (event.currentTarget.checked) {
      setFilter([...filter, type.toUpperCase()])
    } else {
      setFilter((item) => {
        const removeFilter = item.filter((filter) => filter !== type)
        return removeFilter
      })
    }
    // console.log(filter)
  }

  return (
    <div>
      <HomeContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <InfoContainer>
            <ItemsIntro
              icon="ShoppingCart"
              text="Compra simples e segura"
              variant="yellow-dark"
            />
            <ItemsIntro
              icon="Package"
              text="Embalagem mantém o café intacto"
              variant="base-text"
            />
            <ItemsIntro
              icon="Timer"
              text="Entrega rápida e rastreada"
              variant="yellow"
            />
            <ItemsIntro
              icon="Coffee"
              text="O café chega fresquinho até você"
              variant="purple"
            />
          </InfoContainer>
        </div>

        <div>
          <img src={imageHome} alt="imagem" />
        </div>
      </HomeContainer>

      <CoffeeListContainer>
        <header>
          <h1>Nossos cafés</h1>
          <nav>
            <input
              type="checkbox"
              id="traditional"
              name="filterCoffeeList"
              onClick={(e) => handleFilterCoffeeList('TRADICIONAL', e)}
            />
            <label htmlFor="traditional">TRADICIONAL</label>
            <input
              type="checkbox"
              id="special"
              name="filterCoffeeList"
              onClick={(e) => handleFilterCoffeeList('ESPECIAL', e)}
            />
            <label htmlFor="special">ESPECIAL</label>
            <input
              type="checkbox"
              id="withMilk"
              name="filterCoffeeList"
              onClick={(e) => handleFilterCoffeeList('COM LEITE', e)}
            />
            <label htmlFor="withMilk">COM LEITE</label>
            <input
              type="checkbox"
              id="alcoholic"
              name="filterCoffeeList"
              onClick={(e) => handleFilterCoffeeList('ALCOÓLICO', e)}
            />
            <label htmlFor="alcoholic">ALCOÓLICO</label>
            <input
              type="checkbox"
              id="iced"
              name="filterCoffeeList"
              onClick={(e) => handleFilterCoffeeList('GELADO', e)}
            />
            <label htmlFor="iced">GELADO</label>
          </nav>
        </header>
        <CoffeeListItemContainer>
          {coffeeListFiltered.map((item: CoffeListItemProps) => {
            return (
              <CoffeeListItem
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                category={item.category}
                image={item.image}
                price={item.price}
              />
            )
          })}
        </CoffeeListItemContainer>
      </CoffeeListContainer>
    </div>
  )
}
