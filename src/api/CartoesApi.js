/**
 * API Agillitas Cartões Pré-pagos
 * API para manipular recursos relacionadas aos  cartões pré-pagos Agillitas.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ExtratoResponse', 'model/MsgErro', 'model/PortadorResponse', 'model/Saldo', 'model/SetCardStatus', 'model/SetNovoCartao', 'model/SetSaldo', 'model/StatusCartaoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ExtratoResponse'), require('../model/MsgErro'), require('../model/PortadorResponse'), require('../model/Saldo'), require('../model/SetCardStatus'), require('../model/SetNovoCartao'), require('../model/SetSaldo'), require('../model/StatusCartaoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiAgillitasCartesPrPagos) {
      root.ApiAgillitasCartesPrPagos = {};
    }
    root.ApiAgillitasCartesPrPagos.CartoesApi = factory(root.ApiAgillitasCartesPrPagos.ApiClient, root.ApiAgillitasCartesPrPagos.ExtratoResponse, root.ApiAgillitasCartesPrPagos.MsgErro, root.ApiAgillitasCartesPrPagos.PortadorResponse, root.ApiAgillitasCartesPrPagos.Saldo, root.ApiAgillitasCartesPrPagos.SetCardStatus, root.ApiAgillitasCartesPrPagos.SetNovoCartao, root.ApiAgillitasCartesPrPagos.SetSaldo, root.ApiAgillitasCartesPrPagos.StatusCartaoResponse);
  }
}(this, function(ApiClient, ExtratoResponse, MsgErro, PortadorResponse, Saldo, SetCardStatus, SetNovoCartao, SetSaldo, StatusCartaoResponse) {
  'use strict';

  /**
   * Cartoes service.
   * @module api/CartoesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CartoesApi. 
   * @alias module:api/CartoesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cartoesIdCartaoExtratoGet operation.
     * @callback module:api/CartoesApi~cartoesIdCartaoExtratoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExtratoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta o extrato do cartão
     * &lt;p&gt;Permite a consulta dos movimentos por período de um determinado cartão. A janela máxima de observação é de 30 dias, e as datas inicial e final de observação pode ser configuradas, conforme necessidade.&lt;/p&gt;
     * @param {String} clientId Identificador do cliente utilizado na autenticação.
     * @param {String} accessToken Token de acesso utilizado na autenticação.
     * @param {String} idCartao Número identificador referente ao proxy localizado no verso do cartão.
     * @param {Date} dataInicial Data inicial para a consulta (YYYY-MM-DD).
     * @param {Date} dataFinal Data final para a consulta (YYYY-MM-DD)..
     * @param {module:api/CartoesApi~cartoesIdCartaoExtratoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExtratoResponse}
     */
    this.cartoesIdCartaoExtratoGet = function(clientId, accessToken, idCartao, dataInicial, dataFinal, callback) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling cartoesIdCartaoExtratoGet");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling cartoesIdCartaoExtratoGet");
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao === undefined || idCartao === null) {
        throw new Error("Missing the required parameter 'idCartao' when calling cartoesIdCartaoExtratoGet");
      }

      // verify the required parameter 'dataInicial' is set
      if (dataInicial === undefined || dataInicial === null) {
        throw new Error("Missing the required parameter 'dataInicial' when calling cartoesIdCartaoExtratoGet");
      }

      // verify the required parameter 'dataFinal' is set
      if (dataFinal === undefined || dataFinal === null) {
        throw new Error("Missing the required parameter 'dataFinal' when calling cartoesIdCartaoExtratoGet");
      }


      var pathParams = {
        'idCartao': idCartao
      };
      var queryParams = {
        'dataInicial': dataInicial,
        'dataFinal': dataFinal
      };
      var headerParams = {
        'client_id': clientId,
        'access_token': accessToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ExtratoResponse;

      return this.apiClient.callApi(
        '/cartoes/{idCartao}/extrato', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cartoesIdCartaoPortadorGet operation.
     * @callback module:api/CartoesApi~cartoesIdCartaoPortadorGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consuta informações do portador do cartão
     * &lt;p&gt;Permite a consulta de informações cadastrais de um determinado portador de cartão.&lt;/p&gt;
     * @param {String} clientId Identificador do cliente utilizado na autenticação.
     * @param {String} accessToken Token de acesso utilizado na autenticação.
     * @param {String} idCartao Número identificador referente ao proxy localizado no verso do cartão.
     * @param {module:api/CartoesApi~cartoesIdCartaoPortadorGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PortadorResponse}
     */
    this.cartoesIdCartaoPortadorGet = function(clientId, accessToken, idCartao, callback) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling cartoesIdCartaoPortadorGet");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling cartoesIdCartaoPortadorGet");
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao === undefined || idCartao === null) {
        throw new Error("Missing the required parameter 'idCartao' when calling cartoesIdCartaoPortadorGet");
      }


      var pathParams = {
        'idCartao': idCartao
      };
      var queryParams = {
      };
      var headerParams = {
        'client_id': clientId,
        'access_token': accessToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PortadorResponse;

      return this.apiClient.callApi(
        '/cartoes/{idCartao}/portador', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cartoesIdCartaoSaldoGet operation.
     * @callback module:api/CartoesApi~cartoesIdCartaoSaldoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Saldo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta o saldo do cartão
     * &lt;p&gt;Permite a consulta do saldo disponível de um determinado cartão.&lt;/p&gt;
     * @param {String} clientId Identificador do cliente utilizado na autenticação.
     * @param {String} accessToken Token de acesso utilizado na autenticação.
     * @param {String} idCartao Número identificador referente ao proxy localizado no verso do cartão.
     * @param {module:api/CartoesApi~cartoesIdCartaoSaldoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Saldo}
     */
    this.cartoesIdCartaoSaldoGet = function(clientId, accessToken, idCartao, callback) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling cartoesIdCartaoSaldoGet");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling cartoesIdCartaoSaldoGet");
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao === undefined || idCartao === null) {
        throw new Error("Missing the required parameter 'idCartao' when calling cartoesIdCartaoSaldoGet");
      }


      var pathParams = {
        'idCartao': idCartao
      };
      var queryParams = {
      };
      var headerParams = {
        'client_id': clientId,
        'access_token': accessToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Saldo;

      return this.apiClient.callApi(
        '/cartoes/{idCartao}/saldo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cartoesIdCartaoSaldoPut operation.
     * @callback module:api/CartoesApi~cartoesIdCartaoSaldoPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Credita ou debita valor da conta de um cartão.
     * &lt;p&gt;Permite creditar ou debitar um valor especifico em um determinado cartão.&lt;/p&gt;&lt;br/&gt;&lt;p class&#x3D;&#39;obs obs-danger&#39;&gt;Este recurso deve ser utilizado somente pelo reseller e quando o credito do cartão for de responsabilidade e propriedade do Reseller.&lt;/p&gt;
     * @param {String} clientId Identificador do cliente utilizado na autenticação.
     * @param {String} accessToken Token de acesso utilizado na autenticação.
     * @param {String} idCartao Número identificador referente ao proxy localizado no verso do cartão.
     * @param {module:model/SetSaldo} saldo Objeto de requisição
     * @param {module:api/CartoesApi~cartoesIdCartaoSaldoPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.cartoesIdCartaoSaldoPut = function(clientId, accessToken, idCartao, saldo, callback) {
      var postBody = saldo;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling cartoesIdCartaoSaldoPut");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling cartoesIdCartaoSaldoPut");
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao === undefined || idCartao === null) {
        throw new Error("Missing the required parameter 'idCartao' when calling cartoesIdCartaoSaldoPut");
      }

      // verify the required parameter 'saldo' is set
      if (saldo === undefined || saldo === null) {
        throw new Error("Missing the required parameter 'saldo' when calling cartoesIdCartaoSaldoPut");
      }


      var pathParams = {
        'idCartao': idCartao
      };
      var queryParams = {
      };
      var headerParams = {
        'client_id': clientId,
        'access_token': accessToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cartoes/{idCartao}/saldo', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cartoesIdCartaoStatusGet operation.
     * @callback module:api/CartoesApi~cartoesIdCartaoStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta o status do cartão
     * &lt;p&gt;Permite a consulta do status de um determinado cartão. O status do cartão nos permite saber se o cartão esta ativo, bloqueado, desbloqueado ou cancelado.&lt;/p&gt;
     * @param {String} clientId Identificador do cliente utilizado na autenticação.
     * @param {String} accessToken Token de acesso utilizado na autenticação.
     * @param {String} idCartao Número identificador referente ao proxy localizado no verso do cartão.
     * @param {module:api/CartoesApi~cartoesIdCartaoStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatusCartaoResponse}
     */
    this.cartoesIdCartaoStatusGet = function(clientId, accessToken, idCartao, callback) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling cartoesIdCartaoStatusGet");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling cartoesIdCartaoStatusGet");
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao === undefined || idCartao === null) {
        throw new Error("Missing the required parameter 'idCartao' when calling cartoesIdCartaoStatusGet");
      }


      var pathParams = {
        'idCartao': idCartao
      };
      var queryParams = {
      };
      var headerParams = {
        'client_id': clientId,
        'access_token': accessToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StatusCartaoResponse;

      return this.apiClient.callApi(
        '/cartoes/{idCartao}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cartoesIdCartaoStatusPut operation.
     * @callback module:api/CartoesApi~cartoesIdCartaoStatusPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera status do cartão
     * &lt;p&gt;Permite o bloqueio e desbloqueio de um determinado cartão.&lt;/p&gt;
     * @param {String} clientId Identificador do cliente utilizado na autenticação.
     * @param {String} accessToken Token de acesso utilizado na autenticação.
     * @param {String} idCartao Número identificador referente ao proxy localizado no verso do cartão.
     * @param {module:model/SetCardStatus} status Objeto de requisição
     * @param {module:api/CartoesApi~cartoesIdCartaoStatusPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.cartoesIdCartaoStatusPut = function(clientId, accessToken, idCartao, status, callback) {
      var postBody = status;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling cartoesIdCartaoStatusPut");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling cartoesIdCartaoStatusPut");
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao === undefined || idCartao === null) {
        throw new Error("Missing the required parameter 'idCartao' when calling cartoesIdCartaoStatusPut");
      }

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling cartoesIdCartaoStatusPut");
      }


      var pathParams = {
        'idCartao': idCartao
      };
      var queryParams = {
      };
      var headerParams = {
        'client_id': clientId,
        'access_token': accessToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cartoes/{idCartao}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cartoesPost operation.
     * @callback module:api/CartoesApi~cartoesPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Associa um número de proxy de cartão a um portador.
     * &lt;p&gt;Operação responsável por associar um número proxy de cartão a um portador.&lt;/p&gt;&lt;br/&gt; &lt;p&gt;Esse processo de liberação é assíncrono.&lt;/p&gt; 
     * @param {String} clientId Identificador do cliente utilizado na autenticação.
     * @param {String} accessToken Token de acesso utilizado na autenticação.
     * @param {module:model/SetNovoCartao} cartao Objeto de requisição
     * @param {module:api/CartoesApi~cartoesPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.cartoesPost = function(clientId, accessToken, cartao, callback) {
      var postBody = cartao;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling cartoesPost");
      }

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling cartoesPost");
      }

      // verify the required parameter 'cartao' is set
      if (cartao === undefined || cartao === null) {
        throw new Error("Missing the required parameter 'cartao' when calling cartoesPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'client_id': clientId,
        'access_token': accessToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cartoes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
