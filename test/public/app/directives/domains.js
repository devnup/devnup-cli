/**
 * Created by David on 06/02/2015.
 */
app.directive('domainItem', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            domain: '='
        },
        templateUrl:'./app/views/domain-item.html',
        link: function(scope, element, attrs) {
            /* Drawing the chart */
            scope.chartLabels = ["1%", "5%", "25%", "50%", "75%", "95%", "99%"];
            scope.chartData = [];

            element.bind('click', function () {
                if(scope.domain.details){
                    if(scope.chartData.length == 0) {
                        scope.chartData.push($.map(scope.domain.details.timeout.percentiles, function (value, index) {
                            return [value.toFixed(1)];
                        }));
                        console.log(scope.chartData);
                        var last = 0;
                        var other = [];
                        for(var i = 0; i < scope.chartData[0].length; i++) {
                            other[i] = (scope.chartData[0][i] - last).toFixed(1);
                            last = scope.chartData[0][i];
                        }

                        scope.chartData.push(scope.chartData[0]);
                        scope.chartData[0] = other;
                    }
                    $(element[0].children[3].children[2].children[1]).stop().animateNumber({
                        number: scope.domain.details.timeout.avg
                    }, 1800);
                    $(element[0].children[3].children[2].children[2].children[0].children[1]).stop().animateNumber({
                        number: scope.domain.details.timeout.min
                    }, 1000);
                    $(element[0].children[3].children[2].children[2].children[1].children[1]).stop().animateNumber({
                        number: scope.domain.details.timeout.max
                    }, 1000);
                    $(element[0].children[3]).slideToggle('fast');
                }
            });
        }
    };
});