angular.module('myapp', []);

angular.module('myapp')
    .component('app', {
        templateUrl: 'app.component.html',
        controller: function(){
            this.onSubmit = function(){
                alert('submitted');
            };
        }
    });
