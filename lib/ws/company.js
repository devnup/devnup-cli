/**
 * Created by luiseduardobrito on 2/19/15.
 */
var DEFAULT = require('./default.json');
var api = require('../api');

/**
 * @class
 * @author luiseduardobrito
 *
 * @type {Function}
 * @alias com.devnup.cli.lib.ws.company
 */
module.exports = {

  me: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'companies/me',
      data: ['token']
    }, data)
  },

  create: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'companies/create',
      data: ['name', 'email', 'token']
    }, data)
  },

  find: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'companies/find',
      data: ['id', 'token']
    }, data)
  },

  remove: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'companies/remove',
      data: ['id', 'token']
    }, data)
  }
};