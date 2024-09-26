function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    if (hora < 6) {
        img.src = 'imagenoite.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Boa madrugada! Agora são ${hora} horas da madrugada.`
    } else if (hora < 12) {
        img.src = 'imagemanha.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Bom dia! Agora são ${hora} horas da manhã.`
    } else if (hora < 18) {
        img.src = 'imagetarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas da tarde.`
    } else {
        img.src = 'imagenoite.png'
        document.body.style.background = '#515154'
        msg.innerHTML = `Boa noite! Agora são ${hora} horas da noite`
    }
}