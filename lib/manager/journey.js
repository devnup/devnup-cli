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
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  me: function (input) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/me',
      data: ['token']
    });
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.journeyUtil.create
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {String} input.team The journey team id
   * @param {String} input.project The journey project id
   * @param {String} input.description The journey description
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  create: function (input) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/me',
      data: ['token', 'team', 'project', 'description']
    });
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.edit
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {Number} input.id The journey id
   * @param {Date} input.start The journey start datetime
   * @param {Date} input.stop The journey stop datetime
   * @param {String} input.description The journey description
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  edit: function (input) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/edit',
      data: ['token', 'id', 'start', 'stop', 'description']
    });
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.list
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  list: function (input) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/list',
      data: ['token']
    });
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.active
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  active: function (input) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/active',
      data: ['token']
    });
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.find
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {Number} input.id The journey id
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  find: function (input) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/find',
      data: ['id', 'token']
    });
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.findByProject
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {ObjectId} input.project The journey project id
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  findByProject: function (input) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/findByProject',
      data: ['project', 'token', 'start', 'stop']
    });
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.stop
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {Number} input.id The journey id
   * @param {String} input.description The journey description
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  stop: function (input) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/stop',
      data: ['id', 'token', 'description']
    });
  },

  /**
   * @static
   * @alias com.devnup.cli.lib.manager.journeyUtil.remove
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {Number} input.id The journey id
   * @returns com.devnup.cli.lib.api.callback The callback interface
   */
  remove: function (input) {
    return api.wrapper({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/find',
      data: ['id', 'token']
    });
  }

};