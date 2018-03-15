// operadores aritméticos

const [a, b, c, d] = [3, 5, 7, 15]

let soma = a + b + c + d
let subtracao = d - a
let multiplicacao = a * b
let divisao = d / a
let modulo = a % 2

console.log('Operador aitimético >>>', soma, subtracao, multiplicacao, divisao, modulo)

// Operadores relacionais

console.log('1-', '1' == 1) // compara valor = true
console.log('2-', '1' === 1) // compara valor e tipo = false (estritamente igual)

// operadores lógicos 

/* 
Imaginando que vc tenha dois trabalhos para entregar, um na terça-feira e outro na quinta-feira.

Se os dois trabalhos forem executdos: 
- Comprar uma TV de 50 polegadas
- Tomar sorvete

Se apenas um dos trabalhos forem executados:
- Comprar uma TV de 32 polegadas
- Tomar sorvete

Se nenhum dos trabalhos forem executados:
- Não comprar nenhuma TV
- Não tomar sorvete
*/

function compras(trabalho1, trabalho2) {

    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const economizar = !comprarSorvete

    return {
        "tomar sorvete"  : comprarSorvete,
        "comprar tv 50" : comprarTv50,
        "comprar tv 32" : comprarTv32,
        "economizar"     : economizar
    }
}

console.log('Caso 1: ', compras(true, true))
console.log('Caso 2: ', compras(true, false))
console.log('Caso 3: ', compras(false, true))
console.log('Caso 4: ', compras(false, false))