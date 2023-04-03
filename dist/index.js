"use strict";
//Basic Types
let num = 5;
let company = 'Easy Express Solutions Inc.';
let isPublished = true;
let nums = [1, 2, 3];
//Tuple
let person = [23, 'Meng', true];
//Union
let id = 'mark';
//enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {}));
console.log(Direction.up);
let user = {
    id: 1,
    name: 'meng',
};
// function
function add(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
log(123);
let user2 = {
    id: 12,
    name: 'smith',
};
let user3 = {
    id: 12,
    name: 'smith',
};
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        console.log(`${this.name} is now registered!`);
    }
}
let meng = new Person(1, 'meng');
meng.register();
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        console.log(`${this.name} is now registered!`);
    }
}
// sub classes 
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
//generics 
function getArray(arr) {
    return new Array().concat(arr);
}
let newItems = getArray([1, 2, 3, 4]);
console.log(newItems);
