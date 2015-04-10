/**
 * Created by luiseduardobrito on 2/13/15.
 */
module.exports = {
  generate: function () {
    return require('./generate');
  },
  manager: function () {
    return require('./manager');
  },
  email: function () {
    return require('./email');
  }
};