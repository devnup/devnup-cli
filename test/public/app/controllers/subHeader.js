app.controller('SubHeaderController', ['$scope', '$api', '$interval', function($scope, $api, $interval) {

    var totalSeconds = 1;
    var data = {
        lastUpdate: null,
        data: null
    };

    $scope.uptimePercentage = 0;
    $scope.status = '-';
    $scope.timeout = {};
    $scope.requests = {};

    $scope.$watch(function(){
        return ($api.getResume().lastUpdate !== data.lastUpdate && $api.getResume().lastUpdate !== null);
    }, function(){
        data = $api.getResume();
        if(data.lastUpdate) {
            totalSeconds = 1;
            if(data.data) {
                $scope.status = 'Online';
                if(data.data && data.data.uptime.avg * 100 !==  $scope.uptimePercentage) {
                    $scope.uptimePercentage = data.data.uptime.avg * 100;
                }
                $scope.timeout = data.data.timeout;
                if($scope.timeout.min == null) {
                    $scope.timeout.min = 0;
                }
                $scope.requests.errors = data.data.errors;
                $scope.requests.success = data.data.count - data.data.errors;
            } else {
                $scope.status = 'Offline';
            }
        }
    });

    $scope.timeMessage = "Updated just now";
    $scope.timeUpdate = $interval(function() {
        switch(totalSeconds) {
            case 1:
                $scope.timeMessage = "Updated just now";
                break;
            case 5:
                $scope.timeMessage = "Updated 5 seconds ago";
                break;
            case 10:
                $scope.timeMessage = "Updated 10 seconds ago";
                break;
            case 20:
                $scope.timeMessage = "Updated 20 seconds ago";
                break;
            case 30:
                $scope.timeMessage = "Updated 30 seconds ago";
                break;
        }
        totalSeconds++;
    }, 1000);

}]);