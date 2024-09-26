function verificar() {
    var data = new Date()
    var anoat = data.getFullYear()
    var fAno = window.document.getElementById("txtano").value
    var res = window.document.querySelector("div#res")
    if (fAno.length == 0 || fAno > anoat) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName("radsex")
        var idade = anoat - Number(fAno)
        res.innerHTML = (`Idade calculada: ${idade} anos!`)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'garotinho.png')
            } else if (idade < 21) {
                // Adolescente
                img.setAttribute('src', 'garotojovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homen.png')
            } else if (idade >= 50) {
                // Idoso
                img.setAttribute('src', 'senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'garotinha.png')
            } else if (idade < 21) {
                // Adolescente
                img.setAttribute('src', 'garotajovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulher.png')
            } else if (idade >= 50) {
                // Idoso
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos Gênero: ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
