var clientId = ""; // String | Identificador do cliente utilizado na autenticação.
var accessToken = ""; // String | Token de acesso utilizado na autenticação.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(response));
  }
};

var ApiAgillitasCartesPrPagos = require('api_agillitas_cartes_pr_pagos');
var apiInstance = new ApiAgillitasCartesPrPagos.CartoesApi();
var idCartao = "3713100018469"; // String | Número identificador referente ao proxy localizado no verso do cartão.
var dataInicial = new Date("2013-10-20"); // Date | Data inicial para a consulta (YYYY-MM-DD).
var dataFinal = new Date("2013-10-20"); // Date | Data final para a consulta (YYYY-MM-DD)..
//apiInstance.cartoesIdCartaoExtratoGet(clientId, accessToken, idCartao, dataInicial, dataFinal, callback);

//apiInstance.cartoesIdCartaoPortadorGet(clientId, accessToken, idCartao, callback);

//apiInstance.cartoesIdCartaoSaldoGet(clientId, accessToken, idCartao, callback);


var saldo = new ApiAgillitasCartesPrPagos.SetSaldo(); // SetSaldo | Objeto de requisição
saldo.saldo = {"valor":1};
//apiInstance.cartoesIdCartaoSaldoPut(clientId, accessToken, idCartao, saldo, callback);

//apiInstance.cartoesIdCartaoStatusGet(clientId, accessToken, idCartao, callback);

var status = new ApiAgillitasCartesPrPagos.SetCardStatus(); // SetCardStatus | Objeto de requisição
status.status = "bloqueado"
//apiInstance.cartoesIdCartaoStatusPut(clientId, accessToken, idCartao, status, callback);

var cartao = new ApiAgillitasCartesPrPagos.SetNovoCartao(); // SetNovoCartao | Objeto de requisição
cartao.cartao = {};
//apiInstance.cartoesPost(clientId, accessToken, cartao, callback);


/*DADOS PARA TRANSFERENCIA
Cartões e PINS
3713100018451 - 4466
3713100018469 - 5359
*/

var apiInstance = new ApiAgillitasCartesPrPagos.TransferenciasApi();
var beneficiario = new ApiAgillitasCartesPrPagos.TransferenciaCadastroBenificiario(); // TransferenciaCadastroBenificiario | Objeto de requisição
beneficiario.beneficiario = {
	"idCartao":"",
	"idCartaoDestino":"",
	"nome":"Snow",
	"cpf":""
};
//apiInstance.transferenciasCadastrosPost(clientId, accessToken, beneficiario, callback);

var transferencia = new ApiAgillitasCartesPrPagos.Transferencia(); // Transferencia | Objeto de requisição
transferencia.transferencia = {
	"idCartao":"3713100018451",
	"idCartaoDestino":"3713100018469",
	"valor":100,
	"senha":"5359"
};
apiInstance.transferenciasPost(clientId, accessToken, transferencia, callback);
