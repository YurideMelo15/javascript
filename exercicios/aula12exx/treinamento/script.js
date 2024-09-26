function verificar() {
    var fano = window.document.getElementById("txtano")
    var data = new Date()
    var anoat = data.getFullYear()
    var res = window.document.getElementById("res")
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || fano.value > anoat) {
        window.alert('[Erro] Verifique as informações!')
    } else {
        var idade = anoat - Number(fano.value)
        var sexo = window.document.getElementsByName("radsex")
        var genero = ''
        if (sexo[0].checked) {
            genero = 'Masculino'
            if (idade < 12) {
                // Criança
                img.setAttribute('src', 'garotinho.png')
            } else if (idade < 21) {
                // adolescente
                img.setAttribute('src', 'garotojovem.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem.png')
            } else {
                // idoso
                img.setAttribute('src', 'senhor.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Feminino'
            if (idade < 12) {
                // Criança
                img.setAttribute('src', 'garotinha.png')
            } else if (idade < 21) {
                // Adolescente
                img.setAttribute('src', 'garotajovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos Gênero: ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}