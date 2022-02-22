let num = [5, 8, 4]
num[3] = 6 // Cria mais um elemento.
num.push(7) // Via método interno do JS

console.log(`Nosso vetor é o ${num}. tem ${num.length} posições.`) // atributo tamanho
console.log(`O primeiro valor é ${num[0]}`) 

num.sort() // ordem crescente
console.log(num + `. Novo primeiro valor: ${num[0]}`)
// sem concatenar, um log só com num retorna com colchetes também