function tabuada() {
    let txtnum = document.getElementById('num')
    let lista = document.getElementById('tabuada')

    if (txtnum.value.length == 0) {
        window.alert(`Você precisa digitar um valor!`)
    } else {
     
        let num = Number(txtnum.value)
        lista.innerHTML = `` // só para limpar o option do html e cálculo anterior

        for (let n = 1; n <= 10; n++) { // SELECT PRECISA DE OPTIONS
            let conta = num * n

            let item = document.createElement('option')
            item.text = `${num} x ${n} = ${conta}`
            item.value = `tab${n}` // identifica a linha
            // ter o value é importante para seleção com outras linguagens
            
            lista.appendChild(item) // Adicionando option ao select de id tabuada!!
        }   // é importante também o atributo SIZE do select lá no html
    }
}