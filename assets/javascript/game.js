
$(document).ready(function() {
    var crystalCollector = {
        currentScore: 0,
        numberGoal: Math.floor(Math.random() * 120) + 19,
        wins: 0,
        losses: 0,
        gemArray: [],

        pageSetup: function() {

            $("#randomNumberChoice").text(crystalCollector.numberGoal);
            $("#yourWins").text(crystalCollector.wins);
            $("#yourLosses").text(crystalCollector.losses);
            $("#yourCurrentScore").text(crystalCollector.currentScore);

            for (var i = 0; i < 4; i++) {
                crystalCollector.gemArray.push(Math.floor(Math.random() * 12) + 1);
            }
        },

        updatePage: function() {
            $("#randomNumberChoice").text(crystalCollector.numberGoal);
            $("#yourWins").text(crystalCollector.wins);
            $("#yourLosses").text(crystalCollector.losses);
            $("#yourCurrentScore").text(crystalCollector.currentScore);
        }
    }
    
    crystalCollector.pageSetup();

});