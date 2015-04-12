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
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  list: function (data) {
    return api.wrapper({
      method: 'GET',
      base_url: DEFAULT.email.host,
      url: 'recipients/list',
      data: ['token']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.email.recipientUtil.create
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @param {String} data.email The recipient email
   * @param {String} data.group The group id
   * @param {String} [data.name] The sender name
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  create: function (data) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.email.host,
      url: 'recipients/create',
      data: ['name', 'email', 'group']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.email.recipientUtil.remove
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @param {String} data.id The recipient id
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  remove: function (data) {
    return api({
      method: 'POST',
      base_url: DEFAULT.email.host,
      url: 'recipients/remove',
      data: {
        id: data.id,
        token: data.token
      }
    }, data);
  }
};