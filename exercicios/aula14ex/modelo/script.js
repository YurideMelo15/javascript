function tabuada() {
    let numero = window.document.getElementById("txtn")
    let tab = window.document.getElementById("tab")
    if (numero.value.length == 0) {
        window.alert('Erro digite um número para gerar a tabuada!')
    } else {
        let c = 1
        let n = Number(numero.value)
        tab.innerText = ''
        while(c <= 10) {
            let opt = window.document.createElement('option')
            opt.innerText = `${n} x ${c} = ${n*c}`
            opt.value = `tab${c}`
            tab.appendChild(opt)
            c++
        }
    }
}