/**
 * Created by luiseduardobrito on 4/12/15.
 */
var should = require('should');

describe('devnup', function () {

  var devnup = require('../../lib');

  describe('generate', function () {

    it('should have a valid interface for the Generate module', function () {
      devnup.should.have.property('generate');
      devnup.generate().should.be.ok;
    });

  });


});