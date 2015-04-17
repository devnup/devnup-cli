var DEFAULT = require('./default');

var fs = require('fs');
var path = require('path');
var util = require('../util');

/**
 * The Deploy module for Devnup CI
 *
 * @class
 * @author luiseduardobrito
 * @since 4/10/15
 *
 * @alias com.devnup.cli.lib.deployModule
 */
module.exports = {

  /**
   * @static
   * @alias com.devnup.cli.lib.deployModule.download
   *
   * @param {String} platform The platform, defined in ```deploy/default.json```.
   * @param {Function} callback The callback to the download operation
   * @param {Boolean} [verbose] Verbose logging mode (called by the cli). Default: false
   */
  download: function (platform, callback, verbose) {

    var http = require('http');

    var target = path.join(DEFAULT.tmp, DEFAULT.target || 'deploy.sh');
    var def = DEFAULT.scripts[platform.toLowerCase()];

    // Check package type is supported
    if (def.raw) {

      var file = fs.createWriteStream(target);
      console.log('Downloading deploy script from Gitlab...');

      http.get(def.raw, function (response) {

        response.pipe(file);

        file.on('finish', function () {

          if (verbose) {
            console.log('Script downloaded successfully!');
          }

          file.close(function () {

            if (verbose) {
              console.log('Running chmod on file to make it executable...');
            }

            util.chmod(target, '+x', callback, verbose);

          });
        });

      });
    }
  },

  run: function (callback, verbose) {

    var target = path.join(DEFAULT.tmp, DEFAULT.target || 'deploy.sh');

    util.spawn('. ' + target, function (err, result) {

      if (!err) {

        if (verbose) {
          console.log('Removing temporary build script...');
        }

        util.remove(target);
      }

      callback(err, result);

    }, verbose);
  }

};