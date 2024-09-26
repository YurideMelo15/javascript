function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'images/imagemanha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if  (hora >= 12 && hora < 18) {
        // BOA TARDe
        img.src = 'images/imagetarde.png'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        // BOA NOITE
        img.src = 'images/imagenoite.png'
        document.body.style.backgroundColor = 'rgb(100, 100, 100)'
    }
}
