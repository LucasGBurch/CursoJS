var agora = new Date() // pode ser um instrumento útil pra data de cadastro
var hora = agora.getHours() // do meu CRUD em Spring Boot vou esperar o curso
console.log(`Agora são exatamente ${hora} horas.`) // com React para avaliar

if (hora > 7 && hora < 12) {
    console.log(`Bom dia!`)
} else if (hora <= 18) {
    console.log(`Boa tarde!`)
} else if (hora < 24) {
    console.log(`Boa noite!`)
} else {
    console.log(`Boa madrugada!`)
}