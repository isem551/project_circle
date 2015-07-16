angular
    .module('contacts', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'list.html'
                controller: 'Contacts'
            });
    })
    .controller('Contacts', function($scope){
        $scope.contacts = [
            {id: '1', saying: 'You Won’t Find Them in China!'},
            {id: '2', saying: 'Have a great day!'},
            {id: '3', saying: 'Haku nama tata!'}
        ];
    })