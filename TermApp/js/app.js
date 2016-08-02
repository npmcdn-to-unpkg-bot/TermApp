(function() {
    var myApp = angular.module('myApp', ['ui.materialize']);
    myApp.controller('MessageController', ["$scope", function($scope) {
        // input field
        $scope.textField = "";
        // term lists
        $scope.positive = [{
            text: "",
            select: null,
        }];
        $scope.negative = [{
            text: "",
            select: null,
        }];
        // term object
        $scope.term = [{
            text: "",
            select: null,
        }];
        // reset values
        $scope.reset = function() {
            $scope.textField = "";
            $scope.term.select = "";
        };
        // add term
        $scope.submit = function() {
            $scope.term.push({
                text: $scope.textField,
            });
            if ($scope.term.select !== false) {
                $scope.positive.push({
                    text: $scope.textField,
                    select: true
                });
            } else {
                $scope.negative.push({
                    text: $scope.textField,
                    select: false
                });
            }
            $scope.reset();
        };
        // show term in the input field, and type in select option
        $scope.show = function(event) {
            $scope.textField = event.target.id;
            var temp = $scope.textField;
            for (var i in $scope.positive) {
                if (temp == $scope.positive[i].text) {
                    return $scope.term.select = true;
                }
            }
            for (var j in $scope.negative) {
                if (temp == $scope.negative[j].text) {
                    return $scope.term.select = false;
                }
            }
        };

    }]);

})();
