angular.module('myapp', []);

angular.module('myapp')
    .component('app', {
        templateUrl: 'app.component.html',
        controller: function(){
            this.onSubmit = function(myform){
                if(myform.$valid){
                    console.log(this.username);
                    console.log(this.password);
                }
                else{
                    alert('fix validation errors');
                }
                
            };
        }
    });
