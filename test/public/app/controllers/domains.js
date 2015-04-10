app.controller('DomainsController', ['$scope', '$api', function($scope, $api) {

    var data = {
        lastUpdate: null,
        data: null
    };
    var details = {
        lastUpdate: null,
        data: null
    };

    $scope.domains = [];

    $scope.$watch(function(){
        return ($api.getDomains().lastUpdate !== data.lastUpdate);
    }, function(){
        data = $api.getDomains();
        if(data.data) {
            var domains = data.data;
            domains['teste'] = {
                'url': 'http://teste.com.br',
                'status': 'offline',
                'timeout': 370,
                'error': true
            };
            /* Turning Object to Array */
            $scope.domains = $.map(domains, function (value) {
                return [value];
            });
        }
    });

    $scope.$watch(function(){
        return ($api.getDetails().lastUpdate !== details.lastUpdate);
    }, function(){
        details = $api.getDetails();
        if(details.data) {
            /* Turning Object to Array */
            $scope.domainDetails = $.map(details.data, function (value) {
                return [value];
            });
            /* Iterating trough $scope.domains and $scope.domainDetails */
            for(var i = 0; i < $scope.domains.length; i++){
                for(var j = 0; j < $scope.domainDetails.length; j++) {
                    if($scope.domains[i].url.substring(7) == $scope.domainDetails[j].domain) {
                        $scope.domains[i].details = $scope.domainDetails[j];
                    }
                }
            }
        }
    });

}]);