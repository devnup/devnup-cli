var DEFAULT = require('./default.json');
var request = require('request');

var noop = function () {
};

/**
 * The API requests wrapper.
 *
 * @class
 * @author luiseduardobrito
 * @since 2/13/15.
 *
 * @alias com.devnup.cli.lib.api
 *
 * @param {Object} input The request input object
 * @param {Object} input.data The request data
 * @param {String} input.method The HTTP method for the request: GET, POST, PUT, DELETE or OPTIONS.
 * @param {String} input.host The base url for the requests. Example: ```http://sample.devnup.com.br/api/```
 * @param {String} input.url The url for the requests. Example: ```users/login```
 *
 * @return {Object|com.devnup.cli.lib.api.callback} The callback interface
 */
var api = function (input) {

  var cb = {
    success: noop,
    error: noop
  };

  // Check data is available
  if (typeof input.data === typeof function () {
    }) {
    input.data = null;
  }

  // Prepare url for api call
  var full_url = (input.host || input.base_url ? input.host || input.base_url : '') + input.url;

  // Perform api request
  request({
    method: input.method,
    url: full_url,
    qs: input.method === 'GET' ? input.data : null,
    json: input.method !== 'GET' ? input.data : null
  }, function (error, response, data) {

    if (error) {
      cb.error(error, response);
    } else if (data && data.result === 'success') {
      cb.success(data, response);
    } else {
      cb.error(data && data.error ? data.error : data, response)
    }

  });

  /**
   * @class
   * @static
   * @type Object
   * @alias com.devnup.cli.lib.api.callback
   */
  var callbackInterface = {

    /**
     * @static
     * @alias com.devnup.cli.lib.api.callback.success
     * @type {Function}
     *
     * @param {com.devnup.cli.lib.api.callback.successCallback} fn The error callback
     */
    success: function (fn) {

      /**
       * @callback com.devnup.cli.lib.api.callback.successCallback
       * @type {Function}
       * @param {Object} data The request data
       * @param {Object} [response] The request response
       */
      cb.success = fn;
      return callbackInterface;
    },

    /**
     * @static
     * @alias com.devnup.cli.lib.api.callback.error
     * @type {Function}
     *
     * @param {com.devnup.cli.lib.api.callback.errorCallback} fn The error callback
     */
    error: function (fn) {

      /**
       * @callback com.devnup.cli.lib.api.callback.errorCallback
       * @type {Function}
       * @param {Error} error The request error
       * @param {Object} [response] The request response
       */
      cb.error = fn;
      return callbackInterface;
    }
  };

  return callbackInterface;
};

module.exports = api;

module.exports.wrapper = function (input, data) {

  var filteredData = {};

  input.data.map(function (d) {
    filteredData[d] = data[d];
  });

  return api({
    method: input.method,
    base_url: input.base_url,
    host: input.host,
    url: input.url,
    data: filteredData
  })

};
