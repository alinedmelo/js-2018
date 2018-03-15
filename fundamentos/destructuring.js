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

// Usando o descructuring em funções

// usando obejtos

function rand({min = 0, max = 100}) {
    // retorna valor aleatório entre o min e o max
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {min: 20, max: 50} // definindo o objeto a ser passado na função

console.log(rand(obj))
console.log (rand({min: 10}))  // definindo somente o valor min, o max vem como padrão da função
