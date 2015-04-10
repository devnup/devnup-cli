/**
 * The WS API available modules.
 *
 * @class
 * @author luiseduardobrito
 * @since 2/13/15.
 *
 * @alias com.devnup.cli.lib.ws
 *
 * @property {Function|com.devnup.cli.lib.ws.userUtil} user The user module interface
 * @property {Function|com.devnup.cli.lib.ws.companyUtil} company The company module interface
 * @property {Function|com.devnup.cli.lib.ws.projectUtil} project The project module interface
 */
module.exports = {

  user: function () {
    return require('./user');
  },

  company: function () {
    return require('./company');
  },

  project: function () {
    return require('./project');
  }

};