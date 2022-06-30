"use strict";
// Basic Types
let id = 28;
let company = 'Easy  Express';
let isPublished = true;
let x = 34;
x = true;
let nums = [1, 2, 3, 4];
// nums.push('erer')
// Tuple
let person = [24, 'brad', true];
let employees;
employees = [
    [24, 'brad'],
    [34, 'smith'],
];
// Union
let value = 8;
let value2 = 'hello';
// Enum
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
console.log(Direction.up); // display 0
