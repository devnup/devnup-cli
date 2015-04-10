var DEFAULT = require('./default.json');
var request = require('request');

var noop = function () {
};

/**
 * The Manager API requets wrapper.
 *
 * @class
 * @author luiseduardobrito
 * @since 2/13/15.
 *
 * @alias com.devnup.ws.api.util.devnup.api
 *
 * @param input The request input object
 * @param input.data The request data
 * @param input.method The HTTP method for the request: GET, POST, PUT, DELETE or OPTIONS.
 * @param input.base_url The base url for the requests. Example: ```http://sample.devnup.com.br/api/```
 * @param input.url The url for the requests. Example: ```users/login```
 *
 * @return com.devnup.ws.api.util.devnup.api.callback The callback interface
 */
var api = function (input) {

  var cb = {
    success: noop,
    error: noop
  };

  // Check data is available
  if (typeof input.data === typeof function () {
    }) {
    fn = input.data;
    input.data = null;
  }

  // Prepare url for api call
  var full_url = input.base_url + input.url;

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
   * @alias com.devnup.ws.api.util.devnup.api.callback
   */
  var callbackInterface = {

    /**
     * @static
     * @alias com.devnup.ws.api.util.devnup.api.callback.success
     * @type {Function}
     */
    success: function (fn) {

      /**
       * @callback com.devnup.ws.api.util.devnup.api.callback.successCallback
       * @type {Function}
       * @param {{}} data The request data
       * @param {{}} response The request response
       */
      cb.success = fn;
      return callbackInterface;
    },

    /**
     * @static
     * @alias com.devnup.ws.api.util.devnup.api.callback.error
     * @type {Function}
     *
     * @param {com.devnup.ws.api.util.devnup.api.callback.errorCallback} fn The error callback
     */
    error: function (fn) {

      /**
       * @callback com.devnup.ws.api.util.devnup.api.callback.errorCallback
       * @type {Function}
       * @param {Error} error The request error
       * @param {{}} response The request response
       */
      cb.error = fn;
      return callbackInterface;
    }
  };

  return callbackInterface;
};

module.exports = api;