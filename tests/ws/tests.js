/**
 * Created by luiseduardobrito on 4/12/15.
 */
var should = require('should');

describe('devnup', function () {

  var devnup = require('../../lib');

  describe('ws', function () {

    it('should have a valid interface for the WS module', function () {
      devnup.should.have.property('ws');
      devnup.ws().should.be.ok;
    });

  });


});