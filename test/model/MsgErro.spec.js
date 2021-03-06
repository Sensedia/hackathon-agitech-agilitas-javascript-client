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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiAgillitasCartesPrPagos);
  }
}(this, function(expect, ApiAgillitasCartesPrPagos) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiAgillitasCartesPrPagos.MsgErro();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MsgErro', function() {
    it('should create an instance of MsgErro', function() {
      // uncomment below and update the code to test MsgErro
      //var instane = new ApiAgillitasCartesPrPagos.MsgErro();
      //expect(instance).to.be.a(ApiAgillitasCartesPrPagos.MsgErro);
    });

    it('should have the property mensagem (base name: "mensagem")', function() {
      // uncomment below and update the code to test the property mensagem
      //var instane = new ApiAgillitasCartesPrPagos.MsgErro();
      //expect(instance).to.be();
    });

  });

}));
