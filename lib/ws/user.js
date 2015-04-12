var DEFAULT = require('./default.json');
var api = require('../api');

/**
 * @class
 * @author luiseduardobrito
 *
 * @type {Function}
 * @alias com.devnup.cli.lib.ws.user
 */
module.exports = {

  /**
   * Gets current logged in user based on access token.
   *
   * @static
   * @alias com.devnup.cli.lib.ws.user.me
   *
   * @param {Object} data The data object
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  me: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'users/me',
      data: ['token']
    }, data)
  },

  /**
   * Login user using email and password combination.
   *
   * @static
   * @alias com.devnup.cli.lib.ws.user.login
   *
   * @param {Object} data The data object
   * @param {String} data.email The user email
   * @param {String} data.password The user password
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  login: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'users/login',
      data: ['email', 'password']
    }, data)
  },

  /**
   * Logout current logged in user based on access token.
   *
   * @static
   * @alias com.devnup.cli.lib.ws.user.logout
   *
   * @param {Object} data The data object
   * @param {String} data.email The user email
   * @param {String} data.password The user password
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  logout: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'users/logout',
      data: ['token']
    }, data)
  },

  /**
   * Reset user password based on email.
   *
   * @static
   * @alias com.devnup.cli.lib.ws.user.reset
   *
   * @param {Object} data The data object
   * @param {String} data.email The user email
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  reset: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'users/reset',
      data: ['email']
    }, data)
  },

  /**
   * Set new user password based on reset token sent via email.
   *
   * @static
   * @alias com.devnup.cli.lib.ws.user.reset
   *
   * @param {Object} data The data object
   * @param {String} data.email The user email
   * @param {String} data.token The reset token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  password: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'users/password',
      data: ['password', 'token']
    }, data)
  },

  /**
   * Gets user list.
   *
   * @static
   * @alias com.devnup.cli.lib.ws.user.list
   *
   * @param {Object} data The data object
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  list: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'users/list',
      data: ['token']
    }, data)
  },

  /**
   * Create a new user.
   *
   * @static
   * @alias com.devnup.cli.lib.ws.user.list
   *
   * @param {Object} data The data object
   * @param {String} data.name The new user name
   * @param {String} data.email The new user email
   * @param {String} data.password The new user password
   * @param {Object} [data.job] The new user job
   * @param {String} [data.job.role] The new user role. Default: client
   * @param {String} [data.job.company] The new user company. Default: access token company
   * @param {String} data.token The access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  create: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'users/create',
      data: ['name', 'email', 'password', 'job', 'token']
    }, data)
  }
};