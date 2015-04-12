var DEFAULT = require('./default.json');
var api = require('../api');

/**
 * @class
 * @author luiseduardobrito
 * @since 3/8/15.
 *
 * @type {Function}
 * @alias com.devnup.cli.lib.email.gateway
 */
module.exports = {

  /**
   * @static
   * @alias com.devnup.cli.lib.email.gateway.send
   *
   * @param {Object} data The input object
   * @param {String} data.token The user access token
   * @param {Object} data.message The email message object
   * @param {String} data.message.to The email message destination
   * @param {String} data.message.subject The email message subject
   * @param {String} [data.message.text] The email message plain text body
   * @param {String} [data.message.html] The email message plain html body, if any
   * @param {String} [data.message.from] Overrides from message field, not recommended
   * @param {String} data.sender The sender account, if any
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  send: function (data) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.email.host,
      url: 'gateway/send',
      data: ['message', 'sender', 'token']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.email.gateway.template
   *
   * @param {Object} data The input object
   * @param {String} data.token The user access token
   * @param {String} [data.id] The template id
   * @param {String} [data.template] The template id
   * @param {Object} data.message The email message object
   * @param {String} data.message.to The email message destination
   * @param {String} data.message.subject The email message subject
   * @param {String} [data.message.text] The email message plain text body
   * @param {String} [data.message.html] The email message plain html body, if any
   * @param {String} [data.message.from] Overrides from message field, not recommended
   * @param {String} data.sender The sender account, if any
   * @param {String} data.base The base template account
   * @param {Object} data.locals The template locals
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  template: function (data) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.email.host,
      url: 'gateway/template',
      data: [
        'template', 'message', 'sender',
        'locals', 'token', 'base', 'id'
      ]
    }, data);
  }
};