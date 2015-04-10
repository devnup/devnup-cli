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
 * @alias com.devnup.ws.api.util.devnup.manager.journeyUtil
 */
module.exports = {

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.manager.journeyUtil.me
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  me: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/me',
      data: {
        token: input.token
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.manager.journeyUtil.create
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {String} input.team The journey team id
   * @param {String} input.project The journey project id
   * @param {String} input.description The journey description
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  create: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/me',
      data: {
        token: input.token,
        team: input.team,
        project: input.project,
        description: input.description
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.manager.journeyUtil.edit
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {Number} input.id The journey id
   * @param {Date} input.start The journey start datetime
   * @param {Date} input.stop The journey stop datetime
   * @param {String} input.description The journey description
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  edit: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/edit',
      data: {
        token: input.token,
        id: input.id,
        start: input.start,
        stop: input.stop,
        description: input.description
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.manager.journeyUtil.list
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  list: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/list',
      data: {
        token: input.token
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.manager.journeyUtil.active
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  active: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/active',
      data: {
        token: input.token
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.manager.journeyUtil.find
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {Number} input.id The journey id
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  find: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/find',
      data: {
        id: input.id,
        token: input.token
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.manager.journeyUtil.findByProject
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {ObjectId} input.project The journey project id
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  findByProject: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/findByProject',
      data: {
        project: input.project,
        token: input.token,
        start: input.start,
        stop: input.stop
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.manager.journeyUtil.stop
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {Number} input.id The journey id
   * @param {String} input.description The journey description
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  stop: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/stop',
      data: {
        id: input.id,
        token: input.token,
        description: input.description
      }
    });
  },

  /**
   * @static
   * @alias com.devnup.ws.api.util.devnup.manager.journeyUtil.remove
   *
   * @param {{}} input The input object
   * @param {String} input.token The user access token
   * @param {Number} input.id The journey id
   * @returns com.devnup.ws.api.util.devnup.api.callback The callback interface
   */
  remove: function (input) {
    return api({
      method: 'POST',
      base_url: DEFAULT.manager.host,
      url: 'journeys/find',
      data: {
        id: input.id,
        token: input.token
      }
    });
  }

};