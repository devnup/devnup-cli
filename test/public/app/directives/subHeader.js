app.directive('subHeaderDirective', function() {

    return {
        restrict: 'A',
        templateUrl: './app/views/subHeader.html',
        link: function(scope, element, attrs) {

            $('.dial').knob({
                fgColor:  '#2ECC71',
                font: 'Roboto',
                fontWeight:   500,
                bgColor:  'rgba(0,0,0,.3)',
                format: function (v) {return v + "%";}
            });

            scope.$watch('uptimePercentage', function(obj){
                $('.dial').animate({
                    value: obj,
                    fgColor: '#7f8c8d'
                }, {
                    duration: 1000,
                    easing: 'swing',
                    progress: function () {
                        $(this).val(this.value).trigger('change');
                    }
                });
            }, true);

            scope.$watch('timeout', function(obj) {
                $('#numTimeout').text('-').animateNumber({
                    number: obj.avg
                }, 1000);

                $('#numMaxTimeout').text('-').animateNumber({
                    number: obj.max
                }, 1000);

                $('#numMinTimeout').text('-').animateNumber({
                    number: obj.min
                }, 1000);
            }, true);

            scope.$watch('requests', function(obj) {
                $('#numErrRequest').text('-').animateNumber({
                    number: obj.errors
                }, 1000);

                $('#numSucRequest').text('-').animateNumber({
                    number: obj.success
                }, 1000);
            }, true);
        }
    };

});