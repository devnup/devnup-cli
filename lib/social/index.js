/**
 * The WS API available modules.
 *
 * @class
 * @author luiseduardobrito
 * @since 2/13/15.
 *
 * @alias com.devnup.cli.lib.socialModule
 *
 * @property {Function|com.devnup.cli.lib.social.facebookUtil} user The user module interface
 * @property {Function|com.devnup.cli.lib.social.twitterUtil} company The company module interface
 * @property {Function|com.devnup.cli.lib.social.instagramUtil} project The project module interface
 */
module.exports = {

  facebook: function () {
    return require('./facebook');
  },

  twitter: function () {
    return require('./twitter');
  },

  instagram: function () {
    return require('./instagram');
  }

};