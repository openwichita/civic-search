module.exports = {
  elections: function(electionData) {
    var returnData = { elections: [] };

    electionData = JSON.parse(electionData);

    electionData.elections.forEach(function(election) {
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

    return returnData;
  }
};
