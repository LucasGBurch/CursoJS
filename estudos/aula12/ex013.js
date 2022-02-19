var agora = new Date()
var diaSem = agora.getDay() // de domingo (0) a sábado (6) no switch
// lembrar que o break é OBRIGATÓRIO!

switch (diaSem) {
    case 0:
        console.log("Domingo.")
        break
    case 1:
        console.log("Segunda.")
        break
    case 2:
        console.log("Terça.")
        break
    case 3:
        console.log("Quarta.")
        break
    case 4:
        console.log("Quinta.")
        break
    case 5:
        console.log("Sexta.")
        break
    case 6:
        console.log("Sábado.")
        break
    default:
        console.log("Dia inválido!")
        break // o último é opcional, mas coloca por boa prática.
}

