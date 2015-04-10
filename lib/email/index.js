/**
 * The Email API available modules.
 *
 * @class
 * @author luiseduardobrito
 * @since 2/13/15.
 *
 * @alias com.devnup.ws.api.util.devnup.email
 *
 * @property {Function|com.devnup.ws.api.util.devnup.email.senderUtil} sender The sender module interface
 * @property {Function|com.devnup.ws.api.util.devnup.email.groupUtil} group The group module interface
 * @property {Function|com.devnup.ws.api.util.devnup.email.recipientUtil} recipient The recipient module interface
 * @property {Function|com.devnup.ws.api.util.devnup.email.gatewayUtil} gateway The gateway module interface
 */
module.exports = {

  sender: function () {
    return require('./sender');
  },

  group: function () {
    return require('./group');
  },

  recipient: function () {
    return require('./recipient');
  },

  gateway: function () {
    return require('./gateway');
  }

};