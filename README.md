# react (dessa vez eu acho que eu sei)

uma pagina basica para utilizar 6 conceitos do react

conceitos:

- jsx - o jeito de misturar javaScript com HTML
- componentes - funções JS que integram um código HTML quando chamadas
- props - o parametro dos componentes que serve para definir certos campos da função do componente
- virtual DOM - uma cópia do DOM presente na pagina, usado para otimizar as alterações feitas pelo código JS
- lista - forma de usar um FOR com código JSX, para repetir HTML, utiliza keys para identificar cada iteração
- renderização condicional - usar if else em documentos para mudar o que eles mostram baseado no parametro/prop
- useState serve para utilizar uma variavel dentro do componente, para alterar seu estado dependendo do valor do State
- formulario como os formularios em html, mas agora podem guardar as informações em um state
- useEffect uma função que ativa toda vez que um state muda, ou o componente é renderizado, ou a todo momento
- consumir API combina bem com useEffect devido ao estado mudar dependendo do estado da requisição e o useEffect triggando quando chegar a resposta
- Router ajuda a trocar de componentes sem necessariamente trocar de pagina ou recarregar todos os componentes