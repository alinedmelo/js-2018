// Par nome/valor

/* Contexto léxico é o escopo em que a variável/obj/function
foi declarada dentro do código */

const saudacao = 'Olá' // Contexto léxico 1 de saudacao

function mostraSaudacao() {
    const saudacao = 'Bom dia' // contexto léxico 2
    return saudacao
}

// Obj são grupos aninhados de pares  nome/valor
const cliente = {
    nome    : 'Aline',
    idade   : 30,
    endereco : {
        rua     : 'Rua teste',
        numero  : 123
    }
}

console.log(saudacao) // Olá

console.log(mostraSaudacao()) // Bom dia

console.log(cliente)

