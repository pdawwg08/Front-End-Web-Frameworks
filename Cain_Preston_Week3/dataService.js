angular.module("MyEmployeeApp").service("dataService", function () {
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
});