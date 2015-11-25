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
  elections: function(opts) {},

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
