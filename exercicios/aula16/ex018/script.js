let num = []
function maior(n1 , n2) {
    if (n1 < n2) {
        return n2
    } else {
        return n1
    }
}

function menor(n1, n2) {
   if (n1 == 0) {
        return n2
   } else if (n1 >  n2) {
        return  n2
   } else {
        return n1
   }
}

function mediar(n1, n2) {
    n1 /= n2
    return n1
}

function adicionar() {
    let numero = window.document.getElementById("txtn")
    let tabelanum = window.document.getElementById("tabela")
    if (numero.value.length == 0 || numero.value > 100 || numero.value < 1) {
        window.alert("Erro")
    } else {
        if(num.indexOf(numero.value) == -1) {
            let opt = window.document.createElement("option")
            opt.innerHTML = `Número ${numero.value} adicionado`
            num.push(numero.value)
            tabelanum.appendChild(opt)
        } else {
            window.alert("O número já existe")
        }
    }
    numero.focus()
    numero.value = ''
    let res = window.document.getElementById("res")
    res.innerText = ''
}

function finalizar() {
    let tabelanum = window.document.getElementById("tabela")
    tabelanum.innerText = ''
    let res = window.document.getElementById("res")
    let maiornumero = 0
    for (let c = 0; c < num.length; c++) {
        maiornumero = maior(maiornumero, Number(num[c]))
    }
    let menornumero = 0
    for (let c = 0; c < num.length; c++) {
        menornumero = menor(menornumero, Number(num[c]))
    }
    let valores = num.length
    let soma = 0
    for (let c = 0; c < num.length; c++) {
        soma += Number(num[c])
    }
    let media = mediar(soma, num.length)
    res.text = ""
    res.innerHTML += `<p>Ao todo, temos ${valores} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maiornumero}.</p>`
    res.innerHTML += `<p>o menor valor informado foi ${menornumero}.</p>`
    res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
}