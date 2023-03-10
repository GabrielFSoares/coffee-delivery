/Tipos de formulários/
// Controled / Uncontroled

***Controled***
/É quando mantemos em tempo real a informação do input do usuário armazenada em um estado da aplicação (variável)/

Ex:

const [task, setTask] = useState('');

... 

<input
	id="exemplo"
	onChange={(e) => setTask(e.target.value)}
	value={task}
/>


***Uncontroled***
/Buscamos a informação do valor do input somente quando precisamos dela/

Ex:

function handleSubmit(event) {
	...
}

...

<form onSubmit={handleSubmit} />


***React Hook Form***


/Instalação/

npm i react-hook-form ;


/Utilização/

import { useForm } from 'react-hook-form'

const { register, handleSubmit, watch, reset } = useForm({
   defaultValues: {
      task: '',
      minutesAmount: 0,
    },
});

function hundleCreateNewCycle(data: any) {
    console.log(data)
    reset()
}

<form onSubmit={handleSubmit(hundleCreateNewCycle)} /> ;

<TaskInput
	id="task"
    list="task-suggestions"
    placeholder="Dê um nome ao seu projeto"
    {...register('task')} // "..." pega todos os returns da função register e aclopa no input
/>

/Função useForm()* /Função que cria um novo formlário/

/Função register* /Método que adiciona um input ao formulário/

/* 
*   function register(name: string) {
*		return {
*			onChange: () => void,
*			onBlur: () => void,
*			onFocus: () => void,
*			...
*		}
*	}
*/
 
/Função watch* /Guarda o valor de uma variável quando alterada/

/* const task = watch('task') */

/Função reset* /Reseta o formulário para os valores originais. Obs: É necessário informar quais os valores em default values/
