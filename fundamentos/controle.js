let cont = 1

while(cont <= 10) {
    console.log(`contador ${cont}`)
    cont++
}

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

let notas = [7, 5, 8, 9, 3]

for(i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}
console.log(`totais de notas ${i}`)

const pessoa = {
    nome: 'Aline',
    idade: '30',
    genero : 'feminino'
}

for(let atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`)
}