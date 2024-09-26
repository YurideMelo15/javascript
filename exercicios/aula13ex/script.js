function verificar() {
    var data = new Date()
    var anoatu = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var result = window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > anoatu) {
        window.alert('[ERRO] Verifique se as informações estão corretas')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = anoatu - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'garotinho.png')
            } else if (idade >= 10 && idade < 21) {
                // Adolescente
                img.setAttribute('src', 'garotojovem.png')
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'homen.png')
            } else {
                // Idoso
                img.setAttribute('src', 'senhor.png')
            }
        } else if (fsex[1].checked) {
            genero =  'Feminino'
            if (idade >= 0 && idade <10) {
                img.setAttribute('src', 'garotinha.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'garotajovem.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'mulher.png')
            } else {
                img.setAttribute('src', 'senhora.png')
            }
        }
    }
    result.style.textAlign = 'center'
    result.innerHTML = `Detectamos gênero: ${genero} com ${idade} anos. `
    result.appendChild(img)
}