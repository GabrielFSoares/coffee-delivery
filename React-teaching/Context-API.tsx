/**
* Prop Drilling -> Quando temos muitas propiedades apenas para a comuniação do s componentes
* Context API -> Permite compartilharmos informações entre vários componentes ao mesmo tempo
*/

***Utilização***
import { createContext } from 'react'

const nameContext = createContext({} as any)/    

export function Home() {
	cosnt { nameState, setNameState } = useState(0)

 	return (
 		<nameContext.Provider value={ nameState, setNameState }> //Variáves e funções a serem compartilhadas
	 		<div>
	 			<Component2 />
	 			<Component3 />
	 		</div>
 		</nameContext.Provider>
	)
}

/Componentes/
import { useContext } from 'react'

function Component2 () {
	const { nameConst } = useContext(nameContext)

	return (
		<h1>
			{nameConst}
			<button
				onClick={() => {
					setNameState(2)
				}}
			>
				Alterar variável contexto
			</button>
		</h1>
	)
}

function Component3 () {
	const { nameConst } = useContext(nameContext)

	return <h1>{nameConst}</h1>
}