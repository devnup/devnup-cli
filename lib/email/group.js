var DEFAULT = require('./default.json').email;
var api = require('../api');

/**
 * @class
 * @author luiseduardobrito
 * @since 3/8/15.
 *
 * @type {Function}
 * @alias com.devnup.cli.lib.email.group
 */
module.exports = {

  /**
   * @static
   * @alias com.devnup.cli.lib.email.group.list
   *
   * @param {Object} data The data object
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  list: function (data) {
    return api.wrapper({
      method: 'GET',
      host: DEFAULT.host,
      url: 'groups/list',
      data: ['token']
    });
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.email.group.create
   * @param {Object} data The input object
   * @param {String} data.token The user access token
   * @param {String} data.name The group name
   * @param {String} [data.image] The group image
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  create: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'groups/create',
      data: ['token', 'name', 'email']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.email.group.remove
   * @param {Object} data The input object
   * @param {String} data.token The user access token
   * @param {String} data.id The sender id
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  remove: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'groups/remove',
      data: ['id', 'token']
    }, data);
  }
};