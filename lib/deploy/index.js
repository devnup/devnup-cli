var DEFAULT = require('./default');

var fs = require('fs');
var path = require('path');
var util = require('../util');

var target = path.join(DEFAULT.tmp, DEFAULT.target || 'deploy.sh');

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
    var def = DEFAULT.scripts[platform.toLowerCase()];

    // Check package type is supported
    if (def.raw) {

      var file = fs.createWriteStream(target);
      console.log('Downloading deploy script from Gitlab...');

      http.get(def.raw, function (response) {

        response.pipe(file);

        file.on('finish', function () {

          if (verbose) {
            console.log('Script downloaded successfully: ' + target);
          }

          file.close(function () {

            if (verbose) {
              console.log('Running chmod on file to make it executable: ' + target);
            }

            util.chmod(target, '+x', callback, verbose);

          });
        });

      });
    }
  },

  run: function (callback, verbose) {

    console.log('Spawning child process: ' + target);

    if(verbose) {

      console.log('Spawning LS process for debug');

      util.spawn('ls -A', function (err, result) {
        console.log(err, result);
      });

    }

    util.spawn('. ' + target, function (err, result) {

      if (!err) {

        if (verbose) {
          console.log('Removing temporary build script:' + target);
        }

        util.remove(target);
      }

      callback(err, result);

    }, verbose);
  }

};