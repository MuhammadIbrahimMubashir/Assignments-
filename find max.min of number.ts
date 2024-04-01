// Using Math.max and Math.min functions along with spread operator
let numbers = [3, 1, 8, 4, 10, 6];

let maxNumber = Math.max(...numbers);
let minNumber = Math.min(...numbers);

console.log("Maximum number is:", maxNumber);
console.log("Minimum number is:", minNumber);