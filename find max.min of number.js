// Using Math.max and Math.min functions along with spread operator
var numbers = [3, 1, 8, 4, 10, 6];
var maxNumber = Math.max.apply(Math, numbers);
var minNumber = Math.min.apply(Math, numbers);
console.log("Maximum numbers are:", maxNumber);
console.log("Minimum numbers are:", minNumber);
