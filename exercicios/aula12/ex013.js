var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda-Feira
    2 = Terça-Feira
    3 = Quarta-Feira
    4 = Quinta-Feira
    5 = Sexta-Feira
    6 = Sábado
*/

console.log(diaSem)
switch(diaSem) {
    case 0:
        console.log('Hoje é domingo!')
        break
    case 1:
        console.log('Hoje é segunda-feira!')
        break
    case 2:
        console.log('Hoje é terça-feira!')
        break
    case 3:
        console.log('hoje é quarta-feira!')
        break
    case 4: 
        console.log('hoje é quinta-feira!')
        break
    case 5: 
        console.log('Hoje é sexta-feira!')
        break
    case 6:
        console.log('Hoje é sábado!')
        break
    default:
        console.log('[ERRO} Dia invalido!')
        break
}