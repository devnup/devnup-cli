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
   * Devnup Email Module
   *
   * @type Function
   * @returns {exports|com.devnup.cli.lib.emailModule} The email module.
   */
  email: function () {
    return require('./email');
  },

  /**
   * Devnup Deploy Module
   *
   * @type Function
   * @returns {exports|com.devnup.cli.lib.deployModule} The deploy module.
   */
  deploy: function () {
    return require('./deploy');
  },

  /**
   * Devnup Generator Module
   *
   * @type Function
   * @returns {exports|com.devnup.cli.lib.generateModule} The generator module.
   */
  generate: function () {
    return require('./generate');
  },

  /**
   * Devnup Manager Module
   *
   * @type Function
   * @returns {exports|com.devnup.cli.lib.managerModule} The manager module.
   */
  manager: function () {
    return require('./manager');
  },

  /**
   * Devnup Social Module
   *
   * @type Function
   * @returns {exports|com.devnup.cli.lib.socialModule} The social module.
   */
  social: function () {
    return require('./social');
  },

  /**
   * Devnup Util Module
   *
   * @type Function
   * @returns {exports|com.devnup.cli.lib.utilModule} The util module.
   */
  util: function () {
    return require('./util');
  },

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
   * Devnup WS Module
   *
   * @type Function
   * @returns {exports|com.devnup.cli.lib.wsModule} The ws module.
   */
  ws: function () {
    return require('./ws');
  }

};