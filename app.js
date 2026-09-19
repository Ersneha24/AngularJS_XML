var app = angular.module("studentApp", []);

app.controller("StudentController", function($scope, $http) {

    $scope.students = [];

    $scope.newStudent = {};


    // GET METHOD
    $scope.getStudents = function() {

        $http.get("/students")

        .then(function(response) {

            $scope.students = response.data;

            console.log("Students:");
            console.log($scope.students);

        })

        .catch(function(error) {

            console.log("GET Error:", error);

        });

    };


    // POST METHOD
    $scope.addStudent = function() {

        $http.post("/students", $scope.newStudent)

        .then(function(response) {

            $scope.message =
                "Student added successfully.";

            console.log(response.data);

            // Clear form
            $scope.newStudent = {};

            // Get updated student list
            $scope.getStudents();

        })

        .catch(function(error) {

            $scope.message =
                "Error while adding student.";

            console.log("POST Error:", error);

        });

    };

});