/**
 * The Manager API available modules.
 *
 * @class
 * @author luiseduardobrito
 * @since 2/13/15.
 *
 * @alias com.devnup.ws.api.util.devnup.manager
 *
 * @property {Function|com.devnup.ws.api.util.devnup.manager.journeyUtil} journey The journey module interface
 * @property {Function|com.devnup.ws.api.util.devnup.manager.teamUtil} team The team module interface
 * @property {Function|com.devnup.ws.api.util.devnup.manager.memberUtil} member The member module interface
 */
module.exports = {

  journey: function () {
    return require('./journey');
  },

  team: function () {
    return require('./team');
  },

  member: function () {
    return require('./member');
  }

};