const moment = require('moment')
const  axios = require('axios');

const date = moment().format('DD-MM-YYYY')


const Gurl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${data}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

const getCotacaoAPI = data => axios.get(Gurl(data))
const extractCotacao = res => res.data.value[0].cotacaoVenda


const funcTest = async() =>{
    try{
    const res = await getCotacaoAPI(date)
    const cotacao = extractCotacao(res)
    console.log(cotacao)
    return cotacao
 }catch(err){
    console.log(err)
 }
}





console.log(funcTest)