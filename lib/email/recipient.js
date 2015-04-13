var DEFAULT = require('./default.json').email;
var api = require('../api');

/**
 * @class
 * @author luiseduardobrito
 * @since 3/8/15.
 *
 * @type {Function}
 * @alias com.devnup.cli.lib.email.recipient
 */
module.exports = {

  /**
   * @static
   * @alias com.devnup.cli.lib.email.recipient.list
   *
   * @param {Object} data The data object
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  list: function (data) {
    return api.wrapper({
      method: 'GET',
      host: DEFAULT.host,
      url: 'recipients/list',
      data: ['token']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.email.recipient.create
   * @param {Object} data The data object
   * @param {String} data.token The user access token
   * @param {String} data.email The recipient email
   * @param {String} data.group The group id
   * @param {String} [data.name] The sender name
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  create: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'recipients/create',
      data: ['name', 'email', 'group']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.email.recipient.remove
   * @param {Object} data The data object
   * @param {String} data.token The user access token
   * @param {String} data.id The recipient id
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  remove: function (data) {
    return api({
      method: 'POST',
      host: DEFAULT.host,
      url: 'recipients/remove',
      data: {
        id: data.id,
        token: data.token
      }
    }, data);
  }
};