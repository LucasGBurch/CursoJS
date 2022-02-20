function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.querySelector('input#txtano')
    var anonum = Number(fano.value)

    var res = document.querySelector('div#res')

    if (anonum == 0 || anonum > ano || anonum < 1902) { // Primeira validação de dados.
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex') // 0 e 1 são os dois botões
        var idade = ano - anonum
        var sexo = ''

        var img = document.createElement('img') // criação dinâmica e não pelo html!
        img.setAttribute('id', 'foto') // Atributos do elemento criado

        if (fsex[0].checked) { // o elemento novo será anexado após o 1º innerHTML
            sexo = 'masculino'
            if (idade >= 0 && idade <= 13) {
                img.setAttribute('src', 'menino.png') // atributo fonte da imagem
            } else if (idade <= 35) {
                img.setAttribute('src', 'rapaz.png')
            } else if (idade <= 55) {
                img.setAttribute('src', 'adulto.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            sexo = 'feminino'
            if (idade >= 0 && idade <= 13) {
                img.setAttribute('src', 'menina.png')
            } else if (idade <= 35) {
                img.setAttribute('src', 'moca.png')
            } else if (idade <= 55) {
                img.setAttribute('src', 'adulta.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectado pessoa do sexo ${sexo} com ${idade} anos de idade:<p>`
        // COLOCANDO A IMAGEM EMBAIXO APÓS PREENCHIMENTO DOS DADOS:
        res.appendChild(img)
    }
}