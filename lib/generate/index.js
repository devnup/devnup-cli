/**
 * Created by luiseduardobrito on 4/10/15.
 */
var DEFAULT = require('./default');

var fs = require('fs');
var verbose = false;

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
 * @since 2/13/15.
 *
 * @alias com.devnup.cli.lib.generateModule
 */
module.exports = {

  download: function (type, name, callback, v) {

    var http = require('http');
    verbose = v || false;

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