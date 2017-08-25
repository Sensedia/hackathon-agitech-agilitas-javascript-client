# ApiAgillitasCartesPrPagos.CartoesApi

All URIs are relative to *https://api-visa.sensedia.com/sandbox/visa/agillitas/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartoesIdCartaoExtratoGet**](CartoesApi.md#cartoesIdCartaoExtratoGet) | **GET** /cartoes/{idCartao}/extrato | Consulta o extrato do cartão
[**cartoesIdCartaoPortadorGet**](CartoesApi.md#cartoesIdCartaoPortadorGet) | **GET** /cartoes/{idCartao}/portador | Consuta informações do portador do cartão
[**cartoesIdCartaoSaldoGet**](CartoesApi.md#cartoesIdCartaoSaldoGet) | **GET** /cartoes/{idCartao}/saldo | Consulta o saldo do cartão
[**cartoesIdCartaoSaldoPut**](CartoesApi.md#cartoesIdCartaoSaldoPut) | **PUT** /cartoes/{idCartao}/saldo | Credita ou debita valor da conta de um cartão.
[**cartoesIdCartaoStatusGet**](CartoesApi.md#cartoesIdCartaoStatusGet) | **GET** /cartoes/{idCartao}/status | Consulta o status do cartão
[**cartoesIdCartaoStatusPut**](CartoesApi.md#cartoesIdCartaoStatusPut) | **PUT** /cartoes/{idCartao}/status | Altera status do cartão
[**cartoesPost**](CartoesApi.md#cartoesPost) | **POST** /cartoes | Associa um número de proxy de cartão a um portador.


<a name="cartoesIdCartaoExtratoGet"></a>
# **cartoesIdCartaoExtratoGet**
> ExtratoResponse cartoesIdCartaoExtratoGet(clientId, accessToken, idCartao, dataInicial, dataFinal)

Consulta o extrato do cartão

&lt;p&gt;Permite a consulta dos movimentos por período de um determinado cartão. A janela máxima de observação é de 30 dias, e as datas inicial e final de observação pode ser configuradas, conforme necessidade.&lt;/p&gt;

### Example
```javascript
var ApiAgillitasCartesPrPagos = require('api_agillitas_cartes_pr_pagos');

var apiInstance = new ApiAgillitasCartesPrPagos.CartoesApi();

var clientId = "clientId_example"; // String | Identificador do cliente utilizado na autenticação.

var accessToken = "accessToken_example"; // String | Token de acesso utilizado na autenticação.

var idCartao = "idCartao_example"; // String | Número identificador referente ao proxy localizado no verso do cartão.

var dataInicial = new Date("2013-10-20"); // Date | Data inicial para a consulta (YYYY-MM-DD).

var dataFinal = new Date("2013-10-20"); // Date | Data final para a consulta (YYYY-MM-DD)..


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartoesIdCartaoExtratoGet(clientId, accessToken, idCartao, dataInicial, dataFinal, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificador do cliente utilizado na autenticação. | 
 **accessToken** | **String**| Token de acesso utilizado na autenticação. | 
 **idCartao** | **String**| Número identificador referente ao proxy localizado no verso do cartão. | 
 **dataInicial** | **Date**| Data inicial para a consulta (YYYY-MM-DD). | 
 **dataFinal** | **Date**| Data final para a consulta (YYYY-MM-DD).. | 

### Return type

[**ExtratoResponse**](ExtratoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cartoesIdCartaoPortadorGet"></a>
# **cartoesIdCartaoPortadorGet**
> PortadorResponse cartoesIdCartaoPortadorGet(clientId, accessToken, idCartao)

Consuta informações do portador do cartão

&lt;p&gt;Permite a consulta de informações cadastrais de um determinado portador de cartão.&lt;/p&gt;

### Example
```javascript
var ApiAgillitasCartesPrPagos = require('api_agillitas_cartes_pr_pagos');

var apiInstance = new ApiAgillitasCartesPrPagos.CartoesApi();

var clientId = "clientId_example"; // String | Identificador do cliente utilizado na autenticação.

var accessToken = "accessToken_example"; // String | Token de acesso utilizado na autenticação.

var idCartao = "idCartao_example"; // String | Número identificador referente ao proxy localizado no verso do cartão.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartoesIdCartaoPortadorGet(clientId, accessToken, idCartao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificador do cliente utilizado na autenticação. | 
 **accessToken** | **String**| Token de acesso utilizado na autenticação. | 
 **idCartao** | **String**| Número identificador referente ao proxy localizado no verso do cartão. | 

### Return type

[**PortadorResponse**](PortadorResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cartoesIdCartaoSaldoGet"></a>
# **cartoesIdCartaoSaldoGet**
> Saldo cartoesIdCartaoSaldoGet(clientId, accessToken, idCartao)

Consulta o saldo do cartão

&lt;p&gt;Permite a consulta do saldo disponível de um determinado cartão.&lt;/p&gt;

### Example
```javascript
var ApiAgillitasCartesPrPagos = require('api_agillitas_cartes_pr_pagos');

var apiInstance = new ApiAgillitasCartesPrPagos.CartoesApi();

var clientId = "clientId_example"; // String | Identificador do cliente utilizado na autenticação.

var accessToken = "accessToken_example"; // String | Token de acesso utilizado na autenticação.

var idCartao = "idCartao_example"; // String | Número identificador referente ao proxy localizado no verso do cartão.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartoesIdCartaoSaldoGet(clientId, accessToken, idCartao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificador do cliente utilizado na autenticação. | 
 **accessToken** | **String**| Token de acesso utilizado na autenticação. | 
 **idCartao** | **String**| Número identificador referente ao proxy localizado no verso do cartão. | 

### Return type

[**Saldo**](Saldo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cartoesIdCartaoSaldoPut"></a>
# **cartoesIdCartaoSaldoPut**
> cartoesIdCartaoSaldoPut(clientId, accessToken, idCartao, saldo)

Credita ou debita valor da conta de um cartão.

&lt;p&gt;Permite creditar ou debitar um valor especifico em um determinado cartão.&lt;/p&gt;&lt;br/&gt;&lt;p class&#x3D;&#39;obs obs-danger&#39;&gt;Este recurso deve ser utilizado somente pelo reseller e quando o credito do cartão for de responsabilidade e propriedade do Reseller.&lt;/p&gt;

### Example
```javascript
var ApiAgillitasCartesPrPagos = require('api_agillitas_cartes_pr_pagos');

var apiInstance = new ApiAgillitasCartesPrPagos.CartoesApi();

var clientId = "clientId_example"; // String | Identificador do cliente utilizado na autenticação.

var accessToken = "accessToken_example"; // String | Token de acesso utilizado na autenticação.

var idCartao = "idCartao_example"; // String | Número identificador referente ao proxy localizado no verso do cartão.

var saldo = new ApiAgillitasCartesPrPagos.SetSaldo(); // SetSaldo | Objeto de requisição


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.cartoesIdCartaoSaldoPut(clientId, accessToken, idCartao, saldo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificador do cliente utilizado na autenticação. | 
 **accessToken** | **String**| Token de acesso utilizado na autenticação. | 
 **idCartao** | **String**| Número identificador referente ao proxy localizado no verso do cartão. | 
 **saldo** | [**SetSaldo**](SetSaldo.md)| Objeto de requisição | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cartoesIdCartaoStatusGet"></a>
# **cartoesIdCartaoStatusGet**
> StatusCartaoResponse cartoesIdCartaoStatusGet(clientId, accessToken, idCartao)

Consulta o status do cartão

&lt;p&gt;Permite a consulta do status de um determinado cartão. O status do cartão nos permite saber se o cartão esta ativo, bloqueado, desbloqueado ou cancelado.&lt;/p&gt;

### Example
```javascript
var ApiAgillitasCartesPrPagos = require('api_agillitas_cartes_pr_pagos');

var apiInstance = new ApiAgillitasCartesPrPagos.CartoesApi();

var clientId = "clientId_example"; // String | Identificador do cliente utilizado na autenticação.

var accessToken = "accessToken_example"; // String | Token de acesso utilizado na autenticação.

var idCartao = "idCartao_example"; // String | Número identificador referente ao proxy localizado no verso do cartão.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartoesIdCartaoStatusGet(clientId, accessToken, idCartao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificador do cliente utilizado na autenticação. | 
 **accessToken** | **String**| Token de acesso utilizado na autenticação. | 
 **idCartao** | **String**| Número identificador referente ao proxy localizado no verso do cartão. | 

### Return type

[**StatusCartaoResponse**](StatusCartaoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cartoesIdCartaoStatusPut"></a>
# **cartoesIdCartaoStatusPut**
> cartoesIdCartaoStatusPut(clientId, accessToken, idCartao, status)

Altera status do cartão

&lt;p&gt;Permite o bloqueio e desbloqueio de um determinado cartão.&lt;/p&gt;

### Example
```javascript
var ApiAgillitasCartesPrPagos = require('api_agillitas_cartes_pr_pagos');

var apiInstance = new ApiAgillitasCartesPrPagos.CartoesApi();

var clientId = "clientId_example"; // String | Identificador do cliente utilizado na autenticação.

var accessToken = "accessToken_example"; // String | Token de acesso utilizado na autenticação.

var idCartao = "idCartao_example"; // String | Número identificador referente ao proxy localizado no verso do cartão.

var status = new ApiAgillitasCartesPrPagos.SetCardStatus(); // SetCardStatus | Objeto de requisição


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.cartoesIdCartaoStatusPut(clientId, accessToken, idCartao, status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificador do cliente utilizado na autenticação. | 
 **accessToken** | **String**| Token de acesso utilizado na autenticação. | 
 **idCartao** | **String**| Número identificador referente ao proxy localizado no verso do cartão. | 
 **status** | [**SetCardStatus**](SetCardStatus.md)| Objeto de requisição | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cartoesPost"></a>
# **cartoesPost**
> cartoesPost(clientId, accessToken, cartao)

Associa um número de proxy de cartão a um portador.

&lt;p&gt;Operação responsável por associar um número proxy de cartão a um portador.&lt;/p&gt;&lt;br/&gt; &lt;p&gt;Esse processo de liberação é assíncrono.&lt;/p&gt; 

### Example
```javascript
var ApiAgillitasCartesPrPagos = require('api_agillitas_cartes_pr_pagos');

var apiInstance = new ApiAgillitasCartesPrPagos.CartoesApi();

var clientId = "clientId_example"; // String | Identificador do cliente utilizado na autenticação.

var accessToken = "accessToken_example"; // String | Token de acesso utilizado na autenticação.

var cartao = new ApiAgillitasCartesPrPagos.SetNovoCartao(); // SetNovoCartao | Objeto de requisição


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.cartoesPost(clientId, accessToken, cartao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Identificador do cliente utilizado na autenticação. | 
 **accessToken** | **String**| Token de acesso utilizado na autenticação. | 
 **cartao** | [**SetNovoCartao**](SetNovoCartao.md)| Objeto de requisição | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

