/**
 * The WS API available modules.
 *
 * @class
 * @author luiseduardobrito
 * @since 2/13/15.
 *
 * @alias com.devnup.cli.lib.wsModule
 *
 * @property {Function|com.devnup.cli.lib.ws.company} company The company module interface
 * @property {Function|com.devnup.cli.lib.ws.domain} domain The domain module interface
 * @property {Function|com.devnup.cli.lib.ws.user} user The user module interface
 * @property {Function|com.devnup.cli.lib.ws.project} project The project module interface
 */
module.exports = {

  company: function () {
    return require('./company');
  },

  domain: function () {
    return require('./domain');
  },

  user: function () {
    return require('./user');
  },

  project: function () {
    return require('./project');
  }

};