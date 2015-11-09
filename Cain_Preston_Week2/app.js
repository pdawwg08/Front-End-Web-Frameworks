angular.module("MyEmployeeApp", []).controller("employeeController", function ($scope, dataService) {
    $scope.itemArray = dataService.getItems();
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