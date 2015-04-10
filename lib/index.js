var pkg = require('../package.json');

/**
 * Devnup CLI Library
 *
 * @class
 * @type Function
 * @alias com.devnup.cli.lib
 * @author luiseduardobrito
 * @since 2/13/15.
 */
module.exports = {

  /**
   * Get library version
   *
   * @type Function
   * @returns {Function|String} The package version
   */
  version: function () {
    return pkg.version;
  },

  /**
   * Devnup Generator Module
   *
   * @type Function
   * @returns {exports|com.devnup.cli.lib.generate} The generator module.
   */
  generate: function () {
    return require('./generate');
  },

  /**
   * Devnup Manager Module
   *
   * @type Function
   * @returns {exports|com.devnup.cli.lib.manager} The manager module.
   */
  manager: function () {
    return require('./manager');
  },

  /**
   * Devnup Email Module
   *
   * @type Function
   * @returns {exports|com.devnup.cli.lib.email} The email module.
   */
  email: function () {
    return require('./email');
  }

};