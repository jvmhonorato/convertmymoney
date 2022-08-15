const  axios = require('axios');

const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='08-08-2022'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`


// função pega os dados da url e chama 
const getCotacaoAPI = (data) => axios.get(url)

// função onde res  pega os dados  gerados em getCotacaoAPI filtrado apenas o item coatacaoVenda do array [0]
const extractCotacao = res => res.data.value[0].cotacaoVenda

//função async pra retonar o valor da consulta
const getCotacao = async() => {
    //estancia async o resultado da consulta da url em res
  const res = await getCotacaoAPI('')
  // estancia async a integração da consulta da url com a filtragem da consulta em cotacao
  const cotacao = extractCotacao(res)

  // retorna o valor da consulta filtrada de forma  async
  return cotacao
}



module.exports = {
    getCotacaoAPI,
    getCotacao,
    extractCotacao
}
