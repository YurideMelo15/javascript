let num = [50, 30, 31, 100]
function maior(n1, n2) {
    if (n1 > n2) {
        return n2
    } else {
        return n1
    }
}
let mai = 0
for (let c = 0; c < num.length; c++){
    maiornum = maior(maiornum, num[c])
}
console.log(maiornum)