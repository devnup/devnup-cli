/**
 * The Email API available modules.
 *
 * @class
 * @author luiseduardobrito
 * @since 4/10/15
 *
 * @alias com.devnup.cli.lib.emailModule
 *
 * @property {Function|com.devnup.cli.lib.email.sender} sender The sender module interface
 * @property {Function|com.devnup.cli.lib.email.group} group The group module interface
 * @property {Function|com.devnup.cli.lib.email.recipient} recipient The recipient module interface
 * @property {Function|com.devnup.cli.lib.email.gateway} gateway The gateway module interface
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