function contar() { // usando let em vez de var, elas deixam de existir após a função!
    let txtini = document.querySelector('input#inicio')
    let txtfim = document.querySelector('input#fim')
    let txtpas = document.querySelector('input#passo')

    if (txtini.value.length == 0 || txtfim.value.length == 0
        || txtpas.value.length == 0) {
        window.alert(`Há campos vazios! Tente novamente.`)
    } else if (txtpas.value < 0) {
        window.alert(`[ERRO] Selecione passo de valor POSITIVO`)
    } else {
        var inicio = Number(txtini.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpas.value)

        var res = document.querySelector('div#res')

        res.innerHTML = ``

        if (passo == 0 && inicio != fim) {
            passo = 1
            window.alert(`Zero é passo inválido. Aplicando com 1...`)
        }

        if (inicio < fim) {
            res.innerHTML += `<p>Contando:</p>`
            while(inicio <= fim) {
                res.innerHTML += `${inicio} 👉`
                inicio += passo
            }
            res.innerHTML += `🚩`
        } else if (inicio > fim) {
            res.innerHTML += `<p>Contando:</p>`
            while(inicio >= fim) {
                res.innerHTML += `${inicio} 👉`
                inicio -= passo
            }
            res.innerHTML += `🏁`
        } else {
            res.innerHTML = `Digite Início e Fim diferentes!`
        }   
    }
}