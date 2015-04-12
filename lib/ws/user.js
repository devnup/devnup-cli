var DEFAULT = require('./default.json');
var api = require('../api');

/**
 * Created by luiseduardobrito on 2/19/15.
 */
module.exports = {

  me: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'users/me',
      data: ['token']
    }, data)
  },

  login: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'users/login',
      data: ['email', 'password']
    }, data)
  },

  logout: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'users/logout',
      data: ['token']
    }, data)
  },

  reset: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'users/reset',
      data: ['email']
    }, data)
  },

  password: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'users/password',
      data: ['password', 'token']
    }, data)
  },

  list: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'users/list',
      data: ['token']
    }, data)
  },

  create: function (data) {
    return api.wrapper({
      method: 'POST',
      url: 'users/create',
      data: ['name', 'email', 'password', 'job', 'token']
    }, data)
  }
};