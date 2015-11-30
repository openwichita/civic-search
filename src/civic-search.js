var http = require('http');

module.exports = {
  /**
   * Get information on representatives based on address
   *
   * @param {string} opts.address - Address to search by
   * @param {object} [opts.levels] - Which levels of reps to include
   * @param {boolean} [opts.levels.city=true]
   * @param {boolean} [opts.levels.county=true]
   * @param {boolean} [opts.levels.state=true]
   * @param {boolean} [opts.levels.national=true]
   *
   * @returns {Promise}
   */
  reps: function(opts) {},

  /**
   * Get a list of upcoming elections
   *
   * @returns {Promise}
   */
  elections: function() {
    return new Promise(function(resolve, reject) {
      var urlBase = 'http://www.googleapis.com/civicinfo/v2/elections';
      var query = '?key=GETTHEAPIKEYFROMSOMEWHERE';

      var request = http.get(urlBase + query, function(res) {
        var data = '';

        res.setEncoding('utf8');
        res.on('data', function(chunk) { data += chunk; });

        res.on('end', function() {
          var returnData = { elections: [] };
          data = JSON.parse(data);

          data.elections.forEach(function(election) {
            var state = election.ocdDivisionId.match(/\/state:([a-z]+)/);
            var place = election.ocdDivisionId.match(/\/place:([a-z]+)/);

            if (state) state = state[1];
            if (place) place = place[1];

            returnData.elections.push({
              id: election.id,
              name: election.name,
              date: election.electionDay,
              division: { state: state, place: place }
            });
          });

          return resolve(returnData);
        });
      });

      request.on('error', reject);
    });
  },

  /**
   * Get information on polling and voting locations
   *
   * @param {string} opts.address - Address to search by
   *
   * @returns {Promise}
   */
  places: function(opts) {},

  /**
   * Get information on upcoming election contests
   *
   * @param {string} opts.address
   *
   * @returns {Promise}
   */
  contests: function(opts) {}

};
