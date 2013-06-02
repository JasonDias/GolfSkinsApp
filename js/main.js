var app = angular.module("Skins", []);

function PlayerCtrl($scope) {
    $scope.players = [];
    $scope.skinValue = 1;
    $scope.birdieValue = 5;
    $scope.showPayouts=false;


    $scope.addPlayer = function(name){
        $scope.players.push({name: name, skins:0, birdies:0});
        $scope.playerName="";
    };

    $scope.addSkin = function(player) {
        player.skins++;
    };

    $scope.addBirdie = function(player) {
        player.birdies++;
    };
}