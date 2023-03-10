***Instalação***

npm i eslint -D

npm i @rocketseat/eslint-config -D        /

***Passo 2****

//Criar arquivo .eslintrc.json

//Conteúdo do arquivo:

{
    "extends": "@rocketseat/eslint-config/react"
}

****Utilização***

//Verificar erros:
npx eslint src --ext .ts,.tsx

//Solucionar erros:
npx eslint src --ext .ts,.tsx --fix

***Criar um Script (opicional)***

Ir até package.json
Depois em "scripts:"
E então:
"lint": "npx eslint src --ext .ts,.tsx"

//Para utilizar:
npm run lint

***Corrigir ao salvar***

//Ir até sttings.json
//Acrescentar linha:

"editor.codeActionsOnSave": {"source.fixAll.eslint": true}