var CivicSearch = require('../src/civic-search');
var expect = require('chai').expect;

// Setup our API request mocks
require('./mocks')();

describe('CivicSearch.elections', function() {

  it('returns a list of upcoming elections', function(done) {

    CivicSearch.elections()
    .then(function(data) {
      var vaPrimary = data.elections[1];
      var barringtonSchool = data.elections[3];

      expect(typeof data).to.equal('object');
      expect(data.elections.length).to.equal(4);

      expect(vaPrimary.id).to.equal('4167');
      expect(vaPrimary.name).to.equal('Virginia March Primary Election');
      expect(vaPrimary.date).to.equal('2016-03-01');

      expect(typeof vaPrimary.division).to.equal('object');
      expect(vaPrimary.division.state).to.equal('va');
      expect(vaPrimary.division.place).to.equal(null);

      expect(typeof barringtonSchool.division).to.equal('object');
      expect(barringtonSchool.division.state).to.equal('ri');
      expect(barringtonSchool.division.place).to.equal('barrington');

      done()
    }).catch(done);

  });

});
