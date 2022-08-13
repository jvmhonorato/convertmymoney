// função que gera a converção
const convert =  (cotacao, quantidade) => {
    return cotacao * quantidade
}
//função mostra quantos 0 depois da vírgula
const toMoney = valor => {
    return parseFloat(valor).toFixed(2)
}


module.exports ={
    convert,
    toMoney
}