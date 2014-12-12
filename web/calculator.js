angular.module("CalculatorModule", [])
    .controller("CalcControl", ['$scope', function ($scope) {
        $scope.variable1={};
        $scope.variable1.range=500;
        $(function () {
            $("#slider1").slider({
                max:1000,
                value:$scope.variable1.range,
                slide: sliderBind,
                change: sliderBind
            });
        });
        var sliderBind = function(event,ui){
            $scope.variable1.range= ui.value;
            $scope.$digest();
        };

        $(function () {
            $("#slider2").slider({
                max:1000,
                value:$scope.variable1.range,
                slide: sliderBind,
                change: sliderBind
            });
        });

        $(function () {
            $("#slider3").slider({
                max:1000,
                value:$scope.variable1.range,
                slide: sliderBind,
                change: sliderBind
            });
        });
        $(function () {
            $("#slider4").slider({
                max:1000,
                value:$scope.variable1.range,
                slide: sliderBind,
                change: sliderBind
            });
        });
        $(function () {
            $("#slider5").slider({
                max:1000,
                value:$scope.variable1.range,
                slide: sliderBind,
                change: sliderBind
            });
        });
        $(function () {
            $("#slider6").slider({
                max:1000,
                value:$scope.variable1.range,
                slide: sliderBind,
                change: sliderBind
            });
        });
    }]);
