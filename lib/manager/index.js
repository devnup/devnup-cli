/**
 * The Manager API available modules.
 *
 * @class
 * @author luiseduardobrito
 * @since 2/13/15.
 *
 * @alias com.devnup.cli.lib.managerModule
 *
 * @property {Function|com.devnup.cli.lib.manager.journeyUtil} journey The journey module interface
 * @property {Function|com.devnup.cli.lib.manager.teamUtil} team The team module interface
 * @property {Function|com.devnup.cli.lib.manager.memberUtil} member The member module interface
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