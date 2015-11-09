function groceryController($scope){
    $scope.groceryItem = "";
    $scope.itemArray = ['cheese', 'flour', 'hamburger'];
    $scope.itemTotal = $scope.itemArray.length;
    $scope.addItem = function(){
        if($scope.groceryItem == ""){
            console.log("empty field")
            return false;
        }else if($.inArray($scope.groceryItem,$scope.itemArray) == -1){
        console.log($scope.groceryItem)
        $scope.itemArray.push($scope.groceryItem);
        $scope.groceryItem ='';
        $scope.itemTotal = $scope.itemArray.length;
        }else{console.log("item in array");
        }
    }
    $scope.deleteItem = function(deletedItem){
        var idx = $scope.itemArray.indexOf(deletedItem);
        $scope.itemArray.splice(idx,1);
        $scope.itemTotal = $scope.itemArray.length;
        console.log(deletedItem);
    }
}