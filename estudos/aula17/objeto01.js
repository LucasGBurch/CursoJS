let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}} // {} é Objeto

console.log(typeof amigo)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
amigo.engordar(2)
console.log(`${amigo.nome} pesa agora ${amigo.peso}Kg`)