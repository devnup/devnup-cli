var DEFAULT = require('./default.json');
var api = require('../api');

/**
 * @class
 * @author luiseduardobrito
 * @since 3/8/15.
 *
 * @type {Function}
 * @alias com.devnup.ws.api.util.devnup.email.senderUtil
 */
module.exports = {

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.email.senderUtil.list
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  list: function (input) {
    return api({
      method: 'GET',
      base_url: DEFAULT.email.host,
      url: 'senders/list',
      data: {
        token: input.token
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.email.senderUtil.create
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {String} input.name The sender name
   * @param {String} input.email The sender email
   * @param {String} [input.quota] The sender quota
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  create: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.email.host,
      url: 'senders/create',
      data: {
        name: input.name,
        email: input.email,
        quota: input.quota,
        token: input.token
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.email.senderUtil.remove
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {String} input.id The group id
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  remove: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.email.host,
      url: 'senders/remove',
      data: {
        id: input.id,
        token: input.token
      }
    });
  }

};