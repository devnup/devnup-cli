/**
 * Created by luiseduardobrito on 4/12/15.
 */
var should = require('should');

describe('devnup', function () {

  var devnup = require('../../lib');

  describe('social', function () {

    it('should have a valid interface for the Social module', function () {
      devnup.should.have.property('social');
      devnup.social().should.be.ok;
    });

  });


});