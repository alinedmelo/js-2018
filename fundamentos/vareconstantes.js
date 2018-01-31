// basico

var a   = 10
let b   = 20
const c = 30

var a = 100     // não tem restrição de atribuição e reuso
b     = 200     // não pode ser declarada novamente

/* c = 300  constante não pode receber nova atribuição */

console.log(a, b, c)

let soma = (a, b, c) => {
    return a + b + c
}

console.log('Soma: ' + soma(a, b, c))