/**
 * The WS API available modules.
 *
 * @class
 * @author luiseduardobrito
 * @since 2/13/15.
 *
 * @alias com.devnup.cli.lib.wsModule
 */
module.exports = {

  /**
   * @static
   * @type Function
   * @alias com.devnup.cli.lib.ws.user
   * @returns {Function|com.devnup.cli.lib.ws.user|exports} The user module
   */
  user: function () {
    return require('./user');
  },

  /**
   * @type Function
   * @alias com.devnup.cli.lib.ws.company
   * @returns {Function|com.devnup.cli.lib.ws.company|exports} The user module
   */
  company: function () {
    return require('./company');
  },

  /**
   * @type Function
   * @alias com.devnup.cli.lib.ws.project
   * @returns {Function|com.devnup.cli.lib.ws.project|exports} The user module
   */
  project: function () {
    return require('./project');
  }

};