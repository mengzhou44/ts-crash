//Basic Types

let num: number = 5;

let company: string = 'Easy Express Solutions Inc.';

let isPublished: boolean = true;

let nums: number[] = [1, 2, 3];

//Tuple
let person: [number, string, boolean] = [23, 'Meng', true];

//Union
let id: number | string = 'mark';

//enum
enum Direction {
  up = 1,
  down,
  left,
  right,
}
console.log(Direction.up);

// object
type User = {
  id: number;
  name: string;
};

let user: User = {
  id: 1,
  name: 'meng',
};

// function
function add(a: number, b: number): number {
  return a + b;
}

function log(message: number | string): void {
  console.log(message);
}

log(123);

//interface
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

let user2: UserInterface = {
  id: 12,
  name: 'smith',
};

type Point = number | string;  // can not use interface for union and primitive types

type UserType=  {
    readonly id: number;
    name: string;
    age?: number;
}

let user3: UserType = {
    id: 12,
    name: 'smith',
};


//Classes
class Person {
     private id: number
     name: string 

     constructor(id:number, name:string) {
         this.id = id;
         this.name = name
     }

     register(){
        console.log(`${this.name} is now registered!`)
     }
}

let meng = new Person(1, 'meng')
meng.register()
//console.log(meng.id)


//Interface 
interface  PersonInterface{
    id: number
    name: string 
    register(): void
}

class Person1 implements PersonInterface {
    id: number
    name: string 

    constructor(id:number, name:string) {
        this.id = id;
        this.name = name
    }

    register(){
       console.log(`${this.name} is now registered!`)
    }
}
 
// sub classes 
class Employee extends Person {
     position: string 

     constructor(id: number, name: string, position:string) {
         super(id, name)
         this.position = position
     }
}

//generics 
function getArray<T>(arr: T[]) :T[] {
    return  new Array().concat(arr)
}


let newItems = getArray([1,2,3,4])
console.log(newItems)