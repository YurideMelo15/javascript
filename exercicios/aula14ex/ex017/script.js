function tabuada() {
    var fn = window.document.getElementById("txtn")
    var res = window.document.getElementById("res")
    var c = 0
    var n = Number(fn.value)
    res.innerHTML = ''
    while(c <= 10) {
        var r = n*c
        res.innerHTML += `${n} x ${c} = ${r} <br>`
        c++
    }
}