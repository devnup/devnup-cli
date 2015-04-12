var DEFAULT = require('./default.json');
var api = require('../api');

/**
 * @class
 * @author luiseduardobrito
 *
 * @type {Function}
 * @alias com.devnup.cli.lib.ws.project
 */
module.exports = {

  /**
   * Create a new project.
   *
   * @static
   * @alias com.devnup.cli.lib.ws.project.create
   *
   * @param {Object} data The data object
   * @param {String} data.name The new project name
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  create: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'projects/create',
      data: ['name', 'token']
    }, data)
  },

  /**
   * Find a project by its id.
   *
   * @param {Object} data The object data
   * @param {String} data.id The project id
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  find: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'projects/find',
      data: ['id', 'token']
    }, data)
  },

  /**
   * Edit a project by its id.
   *
   * @param {Object} data The object data
   * @param {String} data.id The project id
   * @param {String} data.name The project name to be updated
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  edit: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'projects/edit',
      data: ['id', 'name', 'token']
    }, data)
  },

  /**
   * List all company projects.
   *
   * @param {Object} data The object data
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  list: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'projects/list',
      data: ['token']
    }, data)
  },

  /**
   * Remove a project by its id.
   *
   * @param {Object} data The object data
   * @param {String} data.id The project id
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  remove: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'projects/remove',
      data: ['id', 'token']
    }, data)
  }
};