/**
 * QueryBuilder
 *
 * Utility for constructing URLs for API requests to the Google Civic Info API.
 * Namespaced by resource and action performed on that resource.
 */

var urlBase = 'http://www.googleapis.com/civicinfo/v2/';

module.exports = {

  elections: {
    /**
     * @returns {string}
     */
    index: function() {
      var url = urlBase + 'elections';
      var query = '?key=GETTHEAPIKEYFROMSOMEWHERE';

      return url + query;
    }
  }

}
