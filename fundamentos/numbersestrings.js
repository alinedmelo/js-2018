const peso1 = 1.0
const peso2 = Number('2.0')

console.log('variaveis', peso1, peso2)

const avaliacao1 = 9.123
const avaliacao2 = 7.110

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
console.log('total >> ', total)

const media = total / (peso1 + peso2)
console.log('media >> ', media)
console.log(media.toFixed(1)) // to fixed determina a quant de casas decimais e tb faz o arredondamento

//Strings
const nome = 'Aline Dias'

console.log(nome.charAt(2)) // Mostra caractere no índice x
console.log(nome.indexOf('n')) // Mostra o local do indice do caractere x

console.log(nome.substr(0, 5)) // Mostra os caracteres do numero x ao numero y no índice

console.log(nome.concat(' Melo')) //concatena
console.log(nome.replace('A', 4)) // faz replace

console.log('Aline,Dias,Melo'.split(',')) //"quebra" a stirng e joga os itens divididos em um array