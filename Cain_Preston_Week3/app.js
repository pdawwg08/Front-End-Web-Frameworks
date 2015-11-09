angular.module('MyEmployeeApp', ['ngRoute'])
    .service("dataService", function () {
        var employee1 = new Object(),
            employee2 = new Object(),
            employee3 = new Object(),
            itemsArray = [employee1, employee2, employee3];

        employee1.Employee = "Employee1";
        employee1.Street = "1st St.";
        employee1.City = "Big City";
        employee1.State = "Small State";
        employee1.ZipCode = "12345";

        employee2.Employee = "Employee2";
        employee2.Street = "2nd St.";
        employee2.City = "Big City";
        employee2.State = "Small State";
        employee2.ZipCode = "12345";

        employee3.Employee = "Employee3";
        employee3.Street = "3rd St.";
        employee3.City = "Big City";
        employee3.State = "Small State";
        employee3.ZipCode = "12345";

        this.getItems = function () {
            var str = localStorage.getItem("itemLS");
            itemsArray = JSON.parse(str) || itemsArray;
            return itemsArray;
        };
        this.addItem = function (pItem) {
            itemsArray.push(pItem);
            var str = JSON.stringify(itemsArray);
            localStorage.setItem("itemLS", str);
        };
        this.removeItem = function (pItem) {
            itemsArray.splice(itemsArray.indexOf(pItem), 1);
            var str = JSON.stringify(itemsArray);
            localStorage.setItem("itemLS", str);
        };
    })
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/employees', {templateUrl: 'templates/employees-list.html', controller: "EmployeeListCtrl"}).
            when('/employees/:employeeId/edit', {templateUrl: 'templates/employees-edit.html', controller: "EmployeeEditCtrl"}).
            when('/employees/:employeeId/new', {templateUrl: 'templates/employees-new.html', controller: "EmployeeNewCtrl"}).
            otherwise({redirectTo: '/employees'});
    }])
    .controller("EmployeeListCtrl", function ($scope, dataservice) {
        $scope.itemArray = dataservice.getItems();
        $scope.deleteItem = function (deletedItem) {
            dataservice.removeItem(deletedItem);
            console.log(deletedItem);
        };
    })
    .controller("EmployeeEditCtrl", function ($scope, $routeParams, dataservice) {
        $scope.itemArray = dataservice.getItems();
        $scope.employeeId = $routeParams.employeeId;
        $scope.deleteItem = function (deletedItem) {
            dataservice.removeItem(deletedItem);
            console.log(deletedItem);
        };
    })
    .controller("EmployeeNewCtrl", function ($scope, $routeParams, dataService) {
        $scope.itemArray = dataService.getItems();
        $scope.employeeId = $routeParams.employeeId;
        $scope.addItem = function () {
            var employeeItem = new Object();
            employeeItem.Employee = $scope.Employee;
            employeeItem.Street = $scope.Street;
            employeeItem.City = $scope.City;
            employeeItem.State = $scope.State;
            employeeItem.ZipCode = $scope.ZipCode;
            if (employeeItem.Employee === "") {
                console.log("empty field");
                return false;
            } else {
                console.log(employeeItem);
                dataService.addItem(employeeItem);
            }
        };
        $scope.deleteItem = function (deletedItem) {
            dataService.removeItem(deletedItem);
            console.log(deletedItem);
        };
    });