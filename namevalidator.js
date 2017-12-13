angular.module('myapp')
    .directive('myTrialDirective', function(){
        return {
            restrict: 'A',
            controller: function(){
                this.sayHello = function(){
                    alert('hello');
                };
            }
        }
    });

angular.module('myapp')
    .directive('nameCustomCheck', function(){
        return {
            restrict: 'A',
            require: ['ngModel', 'myTrialDirective'],
            link: function(scope, element, attrs, ctrls){
                var ngModelCtrl = ctrls[0];
                var trialDirectiveCtrl = ctrls[1];
                ngModelCtrl.$validators.nameCustomCheck = function(val){
                    if(val && val.startsWith('a')){
                        return false;
                    }
                    return true;
                };
                trialDirectiveCtrl.sayHello();
            }
        };

    });