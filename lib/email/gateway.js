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
   * @param {Object} input The input object
   * @param {String} input.token The user access token
   * @param {Object} input.message The email message object
   * @param {String} input.message.to The email message destination
   * @param {String} input.message.subject The email message subject
   * @param {String} [input.message.text] The email message plain text body
   * @param {String} [input.message.html] The email message plain html body, if any
   * @param {String} [input.message.from] Overrides from message field, not recommended
   * @param {String} input.sender The sender account, if any
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  send: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.email.host,
      url: 'gateway/send',
      data: {
        message: input.message,
        sender: input.sender,
        token: input.token
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.email.groupUtil.template
   *
   * @param {Object} input The input object
   * @param {String} input.token The user access token
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
  template: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.email.host,
      url: 'gateway/template',
      data: {
        message: input.message,
        sender: input.sender,
        locals: input.locals,
        token: input.token,
        base: input.base
      }
    });
  }
};