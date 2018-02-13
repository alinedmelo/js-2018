// destructuring

const pessoa = {
    nome: 'Aline',
    idade: 25,
    endereco: {
        logradouro: 'rua teste',
        numero: 123
    }
}

const { nome, idade } = pessoa // Extrai os atributos do objeto pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // Extrai os atributos e atribuem a variaveis criadas (n e i)
console.log(n, i)

/* Pega atributos aninahdos 
Declara atributo não existente e atribui valor default */
const { endereco: { logradouro, numero }, sobrenome = 'Padrão'} = pessoa
console.log(logradouro, numero, sobrenome)

