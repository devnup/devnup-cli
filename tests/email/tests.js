/**
 * Created by luiseduardobrito on 4/12/15.
 */
var should = require('should');

describe('devnup', function () {

  var devnup = require('../../lib');

  describe('email', function () {

    it('should have a valid interface for the Email module', function () {
      devnup.should.have.property('email');
      devnup.email().should.be.ok;
    });

  });


});