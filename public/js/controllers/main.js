// js/controllers/main.js
angular.module('todoController', [])

    // inject the Todo service factory into our controller
    .controller('mainController', function($scope, $http, Todos) {
        $scope.formData = {};
        $scope.selected = [];
        // GET =====================================================================
        // when landing on the page, get all todos and show them
        // use the service to get all the todos
        Todos.get()
            .success(function(data) {
                $scope.todos = data;
            });

        // CREATE ==================================================================
        // when submitting the add form, send the text to the node API
        $scope.createTodo = function() {

            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            // people can't just hold enter to keep adding the same to-do anymore
            if (!$.isEmptyObject($scope.formData)) {

                // call the create function from our service (returns a promise object)
                Todos.create($scope.formData)

                    // if successful creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.todos = data; // assign our new list of todos
                    });
            }
        };


        // SELECT TODO ==============================================================
        // add to selected list after checking
           $scope.toggle = function (id, list) {
            var idx = list.indexOf(id);
            if (idx > -1) {
              list.splice(idx, 1);
            }
            else {
              list.push(id);
            }
          };

          $scope.exists = function (id, list) {
            return list.indexOf(id) > -1;
          };


          // DELETE ==================================================================
        // delete a todo after checking it
        $scope.deleteTodo = function(list) {
            for (i=0; i<list.length; i++){
                Todos.delete(list[i])
                    // if successful creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.todos = data; // assign our new list of todos
                    });
            }
        };
     
    });