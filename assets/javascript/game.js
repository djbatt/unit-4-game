
$(document).ready(function() {
    var crystalCollector = {
        currentScore: 0,
        numberGoal: Math.floor(Math.random() * 120) + 19,
        crystalValue,
        wins: 0,
        losses: 0,

        pageSetup: function() {
            $("#randomNumberChoice").text(crystalCollector.numberGoal);
            $("#yourWins").text(crystalCollector.wins);
            $("#yourLosses").text(crystalCollector.losses);
            $("#yourCurrentScore").text(crystalCollector.currentScore);
        },

        userGuess: function() {
            var crystalValue = Math.floor(Math.random() * 12) + 1;
            console.log(crystalValue);
        }
    }

    crystalCollector.pageSetup()
});