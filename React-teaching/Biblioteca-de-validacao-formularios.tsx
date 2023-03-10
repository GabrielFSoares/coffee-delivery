***Biblioteca Zod***
//Biblioteca de validação de formulários com integração ao React Hook Forms

***Instalação***
npm i zod
npm i @hookforma/resolvers  ///Biblioteca que permite a integração com o hook forms

***Utilização***
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod' //Para importar todas as funções da biblioteca zod

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})

const { register, handleSubmit, watch } = useForm({
   resolver: zodResolver(newCycleFormValidationSchema),
})


type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema> //Extrai a tipagem do formulário