// js/services/todos.js
angular.module('todoService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Todos', function($http) {
        return {
            get : function() {
                return $http.get('/api/todos');
            },
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/todos/' + id);
            }
        }
    });
/*
	That’s all there is to it. We have defined our service using 
	.factory with three different functions. 
	get, create and delete will all return promise objects that we can use in our controller.
*/