var nock = require('nock');

// Set ENV var for GOOGLE_API_KEY
var API_KEY = 'TESTAPIKEY';
process.env.GOOGLE_API_KEY = API_KEY;

module.exports = function() {
  /**
   * Mock HTTP responses from the Civic Info API
   */
  nock('http://www.googleapis.com/civicinfo/v2')
  .get('/elections')
  .query({ key: API_KEY })
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
};
