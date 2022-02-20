function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        img.src = 'imgmanha.png' // imagens pesquisadas no Pexels e editadas no Gimp
        document.body.style.background = '#82bbe4' // (prof usou photoshop)
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imgtarde.png'
        document.body.style.background = '#e69279'
    } else {
        img.src = 'imgnoite.png'
        document.body.style.background = '#1b525f'
    }
}