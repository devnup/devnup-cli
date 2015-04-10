/**
 * @author lucasrezende
 * @since 1/29/15.
 */
angular.module('com.devnup.status.services', [])
    .factory('$api', ['$http', '$interval', '$q', function($http, $interval, $q) {

        var minutesToUpdate = 1;

        var reqInterval = null;
        var lastUpdate = null;

        var apiData = {
            resume: null,
            details: null,
            domains: null
        };

        var request = function(req) {
            var response = $http({
                method: req.method,
                url: '/api/' + req.url
            });
            return response.success(function(data) {
                    if (data && data.result == 'success') {
                        apiData[req.name] = data.data;
                    } else {
                        console.error("Error retrieving resume!");
                    }
                })
                .error(function(err) {
                    console.error(err);
                });
        };

        var loadData = function() {
            console.log("Updating data...");

            var reqs = [{
                name: 'resume',
                url: '',
                method: 'GET'
            }, {
                name: 'details',
                url: 'details/',
                method: 'GET'
            }, {
                name: 'domains',
                url: 'domains/',
                method: 'GET'
            }];

            var promiseArray = [];

            for (var i = 0; i < reqs.length; i++) {
                promiseArray.push(request(reqs[i]));
            }

            $q.all(promiseArray).then(function() {
                console.log("Updated complete.");
                lastUpdate = new Date();
            });

            clearInterval(reqInterval);
            reqInterval = setInterval(loadData, minutesToUpdate * 60 * 1000);
        };

        loadData();

        var getData = function(value) {
            return {
                lastUpdate: lastUpdate,
                data: apiData[value]
            }
        };

        return {
            getResume: function() {
                return getData('resume');
            },
            getDetails: function() {
                return getData('details');
            },
            getDomains: function() {
                return getData('domains');
            },
            refresh: loadData
        };

    }]);
