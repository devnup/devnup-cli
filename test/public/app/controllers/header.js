app.controller('HeaderController', ['$scope', '$api', '$interval', function($scope, $api) {

    /* Controlling the manual refresh */
    $scope.updateData = function() {
        $api.refresh();
    }

}]);