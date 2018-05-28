
$(document).ready(function() {
    var crystalCollector = {
        currentScore: 0,
        numberGoal: 0,
        wins: 0,
        losses: 0,
        gemArray: [],

        pageSetup: function() {
            crystalCollector.gemArray = [];
            crystalCollector.currentScore = 0;
            crystalCollector.numberGoal = Math.floor(Math.random() * 120) + 19;

            $(".alert").text("");
            $("#randomNumberChoice").text(crystalCollector.numberGoal);
            $("#yourWins").text(crystalCollector.wins);
            $("#yourLosses").text(crystalCollector.losses);
            $("#yourCurrentScore").text(crystalCollector.currentScore);

            for (var i = 0; i < 4; i++) {
                crystalCollector.gemArray.push(Math.floor(Math.random() * 12) + 1);
            }

            console.log(crystalCollector.gemArray);
        },

        updatePage: function() {
            $("#randomNumberChoice").text(crystalCollector.numberGoal);
            $("#yourWins").text(crystalCollector.wins);
            $("#yourLosses").text(crystalCollector.losses);
            $("#yourCurrentScore").text(crystalCollector.currentScore);
        },

        checkWin: function() {
            if (crystalCollector.currentScore === crystalCollector.numberGoal) {
                crystalCollector.wins++
                crystalCollector.pageSetup();
            }

            else if (crystalCollector.currentScore > crystalCollector.numberGoal) {
                crystalCollector.losses++
                crystalCollector.pageSetup();
            }
        },

        userGuess: function() {
            $(".sapphire").click(function () {
                var crystal = crystalCollector.gemArray[0];
                crystalCollector.currentScore = crystalCollector.currentScore + crystalCollector.gemArray[0];
                $(".alert-primary").text(crystalCollector.gemArray[0]);

                crystalCollector.updatePage();
                crystalCollector.checkWin();
            });
            $(".ruby").click(function () {
                var crystal = crystalCollector.gemArray[1];
                crystalCollector.currentScore = crystalCollector.currentScore + crystalCollector.gemArray[1];
                $(".alert-danger").text(crystalCollector.gemArray[1]);

                crystalCollector.updatePage();
                crystalCollector.checkWin();
            });
            $(".emerald").click(function () {
                var crystal = crystalCollector.gemArray[2];
                crystalCollector.currentScore = crystalCollector.currentScore + crystalCollector.gemArray[2];
                $(".alert-success").text(crystalCollector.gemArray[2]);

                crystalCollector.updatePage();
                crystalCollector.checkWin();
            });
            $(".diamond").click(function () {
                var crystal = crystalCollector.gemArray[3];
                crystalCollector.currentScore = crystalCollector.currentScore + crystalCollector.gemArray[3];
                $(".alert-info").text(crystalCollector.gemArray[3]);

                crystalCollector.updatePage();
                crystalCollector.checkWin();
            });
        }
    }
    
    crystalCollector.userGuess();
    crystalCollector.pageSetup();

});