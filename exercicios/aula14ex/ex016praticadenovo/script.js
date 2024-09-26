function clicar() { 
    let ini = window.document.getElementById("txti")
    let fim = window.document.getElementById("txtf")
    let passo = window.document.getElementById("txtp")
    var res = window.document.getElementById("res")
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { 
        res.innerHTML = "Impossivel contar..."
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if(i < f) {
            // Contagem crescente
            for(let c = i; c <= f ; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // Contagem regressiva
            for(let c = i; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}