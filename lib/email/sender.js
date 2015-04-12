var DEFAULT = require('./default.json');
var api = require('../api');

/**
 * @class
 * @author luiseduardobrito
 * @since 3/8/15.
 *
 * @type {Function}
 * @alias com.devnup.cli.lib.email.sender
 */
module.exports = {

  /**
   * @static
   * @alias com.devnup.cli.lib.email.sender.list
   *
   * @param {Object} data The data object
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  list: function (data) {
    return api({
      method: 'GET',
      base_url: DEFAULT.email.host,
      url: 'senders/list',
      data: ['token']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.email.sender.create
   * @param {Object} data The data object
   * @param {String} data.token The user access token
   * @param {String} data.name The sender name
   * @param {String} data.email The sender email
   * @param {String} [data.quota] The sender quota
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  create: function (data) {
    return api({
      method: 'POST',
      base_url: DEFAULT.email.host,
      url: 'senders/create',
      data: ['name', 'email', 'quota', 'token']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.email.sender.remove
   * @param {Object} data The data object
   * @param {String} data.token The user access token
   * @param {String} data.id The group id
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  remove: function (data) {
    return api({
      method: 'POST',
      base_url: DEFAULT.email.host,
      url: 'senders/remove',
      data: ['id', 'token']
    }, data);
  }

};