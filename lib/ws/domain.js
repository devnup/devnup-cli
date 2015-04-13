var DEFAULT = require('./default.json').ws;
var api = require('../api');

/**
 * @class
 * @author luiseduardobrito
 *
 * @type {Function}
 * @alias com.devnup.cli.lib.ws.domain
 */
module.exports = {

  /**
   * Create a new domain.
   *
   * @static
   * @alias com.devnup.cli.lib.ws.domain.create
   *
   * @param {Object} data The data object
   * @param {String} data.name The new domain name
   * @param {String} data.url The new domain url
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  create: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'domains/create',
      data: ['name', 'url', 'token']
    }, data)
  },

  /**
   * List all company domains.
   *
   * @alias com.devnup.cli.lib.ws.domain.list
   *
   * @param {Object} data The object data
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  list: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'domains/list',
      data: ['token']
    }, data)
  },

  /**
   * Remove a domain by its id.
   *
   * @alias com.devnup.cli.lib.ws.domain.remove
   *
   * @param {Object} data The object data
   * @param {String} data.id The domain id
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  remove: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'domains/remove',
      data: ['id', 'token']
    }, data)
  }
};