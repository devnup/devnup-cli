var DEFAULT = require('./default.json').manager;
var api = require('../api');

/**
 * @class
 * @type {Function}
 * @author luiseduardobrito
 * @alias com.devnup.cli.lib.manager.journey
 */
module.exports = {

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journey.me
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  me: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'journeys/me',
      data: ['token']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journey.create
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @param {String} data.team The journey team id
   * @param {String} data.project The journey project id
   * @param {String} data.description The journey description
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  create: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'journeys/me',
      data: ['token', 'team', 'project', 'description']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journey.edit
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @param {Number} data.id The journey id
   * @param {Date} data.start The journey start datetime
   * @param {Date} data.stop The journey stop datetime
   * @param {String} data.description The journey description
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  edit: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'journeys/edit',
      data: ['token', 'id', 'start', 'stop', 'description']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journey.list
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  list: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'journeys/list',
      data: ['token']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journey.active
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  active: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'journeys/active',
      data: ['token']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journey.find
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @param {Number} data.id The journey id
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  find: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'journeys/find',
      data: ['id', 'token']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journey.findByProject
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @param {ObjectId} data.project The journey project id
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  findByProject: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'journeys/findByProject',
      data: ['project', 'token', 'start', 'stop']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journey.stop
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @param {Number} data.id The journey id
   * @param {String} data.description The journey description
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  stop: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'journeys/stop',
      data: ['id', 'token', 'description']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journey.remove
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @param {Number} data.id The journey id
   * @returns {com.devnup.cli.lib.api.callback} The callback interface
   */
  remove: function (data) {
    return api.wrapper({
      method: 'POST',
      host: DEFAULT.host,
      url: 'journeys/find',
      data: ['id', 'token']
    }, data);
  }

};