// make politician object for each candidate
var makePolitician = function(candidateName, partyColour) {
  var politician = {};
    politician.name = candidateName;
    politician.results = null;
    politician.totalVotes = 0;
    politician.colour = partyColour;
    politician.tallyVotes = function() {
      this.totalVotes = 0;
      for (var i = 0; i < this.results.length; i++) {
        this.totalVotes = this.totalVotes + this.results[i];
      }
    return this.totalVotes;
    };

    return politician;
};

var setStateResults = function (state) {
  theStates[state].winner = null;

  // determines state winner and assigns candidate object to the winner property
  if (SusanBAnthony.results[state] > IdaWells.results[state]) {
    theStates[state].winner = SusanBAnthony;
  } else if (SusanBAnthony.results[state] < IdaWells.results[state]) {
    theStates[state].winner = IdaWells;
  }

  var stateWinner = theStates[state].winner;
  // sets state colour on hover
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.colour;
  } else {
    theStates[state].rgbColor = [11,32,57];
  }

  var stateInfoTable = document.getElementById("stateResults");
  var stateHeader = stateInfoTable.children[0].children[0];
  var stateBody = stateInfoTable.children[1];

  var stateName = stateHeader.children[0];
  var stateAbbr = stateHeader.children[1];
  var candidate1Name = stateBody.children[0].children[0];
  var candidate1Result = stateBody.children[0].children[1];
  var candidate2Name = stateBody.children[1].children[0];
  var candidate2Result = stateBody.children[1].children[1];
  var stateWinnerName = stateBody.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbbr.innerText = "(" + theStates[state].nameAbbrev + ")";
  candidate1Name.innerText = SusanBAnthony.name;
  candidate1Result.innerText = SusanBAnthony.results[state];
  candidate2Name.innerText = IdaWells.name;
  candidate2Result.innerText = IdaWells.results[state];

  // calculates state results
  if (SusanBAnthony.results[state] > IdaWells.results[state]) {
    stateWinnerName.innerText = SusanBAnthony.name;
  } else if (IdaWells.results[state] > SusanBAnthony.results[state] ) {
    stateWinnerName.innerText = IdaWells.name;
  } else {
    stateWinnerName.innerText = "It's a DRAW"
  }
}

var SusanBAnthony = makePolitician("Susan B Anthony", [132, 17, 11]);
SusanBAnthony.results = [4,	2, 4, 4, 22, 3, 3, 1, 2, 15, 8,	1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

// creates two candidates, including their results from each state
var IdaWells = makePolitician("Ida B. Wells-Barnett", [245, 141, 136]);
IdaWells.results = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 1, 1, 3, 7, 2];

// tallies total votes for each candidate
IdaWells.totalVotes = IdaWells.tallyVotes();
SusanBAnthony.totalVotes = SusanBAnthony.tallyVotes();

var winner

// calculates country results
if (SusanBAnthony.totalVotes > IdaWells.totalVotes) {
  winner = SusanBAnthony.name;
} else if (IdaWells.totalVotes > SusanBAnthony.totalVotes ) {
  winner = IdaWells.name;
} else {
  winner = "It's a DRAW"
};

// populates country table
var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];
row.children[0].innerText = SusanBAnthony.name;
row.children[1].innerText = SusanBAnthony.totalVotes;
row.children[2].innerText = IdaWells.name;
row.children[3].innerText = IdaWells.totalVotes;
row.children[5].innerText = winner;
