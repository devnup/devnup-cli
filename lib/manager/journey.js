/**
 * Created by luiseduardobrito on 2/13/15.
 */
var DEFAULT = require('./default.json');
var api = require('../api');

/**
 * @class
 * @author luiseduardobrito
 * @since 2/13/15.
 *
 * @type {Function}
 * @alias com.devnup.cli.lib.manager.journeyUtil
 */
module.exports = {

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.me
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  me: function (data) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/me',
      data: ['token']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.journeyUtil.create
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @param {String} data.team The journey team id
   * @param {String} data.project The journey project id
   * @param {String} data.description The journey description
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  create: function (data) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/me',
      data: ['token', 'team', 'project', 'description']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.edit
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @param {Number} data.id The journey id
   * @param {Date} data.start The journey start datetime
   * @param {Date} data.stop The journey stop datetime
   * @param {String} data.description The journey description
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  edit: function (data) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/edit',
      data: ['token', 'id', 'start', 'stop', 'description']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.list
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  list: function (data) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/list',
      data: ['token']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.active
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  active: function (data) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/active',
      data: ['token']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.find
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @param {Number} data.id The journey id
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  find: function (data) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/find',
      data: ['id', 'token']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.findByProject
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @param {ObjectId} data.project The journey project id
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  findByProject: function (data) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/findByProject',
      data: ['project', 'token', 'start', 'stop']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.stop
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @param {Number} data.id The journey id
   * @param {String} data.description The journey description
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  stop: function (data) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/stop',
      data: ['id', 'token', 'description']
    }, data);
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.remove
   *
   * @param {{}} data The data object
   * @param {String} data.token The user access token
   * @param {Number} data.id The journey id
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  remove: function (data) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/find',
      data: ['id', 'token']
    }, data);
  }

};