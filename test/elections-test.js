var CivicSearch = require('../src/civic-search');

var assert = require('assert');

// Setup our API request mocks
require('./mocks')();

describe('CivicSearch.elections', function() {

  it('returns a list of upcoming elections', function(done) {

    CivicSearch.elections()
    .then(function(data) {
      var vaPrimary = data.elections[1];
      var barringtonSchool = data.elections[3];

      assert(typeof data === 'object');
      assert(data.elections.length === 4);

      assert(vaPrimary.id === '4167');
      assert(vaPrimary.name === 'Virginia March Primary Election');
      assert(vaPrimary.date === '2016-03-01');

      assert(typeof vaPrimary.division === 'object');
      assert(vaPrimary.division.state === 'va');
      assert(vaPrimary.division.place === null);

      assert(typeof barringtonSchool.division === 'object');
      assert(barringtonSchool.division.state === 'ri');
      assert(barringtonSchool.division.place === 'barrington');

      done()
    }).catch(done);

  });

});
