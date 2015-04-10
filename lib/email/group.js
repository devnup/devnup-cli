var DEFAULT = require('./default.json');
var api = require('../api');

/**
 * @class
 * @author luiseduardobrito
 * @since 3/8/15.
 *
 * @type {Function}
 * @alias com.devnup.ws.api.util.devnup.email.groupUtil
 */
module.exports = {

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.email.groupUtil.list
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  list: function (input) {
    return api({
      method: 'GET',
      base_url: DEFAULT.email.host,
      url: 'groups/list',
      data: {
        token: input.token
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.email.groupUtil.create
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {String} input.name The group name
   * @param {String} [input.image] The group image
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  create: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.email.host,
      url: 'groups/create',
      data: {
        name: input.name,
        email: input.image,
        token: input.token
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.email.groupUtil.remove
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {String} input.id The sender id
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  remove: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.email.host,
      url: 'groups/remove',
      data: {
        id: input.id,
        token: input.token
      }
    });
  }
};