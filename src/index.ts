// Basic Types

let id: number = 28;

let company: string = 'Easy  Express';

let isPublished: boolean = true;

let x: any = 34;
x = true;

let nums: number[] = [1, 2, 3, 4];
// nums.push('erer')

// Tuple
let person: [number, string, boolean] = [24, 'brad', true];

let employees: [number, string][];

employees = [
  [24, 'brad'],
  [34, 'smith'],
];

// Union
let value: string | number = 8;
let value2: string | number = 'hello';

// Enum
enum Direction {
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right',
}

console.log(Direction.up); // display 0

// object

type User = {
  id: number;
  name: string;
};

let obj: User = {
  id: 1,
  name: 'meng',
};

// type assertion

let cid: any = 1;

let customerId = cid as number;

// function
function add(a: number, b: number): number {
  return a + b;
}

function log(msg: number | string): void {
  console.log(msg);
}

// interface
interface UserInterface {
  readonly id: number;
  name: string;
}

let user: UserInterface = {
  id: 1,
  name: 'meng',
};

type Point = number | string;
let p1: Point = 2;

// class
class Person {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const jack = new Person(1, 'jack');


// generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let arr1 = getArray<number>([1, 2, 3]);
