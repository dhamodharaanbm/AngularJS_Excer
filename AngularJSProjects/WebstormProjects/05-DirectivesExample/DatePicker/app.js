var app = angular.module('app', []);

app.directive('datepicker', function() {
    return {
        link: function(scope, el, attr) {
            $(el).datepicker({
                onSelect: function(dateText) {
                    console.log(dateText);
                    var obj = attr.ngModel + " = " + "'" + dateText + "'";
                    console.log(obj);
                    scope.$apply(obj);
                    console.log(scope.startDate);
                    // how do i set this elements model property ?
                }
            });
        }
    };
});