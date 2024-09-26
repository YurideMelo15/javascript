/* 
const soma = (v1,v2) => {return v1+v2}
const nome = n => {return n}
const adicionar = n => n+10
console.log(nome('Japones'))
console.log(adicionar(10)) 
*/
let n = [41, 21, 51, 61, 71, 91, 81]
const multiplicar = (n1, n2) => {
    let res = n1*n2
    return res
}

for(let pos in n) {
    console.log(multiplicar(n[pos], 2))
}

