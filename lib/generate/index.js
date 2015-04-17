var DEFAULT = require('./default');

var fs = require('fs');
var util = require('../util');
var verbose = false;


/**
 * The Generator module for Devnup Boilerplates.
 *
 * @class
 * @author luiseduardobrito
 * @since 4/10/15
 *
 * @alias com.devnup.cli.lib.generateModule
 */
module.exports = {

  /**
   * @static
   * @alias com.devnup.cli.lib.generateModule.download
   *
   * @param {String} type The boilerplate type, defined in ```generate/default.json```.
   * @param {String} name The boilerplate directory name to be extracted to
   * @param {String} callback The callback to the download operation
   * @param {Boolean} [verbose] Verbose logging mode (called by the cli). Default: false
   */
  download: function (type, name, callback, verbose) {

    var http = require('http');
    verbose = verbose || false;

    var target = 'archive.tar';
    var def = DEFAULT.packages[type.toLowerCase()];

    // Check package type is supported
    if (def.url) {

      var file = fs.createWriteStream(target);
      console.log('Downloading package from Gitlab...');

      http.get(def.url, function (response) {

        response.pipe(file);

        file.on('finish', function () {

          if (verbose) {
            console.log('Package downloaded successfully!');
          }

          file.close(function () {
            util.untar({
              target: target,
              name: name || def.dir,
              dir: def.dir,
              tmp: DEFAULT.tmp
            }, callback);
          });
        });

      });
    }
  }

};