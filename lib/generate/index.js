var DEFAULT = require('./default');

var fs = require('fs');
var verbose = false;

/**
 * Extract a *.tar file to a directory and inflate one of its sub-folders by its name.
 *
 * @static
 * @alias com.devnup.cli.lib.generateModule~untar
 *
 * @param {String} file The file to be extracted. Needs to be a *.tar file.
 * @param {String} target The target directory to extract to
 * @param {String} dir The directory to be inflated from the tar
 * @param {Function} callback The callback to the operation
 */
var untar = function (file, target, dir, callback) {

  console.log('Extracting tar package...');
  var tar = require('tar-fs');

  fs
    .createReadStream(file)
    .pipe(tar.extract(DEFAULT.tmp))
    .on('finish', function () {

      if (verbose) {
        console.log('Package extracted successfully!');
      }

      fs.unlinkSync(file);
      move(DEFAULT.tmp + '/' + dir, target, callback);
    })
};

/**
 * Move a whole file tree to another path asynchronously.
 *
 * @static
 * @alias com.devnup.cli.lib.generateModule~remove
 *
 * @param {String} source The path to be moved from
 * @param {String} destination The path to be moved to
 * @param {Function} callback The callback to the operation
 */
var move = function (source, destination, callback) {

  remove(destination);
  var mv = require('mv');

  console.log('Moving files to specified directory: ' + destination);

  mv(source, destination, {
    mkdirp: true
  }, function (err) {

    if (err) {
      return console.error(err);
    }

    if (verbose) {
      console.log('Files moved successfully!');
    }

    remove(DEFAULT.tmp, callback);

  });

};

/**
 * Remove a file or a directory synchronously
 *
 * @static
 * @alias com.devnup.cli.lib.generateModule~remove
 *
 * @param {String} path The path to be removed
 */
var remove = function (path) {

  if (fs.existsSync(path)) {

    fs.readdirSync(path).forEach(function (file) {

      var curPath = path + "/" + file;

      if (fs.lstatSync(curPath).isDirectory()) {
        remove(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });

    fs.rmdirSync(path);
  }
};

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
            untar(target, name || def.dir, def.dir, callback);
          });
        });

      });
    }
  }

};