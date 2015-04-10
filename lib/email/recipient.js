var DEFAULT = require('./default.json');
var api = require('../api');

/**
 * @class
 * @author luiseduardobrito
 * @since 3/8/15.
 *
 * @type {Function}
 * @alias com.devnup.ws.api.util.devnup.email.recipientUtil
 */
module.exports = {

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.email.recipientUtil.list
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  list: function (input) {
    return api({
      method: 'GET',
      base_url: DEFAULT.email.host,
      url: 'recipients/list',
      data: {
        token: input.token
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.email.recipientUtil.create
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {String} input.email The recipient email
   * @param {String} input.group The group id
   * @param {String} [input.name] The sender name
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  create: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.email.host,
      url: 'recipients/create',
      data: {
        name: input.name,
        email: input.email,
        group: input.group
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.email.recipientUtil.remove
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {String} input.id The recipient id
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  remove: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.email.host,
      url: 'recipients/remove',
      data: {
        id: input.id,
        token: input.token
      }
    });
  }
};