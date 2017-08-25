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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiAgillitasCartesPrPagos) {
      root.ApiAgillitasCartesPrPagos = {};
    }
    root.ApiAgillitasCartesPrPagos.DetalhamentoExtrato = factory(root.ApiAgillitasCartesPrPagos.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DetalhamentoExtrato model module.
   * @module model/DetalhamentoExtrato
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DetalhamentoExtrato</code>.
   * @alias module:model/DetalhamentoExtrato
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DetalhamentoExtrato</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetalhamentoExtrato} obj Optional instance to populate.
   * @return {module:model/DetalhamentoExtrato} The populated <code>DetalhamentoExtrato</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dataHora')) {
        obj['dataHora'] = ApiClient.convertToType(data['dataHora'], 'String');
      }
      if (data.hasOwnProperty('estabelecimento')) {
        obj['estabelecimento'] = ApiClient.convertToType(data['estabelecimento'], 'String');
      }
      if (data.hasOwnProperty('tipo')) {
        obj['tipo'] = ApiClient.convertToType(data['tipo'], 'String');
      }
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Data e hora da transação do cartão. (DD/MM/YYYY HH:mm:SS)
   * @member {String} dataHora
   */
  exports.prototype['dataHora'] = undefined;
  /**
   * Estabelecimento onde ocorreu a transação do cartão.
   * @member {String} estabelecimento
   */
  exports.prototype['estabelecimento'] = undefined;
  /**
   * Tipo da transação do cartão.
   * @member {String} tipo
   */
  exports.prototype['tipo'] = undefined;
  /**
   * Valor monetário  da transação do cartão.
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;



  return exports;
}));

