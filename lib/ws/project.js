/**
 * Created by luiseduardobrito on 2/19/15.
 */
var DEFAULT = require('./default.json');
var api = require('../api');

module.exports = {

  create: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'projects/create',
      data: ['name', 'token']
    }, data)
  },

  find: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'projects/find',
      data: ['id', 'token']
    }, data)
  },

  edit: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'projects/edit',
      data: ['id', 'name', 'token']
    }, data)
  },

  list: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'projects/list',
      data: ['token']
    }, data)
  },

  remove: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'projects/remove',
      data: ['id', 'token']
    }, data)
  }
};