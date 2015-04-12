var DEFAULT = require('./default.json');
var api = require('../api');

/**
 * @class
 * @author luiseduardobrito
 * @since 3/8/15.
 *
 * @type {Function}
 * @alias com.devnup.ws.api.util.devnup.email.gatewayUtil
 */
module.exports = {

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.email.groupUtil.send
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
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
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
   * @alias com.devnup.ws.api.util.devnup.email.groupUtil.template
   *
   * @param {Object} input The input object
   * @param {String} input.token The user access token
   * @param {String} [input.id] The template id
   * @param {String} [input.template] The template id
   * @param {Object} input.message The email message object
   * @param {String} input.message.to The email message destination
   * @param {String} input.message.subject The email message subject
   * @param {String} [input.message.text] The email message plain text body
   * @param {String} [input.message.html] The email message plain html body, if any
   * @param {String} [input.message.from] Overrides from message field, not recommended
   * @param {String} input.sender The sender account, if any
   * @param {String} input.base The base template account
   * @param {Object} input.locals The template locals
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
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