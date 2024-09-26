function clicar() {
    var inicio = window.document.getElementById("txtn1")
    var fim = window.document.getElementById("txtn2")
    var passo = window.document.getElementById("txtn3")
    var res = window.document.getElementById("res")
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || passo.value == 0) {
        res.innerHTML = 'Impossivel contar...'
    } else if (inicio.value > fim.value) {
        res.innerHTML  = ''
        for (var c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value)) {
            res.innerHTML += `Passo: ${c} \u{x1F449}`
        }
    } else {
        res.innerHTML = ''
        for (var c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value)) {
            res.innerHTML += `Passo: ${c} &#x1F449`
        }
    }
}