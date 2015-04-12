/**
 * Created by luiseduardobrito on 4/12/15.
 */
var should = require('should');

describe('devnup', function () {

  var devnup = require('../../lib');

  describe('manager', function () {

    it('should have a valid interface for the Manager module', function () {
      devnup.should.have.property('manager');
      devnup.manager().should.be.ok;
    });

  });


});