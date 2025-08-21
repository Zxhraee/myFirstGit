console.log("Task 1");
console.log("Hello World, Node.js!");


console.log("\nTask 2");

let numbers = [2, 4, 6, 8, 10];
console.log("Array:", numbers);

// Add a number to the end of the array
numbers.push(8);
console.log("Updated Array (Push):", numbers);

// Add a number to the beginning of the array
numbers.unshift(3);
console.log("Updated Array (Unshift):", numbers);

// Add a number after the 3rd number
numbers.splice(3, 0, 4);
console.log("Updated Array (Splice add):", numbers);

// Remove the last number from the array
numbers.pop();
console.log("Updated Array (Pop):", numbers);

// Remove the 2nd number from the array
numbers.splice(1, 1);
console.log("Updated Array (Splice Remove):", numbers);

// Change the 5th number in the array 
numbers[4] = 100;
console.log("Updated Array (Change number)", numbers);

// Sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log("Updated Array (Sort Array):", numbers);


console.log("\nTask 3");
const peopleObject = {
    people: [
      { firstname: "Alice", lastname: "Smith" },
      { firstname: "Bob", lastname: "Johnson" },
      { firstname: "Charlie", lastname: "Brown" }
    ]
  };
  
  console.log("People object:", peopleObject);
  
  // Convert JS object to JSON string
  const jsonString = JSON.stringify(peopleObject);
  console.log("JSON string:", jsonString);
  
  // Convert JSON string back to JS object
  const parsedObject = JSON.parse(jsonString);
  console.log("Parsed back to JS object:", parsedObject); 


console.log("\nTask 4");

// Import package
import addNum from 'array-add-num';

// Output sum of array
const nums = [5, 4, 3, 8];
const sum = addNum(nums);

console.log("Sum:", sum);

// Import package.json to read the dependency version
import pkg from './package.json' assert { type: 'json' };

console.log("array-add-num dependancy value:", pkg.dependencies["array-add-num"]);


console.log("\nTask 5");

// Declarative function
function multiplyNums(x, y, z) {
  return "new number:" + x * y * z;
}
console.log("Declarative:", multiplyNums(2, 5, 4));

// Conversion to Function Expression
const multiplyNumsExpr = function (x, y, z) {
    return "new number:" + x * y * z;
  };
  console.log("Function Expression:", multiplyNumsExpr(2, 3, 4));
  

  // Conversion to use Arrow Syntax
const multiplyNumsArrow = (x, y, z) => "new number:" + x * y * z;
console.log("Arrow Function:", multiplyNumsArrow(2, 3, 4));
