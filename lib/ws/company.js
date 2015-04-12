var DEFAULT = require('./default.json').ws;
var api = require('../api');

/**
 * @class
 * @author luiseduardobrito
 *
 * @type {Function}
 * @alias com.devnup.cli.lib.ws.company
 */
module.exports = {

  /**
   * Gets company of the current logged in user based on access token.
   *
   * @static
   * @alias com.devnup.cli.lib.ws.company.me
   *
   * @param {Object} data The data object
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  me: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'companies/me',
      data: ['token']
    }, data)
  },

  /**
   * Create a new company.
   *
   * @static
   * @alias com.devnup.cli.lib.ws.company.create
   *
   * @param {Object} data The data object
   * @param {String} data.name The new company name
   * @param {String} data.email The new company email
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  create: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'companies/create',
      data: ['name', 'email', 'token']
    }, data)
  },

  /**
   * Finds company by id.
   *
   * @static
   * @alias com.devnup.cli.lib.ws.company.find
   *
   * @param {Object} data The data object
   * @param {String} data.id The company id
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  find: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'companies/find',
      data: ['id', 'token']
    }, data)
  },

  /**
   * Remove company by id.
   *
   * @static
   * @alias com.devnup.cli.lib.ws.company.remove
   *
   * @param {Object} data The data object
   * @param {String} data.id The company id
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  remove: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'companies/remove',
      data: ['id', 'token']
    }, data)
  }
};