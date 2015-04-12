/**
 * The Manager API available modules.
 *
 * @class
 * @author luiseduardobrito
 * @since 4/10/15
 *
 * @alias com.devnup.cli.lib.managerModule
 *
 * @property {Function|com.devnup.cli.lib.manager.journey} journey The journey module interface
 * @property {Function|com.devnup.cli.lib.manager.team} team The team module interface
 * @property {Function|com.devnup.cli.lib.manager.member} member The member module interface
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