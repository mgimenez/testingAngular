var app = angular.module('bonusApp', []);

app.controller('mainCtrl', ['$scope', function($scope) {

    $scope.mostrarAlerta = function() {
        swal("Here's a message!");
    }

    $scope.mostrarAlerta2 = function() {
        swal("Here's a message!", "It's pretty, isn't it?")
    }

    $scope.mostrarAlerta3 = function() {
        swal("Good job!", "You clicked the button!", "success")
    }

    $scope.confirm = function() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        }, function() {
            swal("Deleted!", "Your imaginary file has been deleted.", "success");
        });
    }

    $scope.info = function() {
        swal({
            title: "An input!",
            text: "Write something interesting:",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Write something"
        }, function(inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("You need to write something!");
                return false
            }
            swal("Nice!", "You wrote: " + inputValue, "success");
        });
    }



}]);
