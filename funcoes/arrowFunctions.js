// sintaxe
let dobro = function (a) {
    return 2 * a
}

dobro = a => 2 * a

console.log('dobro:', dobro(4))

// arrow functions mantém o contexto léxico do this

function Contador() {

    this.contador = 0

    setInterval(() => {
        this.contador++
        console.log(this.contador)
    }, 1000)
    
}

/* new Contador */

// funcoes anonimas

const soma = (x, y) => x + y

const imprimeResultado = (a, b, operacao = soma) => console.log(operacao(a, b))

imprimeResultado(2, 4) // 6

imprimeResultado(3, 5, (x, y) => x * y) // 15
