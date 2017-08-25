# ApiAgillitasCartesPrPagos.TransferenciasApi

All URIs are relative to *https://api-visa.sensedia.com/sandbox/visa/agillitas/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transferenciasCadastrosPost**](TransferenciasApi.md#transferenciasCadastrosPost) | **POST** /transferencias/cadastros | Cadastro de beneficiário para Transferencia
[**transferenciasPost**](TransferenciasApi.md#transferenciasPost) | **POST** /transferencias | Transferência de valores entre contas


<a name="transferenciasCadastrosPost"></a>
# **transferenciasCadastrosPost**
> transferenciasCadastrosPost(clientId, accessToken, beneficiario)

Cadastro de beneficiário para Transferencia

&lt;p&gt;Permite o cadastro de beneficiário para uma transferencia.&lt;/p&gt;

### Example
```javascript
var ApiAgillitasCartesPrPagos = require('api_agillitas_cartes_pr_pagos');

var apiInstance = new ApiAgillitasCartesPrPagos.TransferenciasApi();

var clientId = "clientId_example"; // String | Identificador do cliente utilizado na autenticação.

var accessToken = "accessToken_example"; // String | Token de acesso utilizado na autenticação.

var beneficiario = new ApiAgillitasCartesPrPagos.TransferenciaCadastroBenificiario(); // TransferenciaCadastroBenificiario | Objeto de requisição


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.transferenciasCadastrosPost(clientId, accessToken, beneficiario, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificador do cliente utilizado na autenticação. | 
 **accessToken** | **String**| Token de acesso utilizado na autenticação. | 
 **beneficiario** | [**TransferenciaCadastroBenificiario**](TransferenciaCadastroBenificiario.md)| Objeto de requisição | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transferenciasPost"></a>
# **transferenciasPost**
> transferenciasPost(clientId, accessToken, transferencia)

Transferência de valores entre contas

&lt;p&gt;Permite a transferência de valor entre dois cartões pré cadastrados.&lt;/p&gt;

### Example
```javascript
var ApiAgillitasCartesPrPagos = require('api_agillitas_cartes_pr_pagos');

var apiInstance = new ApiAgillitasCartesPrPagos.TransferenciasApi();

var clientId = "clientId_example"; // String | Identificador do cliente utilizado na autenticação.

var accessToken = "accessToken_example"; // String | Token de acesso utilizado na autenticação.

var transferencia = new ApiAgillitasCartesPrPagos.Transferencia(); // Transferencia | Objeto de requisição


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.transferenciasPost(clientId, accessToken, transferencia, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificador do cliente utilizado na autenticação. | 
 **accessToken** | **String**| Token de acesso utilizado na autenticação. | 
 **transferencia** | [**Transferencia**](Transferencia.md)| Objeto de requisição | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

