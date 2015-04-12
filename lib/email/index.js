/**
 * The Email API available modules.
 *
 * @class
 * @author luiseduardobrito
 * @since 2/13/15.
 *
 * @alias com.devnup.cli.lib.emailModule
 *
 * @property {Function|com.devnup.cli.lib.email.senderWrapper} sender The sender module interface
 * @property {Function|com.devnup.cli.lib.email.groupWrapper} group The group module interface
 * @property {Function|com.devnup.cli.lib.email.recipientWrapper} recipient The recipient module interface
 * @property {Function|com.devnup.cli.lib.email.gatewayWrapper} gateway The gateway module interface
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