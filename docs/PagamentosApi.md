# ApiAgillitasCartesPrPagos.PagamentosApi

All URIs are relative to *https://api-visa.sensedia.com/sandbox/visa/agillitas/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pagamentosPost**](PagamentosApi.md#pagamentosPost) | **POST** /pagamentos | Pagamento de boletos.


<a name="pagamentosPost"></a>
# **pagamentosPost**
> pagamentosPost(clientId, accessToken, boleto)

Pagamento de boletos.

&lt;p&gt;Permite o pagamento de boletos.&lt;/p&gt;

### Example
```javascript
var ApiAgillitasCartesPrPagos = require('api_agillitas_cartes_pr_pagos');

var apiInstance = new ApiAgillitasCartesPrPagos.PagamentosApi();

var clientId = "clientId_example"; // String | Identificador do cliente utilizado na autenticação.

var accessToken = "accessToken_example"; // String | Token de acesso utilizado na autenticação.

var boleto = new ApiAgillitasCartesPrPagos.Pagamento(); // Pagamento | Objeto de requisição


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pagamentosPost(clientId, accessToken, boleto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificador do cliente utilizado na autenticação. | 
 **accessToken** | **String**| Token de acesso utilizado na autenticação. | 
 **boleto** | [**Pagamento**](Pagamento.md)| Objeto de requisição | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

