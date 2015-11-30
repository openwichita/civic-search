var CivicSearch = require('../src/civic-search');

var assert = require('assert');
var nock = require('nock');

/**
 * Mock HTTP responses from the Civic Info API
 */
nock('http://www.googleapis.com/civicinfo/v2')
.get('/elections').query(true)
.reply(200, {
   "kind": "civicinfo#electionsQueryResponse",
   "elections": [
    {
     "id": "2000",
     "name": "VIP Test Election",
     "electionDay": "2017-06-06",
     "ocdDivisionId": "ocd-division/country:us"
    },
    {
     "id": "4167",
     "name": "Virginia March Primary Election",
     "electionDay": "2016-03-01",
     "ocdDivisionId": "ocd-division/country:us/state:va"
    },
    {
     "id": "4168",
     "name": "Rhode Island Senate 11 Primary Election",
     "electionDay": "2015-12-01",
     "ocdDivisionId": "ocd-division/country:us/state:ri"
    },
    {
     "id": "4169",
     "name": "Rhode Island Barrington School Election",
     "electionDay": "2015-12-15",
     "ocdDivisionId": "ocd-division/country:us/state:ri/place:barrington"
    }
   ]
});

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
