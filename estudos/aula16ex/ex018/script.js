let txtnum = document.getElementById('txtnum')
let lista = document.getElementById('lista')
lista.style.width = '200px'

let res = document.getElementById('res')
let vetor = []

function adicionar(txtnum) {
    
    res.innerHTML = ``
    let num = Number(txtnum.value)

    if (txtnum.value.length == 0) {
        window.alert("Digite um número antes de Adicionar!")
    } else if (txtnum.value < 1 || txtnum.value > 100) {
        window.alert("Digite um número entre 1 e 100!")
    } else {
        if (vetor.indexOf(num) != -1) {
            window.alert("Não repita um número! Tente outro.")

        /* Condições de Validação (feitas acima):
        Se: 1) não estiver em branco; 2) estiver entre 1 e 100; e
        3) ainda não existir no vetor/array sendo criado.

        Prof criou as funções isNumero(num.value) e !inLista(num.value, vetor)
        para as condições (aí o adicionar ficou sem receber parâmetro)
        PARA BOAS PRÁTICAS ATÉ QUE SERIA IDEAL (usar em códigos maiores)
        */
        } else { // Caso passe pelos blocos de validações:
            vetor[vetor.length] = num
            /* length começa em 0.
            += tava concatenando tudo! Faltou [vetor.length] ao lado e só um =
            e ainda por cima tratava cada caractere como uma posição ¬¬
            vetor.push(num) -> método interno para adicionar. */

            var tam = vetor.length // pra usar na outra função tb, precisa ser var

            let linha = document.createElement('option') // <option>
            linha.text = `Valor ${num} adicionado.`
            linha.value = `${tam}` // registrar cada linha.
            lista.appendChild(linha) // colocando a tag dentro do <select>
        }
    }
    // Interatividade acrescentada na aula de resolução:
    txtnum.value = '' // Limpando
    txtnum.focus() // Colocando no foco do input
}

function finalizar(vetor) {

    if (vetor.length == 0) {
        window.alert("Não há valores para finalizar.")
    } else {
        res.innerHTML = `` // para não acumular!
        res.innerHTML += `<p>Ao todo, temos ${vetor.length} números cadastrados.<p>`

        // Fazendo meus próprios Math.max Math.min para treinar:
        let maior = vetor[0]
        let menor = vetor[0]
        for (let v in vetor) {
            if (vetor[v] > maior) {
                maior = vetor[v]
            }
            if (vetor[v] < menor) {
                menor = vetor[v]
            }
        } // Correção: botar os 2 ifs no mesmo for

        res.innerHTML += `<p>O maior valor informado foi ${maior}.<p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.<p>`

        let soma = 0
        for (let v in vetor) {
            soma += vetor[v]
        }
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.<p>`

        let media = soma / vetor.length // Prof não formatou:
        media = media.toFixed(2).replace('.', ',') // formatando casas e vírgula
        res.innerHTML += `<p>A média dos valores digitados é ${media}.<p>`
    }
}