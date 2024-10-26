angular.module('myApp', [])
.controller('CartControler', function ($scope) {
var defaultBooks = [
{title: 'Absolute Java', qty: 1, price: 114.95},
{title: 'Pro HTML5',     qty: 2, price: 27.95},
{title: 'Head First HTML5', qty: 1, price: 27.89}
];
var storedBooks = localStorage.getItem('Nandhakumar_cart');
// If books exist in Local Storage, use them, otherwise use defaultBooks
$scope.books = storedBooks ? JSON.parse(storedBooks) : defaultBooks;
// Stacks for undo/redo functionality
$scope.undoStack = [];
$scope.redoStack = [];
// Save current state to the undo stack
$scope.saveState = function() {
$scope.undoStack.push(angular.copy($scope.books)); // Save current state
$scope.redoStack = []; // Clear redo stack on new action
};
// Remove a book from the list
$scope.removeBook = function(index) {
$scope.saveState(); // Save state before removing
$scope.books.splice(index, 1);
$scope.updateTotal();
};
// Add a new book with default values
$scope.addBook = function() {
$scope.saveState(); // Save state before adding
$scope.books.push({title: 'New Book', qty: 1, price: 10.99});
$scope.updateTotal();
};
// Save books to localStorage
$scope.saveBooks = function() {
localStorage.setItem('Nandhakumar_cart', JSON.stringify($scope.books));
};
// Undo the last operation
$scope.undo = function() {
if ($scope.undoStack.length > 0) {
    $scope.redoStack.push(angular.copy($scope.books)); // Save current state to redo stack
    $scope.books = $scope.undoStack.pop(); // Restore the last state from undo stack
    $scope.updateTotal();
}
};
// Redo the last undone operation
$scope.redo = function() {
if ($scope.redoStack.length > 0) {
    $scope.undoStack.push(angular.copy($scope.books)); // Save current state to undo stack
    $scope.books = $scope.redoStack.pop(); // Restore the last state from redo stack
    $scope.updateTotal();
}
};
// Update the total price
$scope.updateTotal = function() {
var total = 0;
for (var i = 0; i < $scope.books.length; i++) {
    total += $scope.books[i].qty * $scope.books[i].price;
}
$scope.total = total;
};
// Initialize the total value
$scope.updateTotal();
});