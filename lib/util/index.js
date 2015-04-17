var fs = require('fs');
var tar = require('tar-fs');
var mv = require('mv');
var childProcess = require('child_process');

var verbose = false;

module.exports = {

  /**
   * Remove a file or a directory synchronously
   *
   * @static
   * @alias com.devnup.cli.lib.generateModule~remove
   *
   * @param {String} path The path to be removed
   */
  remove: function (path) {

    if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {

      fs.readdirSync(path).forEach(function (file) {

        var curPath = path + "/" + file;

        if (fs.lstatSync(curPath).isDirectory()) {
          remove(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });

      fs.rmdirSync(path);

    } else {
      fs.unlinkSync(path);
    }
  },

  /**
   * Move a whole file tree to another path asynchronously.
   *
   * @static
   * @alias com.devnup.cli.lib.generateModule~remove
   *
   * @param {String} source The path to be moved from
   * @param {String} destination The path to be moved to
   * @param {String} tmp The temporary path for the operation
   * @param {Function} callback The callback to the operation
   */
  move: function (source, destination, tmp, callback) {

    module.exports.remove(destination);

    console.log('Moving files to the specified directory: ' + destination);

    mv(source, destination, {
      mkdirp: true
    }, function (err) {

      if (err) {
        return console.error(err);
      }

      if (verbose) {
        console.log('Files moved successfully!');
      }

      module.exports.remove(tmp, callback);

    });
  },

  /**
   * Spawn a child command
   *
   * @param {String} cmd The command
   * @param {Function} callback The callback to the operation
   * @param {Boolean} v Verbose mode
   */
  spawn: function (cmd, callback, v) {

    if (v || verbose) {
      console.log('Spawning child process: ' + cmd);
    }

    var result = "";

    var c = childProcess.exec(cmd, function (error, stdout, stderr) {

      if (error || stderr) {

        if (v || verbose) {
          console.log('Error in chmod command: ' + (error || stderr));
        }

        return callback(error || stderr);
      }

      if (v || verbose) {
        console.log(stdout);
      }

      result += stdout;

    });

    c.on('exit', function (code) {

      if (v || verbose) {
        console.log('Child process exited with code: ' + code);
      }

      callback(null, result);

    });

  },

  /**
   * Spawn a child CHMOD command
   *
   * @param {String} target The target file full path
   * @param {String} params The params to the CHMOD command
   * @param {Function} callback The callback to the operation
   */
  chmod: function (target, params, callback, v) {
    return module
      .exports
      .spawn('chmod ' + (params || '') + ' ' + (target || ''), callback, v);
  },

  /**
   * Extract a *.tar file to a directory and inflate one of its sub-folders by its name.
   *
   * @static
   * @alias com.devnup.cli.lib.generateModule~untar
   *
   * @param {Object} input The input object
   * @param {String} input.name The directory to move the boilerplate
   * @param {String} input.target The target directory to extract to
   * @param {String} input.dir The directory to be inflated from the tar
   * @param {String} input.tmp The temporary directory for the move operation
   * @param {Boolean} input.verbose Verbose mode
   * @param {Function} callback The callback to the operation
   */
  untar: function (input, callback) {

    console.log('Extracting tar package...');

    fs.createReadStream(input.target)
      .pipe(tar.extract(input.tmp))
      .on('finish', function () {

        if (verbose || input.verbose) {
          console.log('Package extracted successfully!');
        }

        module.exports.remote(input.target);
        module.exports.move(input.tmp + '/' + input.dir, input.name, callback);
      })
  }
};