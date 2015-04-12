/**
 * Created by luiseduardobrito on 4/12/15.
 */
var should = require('should');
var pkg = require('../package.json');

describe('devnup', function () {

  var devnup = require('../lib');

  it('should have a valid interface for getting its current version', function () {
    devnup.should.have.property('version');
    devnup.version().should.equal(pkg.version);
  });

});
