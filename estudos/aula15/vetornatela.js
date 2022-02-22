let valores = [8, 1, 7, 4, 2, 9] // só revisões do visto em outras linguagens...
/*
for (let i = 0; i < valores.length; i++) {
    console.log(`A posição ${i} tem valor ${valores[i]}.`)
}
*/
// com "for each" (JS for in) sai a leitura igual e simplificada

let pos = valores.indexOf(4) // Retorna a chave (e -1 quando não encontra o valor)
console.log(`O valor 4 está na posição ${pos}.`) 

for (let v in valores) {
    console.log(`A posição ${v} tem valor ${valores[v]}.`)
}