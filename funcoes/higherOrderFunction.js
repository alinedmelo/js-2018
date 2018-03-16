// estrategias para definir valor padrão
function soma(a, b, c, d) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // verifica se o indice do argumento existe
    c = isNaN(c) ? 1 : c
    d = d || 1
    return a + b + c + d
}
console.log(soma(), soma(3), soma(1, 2, 3), soma(0, 0, 0))

// usanto sintaxe do es6
function soma(a = 1, b = 1, c = 1) {
    return a + b + c    
}
console.log(soma(), soma(3), soma(1, 2, 3), soma(0, 0, 0))