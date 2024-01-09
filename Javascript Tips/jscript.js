// Tips with numbers in chrome developer tools:

// Increment by numbers =
let score = 1;

score += 1; // increment by +1
score -= 1; // decrease by -1

score; // to find value of score

// Quicker to increment by score++ or score-- to increment by 1

//Shortcuts
// clear consol ctrl L

//const = value that can not change
//var = old way, no reason to use it anymore
//let = a variable that can be reassigned

// Booleans = true or false
// variable with a boolean example: let isLoggedIn = True;
// strings are indexed like arrays eg: chicken - 0 1 2 3 4 5 6 (of note spaces count as a value in index)
let phone = "02 43405014";
phone[3]; // would select the first 4 in the number
// .length returns number of characters (not index which is always -1 length due to starting at 0)
let firstName = "jake";
let lastName = "heath";
let fullName = firstName + " " + lastName; //concactination
//output of fullName would be "jake heath"
// methods are the action which follows "." when typed in developer tools eg: thing.method()
let msg = "ahhh I love you";
msg.toUpperCase(); // would output "AHHH I LOVE YOU"
// you can add multiple methods to one output eg: to capitalise and remove space from ends of 
let greeting = "    hello again!!    "; 
greeting.trim().toUpperCase();


Exercise: 
// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
let whisper = message.toLowerCase().trim();

whisper
'taste the rainbow!'


"haha".indexOf('h'); // = 0   , the result -1 means it does not contain the result
 // .slice to extract a section 

 let thismsg = "haha that is so funny!";

 thismsg.slice(5, 12);
'that is' // result
thismsg.replace('haha', 'lololololol');
'lololololol that is so funny!' // result
thismsg.repeat(2);
'haha that is so funny!haha that is so funny!' // result

const word = "skateboard";
let facialHair = word.slice(5,10).replace('o','e');
'beard' //result

//USEFUL STRING TEMPLATE LITERALLS by using back tick key (above tab) javascript can evaluate a line of code instead of needing to concactinate eg:
`hello ${1 + 2 + 3}`
'hello 6' // result

"you bought " + qty + " " + product + ". Total is: " + price * qty;
'you bought 5 ducks. Total is: 10'
`You bought ${qty} ${product}. Total is: $${price * qty}`
'You bought 5 ducks. Total is: $10'

// NULL and UNDEFINED 
undefined = javascript saying i dont know, there is no value 
null = intentional that there is no value 

// MATH OBJECT 
Math.floor(); // removes decimal and rounds down
Math.ceil(); // removes decimal and rounds up
Math.round(); // 
Math.random(); // 

Math.floor(math.random() * 5) + 1; // random number between 1 to 5
Math.floor(math.random() * 3) + 20; // generates a random number between 20 and 22

const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;
'You rolled a 5 and a 3. They sum to 8' //result

// double == vs === 
// == checks if things are of equal value not type (types of strings, numbers, booleans etc) 
// === checks arre of equal value and type
1 == '1' // true
1 ==='1' //false

// != vs !== checks if things are not equal value /value and type 
// Most instances call for use of === or !==

console.log(); 
alert("hello"); 
prompt ("please enter a number");


// IF and else STATEMENTS and else if - 
// example 1
let rating = 3;
if (rating ===3) {
    console.log("You're a superstar!");
}
else if (rating === 2) {
    console.log("meets expectations");
}
// example 2
let random = Math.random();
if (random < 0.5) {
  console.log("your random number is less than 0.5");
}
else {
  console.log("your number is greater than or equal to 0.5")
}
console.log(random);
 // example 3
 const dayOfWeek = prompt('Enter a Day').toLowerCase();
 if (dayOfWeek === 'monday') {
    console.log("Ugh I hate mondays ");
 }
 else if (dayOfWeek === 'saturday') {
    console.log(" Yay, Saturday's are the best");
 }
 else {
  console.log("meh this day sucks");
 } 

 //example 4
 const age = prompt("enter a number");
 if (age < 5) {
  console.log("You are a baby. You get in for free!");
 }
 else if (age < 10) {
  console.log("You are a child. You pay $10");
 }
 else if (age < 65) {
  console.log("You are an adult. You pay $20");
 }
 else {
  console.log("You're too old for this, go home");
 }

// you can have an if, multiple else if's (must intiially come after an if), must puit else at the end if youre going to use it
//example 5
function getColor(phrase){
  if(phrase === 'stop'){
      console.log('red');
  }
  else if (phrase === 'slow') {
      console.log('yellow');
  }
  else if (phrase === 'go') {
      console.log('green');
  }
  else {
      console.log('purple');
  }
}
getColor();

// example 6
const password = prompt("please enter a new password");
//pass must be 6+ characters
// pass must have a space
if (password.length >= 6) {
  if (password.indexOf(' ') === -1 ) {
    console.log("valid password");
  }
  else {
    console.log("password cannot have spaces");
  }
}
else {
console.log("password is too short");
}

// Truthy vs falsey values
// All values are truthy unless:
// 0, '', NaN, undefined, null, false  

// LOGICAL OPERATORS 
// these are - && (and) , || (or), 
const userPass = prompt("please enter a new password");
if (userPass.length >= 6 && userPass.indexOf(' ') === -1) {
  console.log("valid password");
}
else {
  console.log("does not meet requirements");
}

// || (or)
const ageOfPerson = 90;
if (ageOfPerson >= 0 && ageOfPerson < 5 || ageOfPerson >= 65) {
  console.log("free entry");
} 
else {
  console.log("you pay $10");
}

//NOT EXPRESSION !
const fName = prompt ("enter your first name");
if (!fName) {
  fName = prompt ("try again you left it blank")
}

// SWITCH STATEMENT not often used, least important concept

// An Array is an ordered collection of values
// Making an array:
const colors = ["red", "orange", "yellow"];

// or 

let lottoNumbers = [1,2,3,4,5,6];


// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

let movieLine = ['tom', 'nancy'];
movieLine.push('oliver');
// adds oliver to the end of the array || can push multiple things 'oliver', 'jay'

movieLine.pop() // removes last value in array 


//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

// .length of an array is always 1 greater than maximum index because index starts at 0

// you can change an existing array eg: if I wanted to update the above first color to blue from red:
colors[0] = 'red';

// Concat Arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

// INDEX OF arrays 
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1


// SLICE Arrays 
let difColors = ['red', 'orange', 'yellow', 'blue', 'purple'];
difColors.slice(2);
// returns (3) ['yellow', 'blue', 'purple']
let coolColors = difColors.slice(3);
// returns  ['blue', 'purple']

// splice ARRAYS 
//to delete
let difColors2 = ['red', 'orange', 'yellow', 'blue', 'purple'];
difColors2.splice(1,2);
// deleted ['orange', 'yellow']
// returns (3) ['red', 'blue', 'purple']

// to add splice 
let difColors3 = ['red', 'orange', 'yellow', 'blue', 'purple'];
difColors3.splice(1,0,'red-orange'); // the 0 represents how many things to delete, the 1 represents the index of where we want to insert 
// returns (6) ['red', 'red-orange', 'orange', 'yellow', 'blue', 'purple']

// Arrays are normally made using const variable - doesnt mean you cant change the contents of the array

// Nested arrays 

const gameBoard = [['x', 'o', 'x'], ['o', null, 'x'], ['o', 'o', 'x']];
// to locate null on gameboard 
gameBoard[1] [1] // selecting the index 1 array (the middle one because index starts at 0, then selecting 1 index of middle array = null)

//change null to Hugo
const airplaneSeats = [
  ['Ruth', 'Anthony', 'Stevie'],
  ['Amelia', 'Pedro', 'Maya'],
  ['Xavier', 'Ananya', 'Luis'],
  ['Luke', null, 'Deniz'],
  ['Rin', 'Sakura', 'Francisco']
]
//Answer
airplaneSeats[3][1] = 'Hugo';

// OBJECT LITERALS

// To make an object literal:
const dog = {
  name: "Rusty",
  breed: "unknown",
  isAlive: false,
  age: 7
};
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;

// 
const person = {
  firstName: 'Nick',
  lastName: 'Clarke',
};

// 
let siteComment = {
  username: 'goose',
  downVotes: '34',
  upVotes: '100',
  netScore: '66',
  commentText: 'I like geese',
  tags: ['#funny', '#lol', '#yeahroight'],
  isGilded: false
};

const restaurant = {
  name: 'Ichiran Ramen',
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: 'Brooklyn',
  state: 'NY',
  zipcode: '11206',
}

const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

'84 Johnson Ave, Brooklyn, NY 11206' // output

// nesting arrays in arrays, objects in objects and combining the two. examples

const shoppingCart = [
  {
    product: 'cheese',
    price: 3,
    qty: 2,
    totalPrice: 6 
  },
  {
    product: 'crackers',
    price: 2.50,
    qty: 1,
    totalPrice: 2.50
  }
];

// or

const student = {
firstName: "naughty",
lastName: "boy",
strengths: ['Music', 'FoodTech'],
exams: {
  midYear: 92,
  final: 98
}
};

// LOOPS

// For Loop - Very important

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// another example to print even numbers up to and including 20

for (let i = 2; i <= 20; i += 2) {
  console.log(i)
};

// counting down from 100 
for (let i = 100; i >= 1; i -= 1) {
  console.log(i)
};

// Loop understanding = variable is start point, next section is stop point, final section is math to get there

// Looping over Arrays 
const animals = ['lions', 'bears', 'chickens'];

for (let i = 0 ; i < animals.length; i++) {
  console.log(animals[i])
};
// output:
lions
bears
chickens 

// 
let gang = ['scoob', 'shaggy', 'velma', 'daphne', 'fred'];

for (let i = 0; i < gang.length; i++) {
  console.log(gang[i].toUpperCase())
};
//
// NESTED LOOPS - the inner loop must complete all loops prior to outer doing its second loop
for (let i = 1; i <= 3; i++) {
  console.log(`i is: ${i}`)
  for (let j = 1; j < 4; j++) {
    console.log(`   j is:${j}`)
  }
};
// output
i is: 1
    j is:1
    j is:2
    j is:3
i is: 2
    j is:1
    j is:2
    j is:3
i is: 3
    j is:1
    j is:2
    j is:3
//

// Final example very hard 
const seatingChart = [
  ['Kristen', 'Erik', 'Namita'],
  ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
  ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`ROW #${i + 1}`)
  for (let j = 0; j < row.length; j++) {
      console.log(row[j])
  }
}

//to get the same output using a FOR OF LOOP for the above use below:

for (let row of seatingChart) {
    for (let student of row) {
      console.log(student);
    }
}


// output
ROW #1
 Kristen
 Erik
 Namita
ROW #2
 Geoffrey
 Juanita
 Antonio
 Kevin
ROW #3
 Yuma
 Sakura
 Jack
 Erika

 // WHILE LOOPS 
 // count 1 to 10
 let count = 0;
 while (count < 10) {
  count++;
  console.log(count)
 };

// example
const secretPass = "BabyHippo";

let guess = prompt("enter the secret code..");
while(guess !== secretPass) {
  guess = prompt("enter the secret code..");
}
console.log("Congrats you guessed it");

 // Break Keyword = when encountering break; this stops the loop
// example copying game
let input = prompt("hey, say something");
while (true) {
  input = prompt(input);
  if (input.toLowerCase() === "stop") break; 
}
console.log("okay you win");

// GUESING GAME CODE - 
let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
  maximum = parseInt(prompt("Enter the maximum number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum); 

let gameGuess = parseInt(prompt ("enter your first guess!"));
while (gameGuess !== targetNum) {
if (gameGuess > targetNum) {
  gameGuess = parseInt(prompt("too high! Enter a new guess:"));
}
else {
  guess = parseInt(prompt("too low, enter a new guess:"));
}
}
console.log("you got it!");

// FOR OF LOOP - New to javascript better for use with arrays than for loops
// old example with a for loop

const subreddits = ['cringe', 'books', 'chicken', 'funny'];

for (let i = 0; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/r/${subreddits[i]}`)
};
 
// output 
Visit reddit.com/r/cringe
Visit reddit.com/r/books
Visit reddit.com/r/chicken
Visit reddit.com/r/funny

// New example with For Of Loop 

const subreddits2 = ['cringe', 'books', 'chicken', 'funny'];

for (let sub of subreddits2) {
  console.log(sub)
};

// output 
cringe
books
chicken
funny 

// or can do below to match above for loop
for (let sub of subreddits2) {
  console.log(`Visit reddit.com/r/${sub}`)
};

// You can use for of loops to itterate over objects eg: strings like below to print each character

for (let char of "hello world"){
  console.log(char)
};

//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let square of numbers) {
  console.log(square * square);
};
// output
1
4
9
16
25
36
49
64
81
// 
// object literrals are not iterable via for of loops, use FOR IN instead 

const testScores = {
  nick: 80,
  jake: 95,
  zac: 12
}

for (let person in testScores) {
  console.log(`${person} scored ${testScores[person]}`);
}

// may need to know for objects you can use object methods Object.keys(variable) , Object.values(variable) , Object.entries(variable) 


// TO DO LIST CODE IN FULL WITH STEPS

// STEP ONE TO MAKE A GAME WHILE LOOP 
// let input = prompt("please enter, 'new', 'list', 'delete', or 'quit'");

// while (input !== 'quit' && input !== 'q') {
//     input = prompt("please enter, 'new', 'list', 'delete', or 'quit'")
// }
// console.log("okay app is quit")

//STEP two to create a list
// let input = prompt("please enter, 'new', 'list', 'delete', or 'quit'");
// const todos = ['collect chicken eggs', 'clean kitty litter']
// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log('***************')
//         for (let i = 0; i <todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//           console.log('***************')
//     }
//     input = prompt("please enter, 'new', 'list', 'delete', or 'quit'")
// }
// console.log("okay app is quit")

//STEP 3 add "new" to do to the list
// let input = prompt("please enter, 'new', 'list', 'delete', or 'quit'");
// const todos = ['collect chicken eggs', 'clean kitty litter']
// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log('***************')
//         for (let i = 0; i <todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//           console.log('***************')
//     }
//     else if (input === 'new') {
//         const newTodo = prompt("ok, what is the new todo?");
//         todos.push(newTodo);
//         console.log(`${newTodo} added to the list`)
//     }
//     input = prompt("please enter, 'new', 'list', 'delete', or 'quit'")
// }
// console.log("okay app is quit")


//STEP 4 Deleting a to do and checking if it is an index 
let input = prompt("please enter, 'new', 'list', 'delete', or 'quit'");
const todos = ['collect chicken eggs', 'clean kitty litter']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***************')
        for (let i = 0; i <todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
          console.log('***************')
    }
    else if (input === 'new') {
        const newTodo = prompt("ok, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }
    else if (input === 'delete') {
        const index = parseInt(prompt("which task would you like to delete?, Enter a index to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
         console.log(`ok, deleted ${deleted[0]}`);
        }
        else {
            console.log('unknown index');
        }
    
    }
    input = prompt("please enter, 'new', 'list', 'delete', or 'quit'")
}
console.log("okay app is quit");

// FUNCTIONS 
//arguemnts are input's for functions

function singSong() {
    console.log("I am singing")
}
singSong();

// ...

function printHeart() {
    console.log("<3")
}
printHeart();

// ...

function greet(firstName)  {      //firstName is the parameter
    console.log(`Hey there ${firstName}!`)
}
greet('Elvis'); // elvis is the argument

// ... 

function rant(message) {
    console.log(message.toUpperCase());
      console.log(message.toUpperCase());
      console.log(message.toUpperCase());
}
rant('I hate beets');

// ... 
function greet(firstName, lastName) {    
  console.log(`Hey there ${firstName} ${lastName[0]}!`)
}
greet('Elvis', 'Presley'); 

// ... 

// function repeat(msg, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//        result += msg;
//     }
//     console.log(result);
// }
// repeat('lol ', 5)

// ... 

// function isSnakeEyes(roll1, roll2) {
// let die1 = Math.floor(Math.random() * 6 + 1);
//     console.log(`Die 1 = ${die1}`)
// let die2 = Math.floor(Math.random() * 6 + 1); 
//     console.log(`Die 2 = ${die2}`)
//     if (die1 && die2 !== 1) {
//         console.log(`${die1} and ${die2} does not snake eyes! yay that was a good roll`)
//     }
//     else {
//         console.log(`${die1} and ${die2} = snake eyes, bad luck`)
//     }
// }
// isSnakeEyes('roll1', 'roll2');



// function snakeDiceGame() {
// let die1 = Math.floor(Math.random() * 6 + 1);
//     console.log(`Die 1 = ${die1}`)
// let die2 = Math.floor(Math.random() * 6 + 1); 
//     console.log(`Die 2 = ${die2}`)
//     if (die1 && die2 !== 1) {
//         console.log(`${die1} and ${die2} does not snake eyes! yay that was a good roll`)
//     }
//     else {
//         console.log(`${die1} and ${die2} = snake eyes, bad luck`)
//     }
// }
// snakeDiceGame();

//...

// function isSnakeEyes(die1, die2){
//     if(die1 === 1 && die2 === 1){
//         console.log("Snake Eyes!");
//     } else {
//         console.log("Not Snake Eyes!");
//     }
// }
// isSnakeEyes(1,1);

// ... 

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }

// ... 

// function capitalise(str) {

//     return str[0].toUpperCase() + str.slice(1) ;
// }
// capitalise("potato");

// ... 

// function returnDay(num) {
//     let daysOfWeek = {
//         1: 'Monday',
//         2: 'Tuesday',
//         3: 'Wednesday',
//         4: 'Thursday',
//         5: 'Friday',
//         6: 'Saturday',
//         7: 'Sunday'
//     };
//    const day = daysOfWeek[num];
//     return day? day : null;
// }
// returnDay(7);

// ... 

// function isShortsWeather(temp) {
//     if (temp >= 75) {
//         return true
//     }
//     else {
//         return false
//     }
    
// }
// isShortsWeather(60);

// VS

// function isShortsWeather(temp) {
//     return temp >= 75;
// }
// isShortsWeather(86);

// ...

// function lastElement(arr) {
//   if (!arr.length) return null;
//     return arr[arr.length-1];
//   }
// lastElement([3, 5, 7]);

// ... 

// function multiply(a, b) {
//     return a * b;
// }
// multiply(1, 4);

// ... 

function sumArray(nums) {
  let total = 0;
  for (let num of nums) {
      total += num;
  }
  return total;
}

sumArray([2, 2, 2]); 

// 

// SCOPE is the locatation where a variable is defined 

// BLOCK SCOPE - a block is within {}. if a variable is declared inside of a block, the variable only exits insde that block {}

// Lexical scoping - inner functions (nested) have access to parent functions

function bankRobbery() {
  const heroes = ['spiderman','wolverine', 'captain planet'];
  function cryForHelp() {
    for (let hero of heroes) {
      console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
    }
  }
  cryForHelp();
}
bankRobbery();

// Function Expressions 

const addition = function (x, y) {
  return x + y;
}
addition(3, 4);
// 7

// ..

const squareNum = function(x) {
  return x * x;
}
squareNum(4);
//16

// .. 

// Higher order Functions 
// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f()
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }

// callTenTimes(rollDie)

// ... 

// function makeMysteryFunc(){
//     const rand = Math.random();
//     if(rand > 0.5) {
//         return function() {
//             console.log("Congrats, I am happy") 
//         }
//     } else {
//         return function() {
//             alert("you have been infected")
//         }
//     }
// }
// let mystery = makeMysteryFunc();
// mystery();

// ... 

// function makeBetweenFunc(min, max) {
//     return function(num) {
//         return num >= min && num <= max
//     }
// }
// const isChild = makeBetweenFunc(0, 18);
// const isAdult = makeBetweenFunc(19, 64);
// const isSenior = makeBetweenFunc(65, 120);
// isChild(119);

// .. 

// function isBetween(num) {
//     return num >= 50 && num <= 100
// }
// isBetween(40);

// .. 

// const myMath = {
//    PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }
// myMath.square(2);
// myMath.cube(2);

// THE ABOVE IS USED SO OFTEN IN JS THAT THEY MADE NEW SHORTHAND WHERE YOU DONT HAVE TO WRITE FUNCTION KEYWORD AS BELOW

// 

// const myMath = {
//    PI: 3.14159,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }
// myMath.square(2);
// myMath.cube(2);


// ... 

const square = {
  area(side) {
      return side * side;
  },  
  perimeter(side) {
  return side * 4;
  }
}
square.area(10);
square.perimeter(10);
// 

/// ..

// THIS 

// const cat = {
//     name: 'Puddin',
//     color: 'orange',
//     breed: 'short hair exotic', 
//     meow() {
//         console.log('meow, meow, I want gibblies!')
//     }
// }
// cat.meow();

// ... 

// const cat = {
//     name: 'Puddin',
//     color: 'orange',
//     breed: 'short hair exotic', 
//     meow() {
//         console.log(this.color);
//     }
// }
// cat.meow();

// .. 

// const cat = {
//     name: 'Puddin',
//     color: 'orange',
//     breed: 'short hair exotic', 
//     meow() {
//         console.log(`${this.name} is an ${this.color} ${this.breed} cat.`)
//     }
// }
// cat.meow();

// .. 

// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg() {
//         this.eggCount += 1;
//         return `Eggs = ${this.eggCount}, good girl ${this.name}.`
//     }
// }
// hen.eggCount;  DOES NOT WORK

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG"
    }
}
// 

// TRY CATCH FOR ERRORS 

// how to catch errors to allow code to continue to run as best as possible with an error present 

try {
  hello.toUpperCase();
} catch {
  console.log("error!!!")
}
hello.toUpperCase();

// 

// setTimeout(() => {
//     console.log('hello')
// }, 3000)


// .. 
// console.log('first')
// setTimeout(() => {
//     console.log('third')
// }, 3000)
// console.log('second')


// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);
// clearInterval(id); 

// STOPS the interval running 

//FOR EACH
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach(function(element) {
//     console.log(element)
// })

// 

// console.logging even numbers using for EACH
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach(function(element) {
//     if (element % 2 === 0) {
//     console.log(element)}
// })

// .. 

// MAP // creates a new array out of existing array and allows for it to be saved to a new variable
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubles = numbers.map(function(num) {
//     return num * 2;
// })
// doubles;

// ...

// const movies = [
//     {
//         title: 'Dumb and dumber',
//         score: 99
//     },
//     {
//         title: 'Star Wars',
//         score: 89
//     }
// ]

// const titles = movies.map(function (movie) {
//     return movie.title;
// })
// titles;
// output of new array  
// ['Dumb and dumber', 'Star Wars']

// .. 

// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// const firstN = fullNames.map(obj => obj.first);
// firstN;

// FILTER METHOD 

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// numbers.filter(n => {
//    return n <10
// });

// .. 

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ]

// //LONG WAY
// // const goodMovies = movies.filter(movie => {
// //     return movie.score > 80
// // })
// // goodMovies;

// //SHORT WAY
// const goodMovies = movies.filter(movie => movie.score > 80)
// goodMovies;

// // can map just the titles using:
// // const goodTitles = goodMovies.map(movie => movie.title)

// // OR CAN COOMBINE THE ABOVE TWO INTO ONE LINE OF CODE AS BELOW TO MAP AND FILTER 
//     // movies.filter(movie => movie.score > 80).map(movie => movie.title);

// // output 
// // 0: {title: 'Amadeus', score: 99, year: 1984}
// // 1: {title: 'Stand By Me', score: 85, year: 1986}
// // 2: {title: 'Parasite', score: 95, year: 2019}
// // 3: {title: 'Alien', score: 90, year: 1979}

// const badMovies = movies.filter(movie => movie.score < 80)
// badMovies;

// const recentMovies = movies.filter(movie => movie.year >= 2010)
// recentMovies;
// // output 
// 0: {title: 'Sharknado', score: 35, year: 2013}
// 1: {title: 'Parasite', score: 95, year: 2019}


// MAP AND FILTER METHODS RETURN A NEW ARRAY - SOME AND EVERY METHODS RETURN TRUE OR FALSE

// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

// exams.every(score => score >= 75)

// // THIS WORKS BECAUSE EVERY SCORE IN THE 'EVERY' METHOD IS TRUE THEREFORE RETURNS TRUE WHEN return

// // IF ONE OF THE EXAM SCORES WAS LESS THANM 75, THE METHOD WOULD RETURN FALSE

// exams.some(score => score >= 75) 
// // if there is atleast 1 score that returns greater than or equal to 75, SOME method will return true

// ..

// function allEvens(arr) {
//     return arr.every(number => number % 2 === 0);
// }
// allEvens([2,4]);

// .. 

// REDUCE  - Takes an array and reduces down to a single value 

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// COULD FIND TOTAL VIA USING LOOP
// let total =  0;
// for (let price of prices) {
//     total += price
// }
// console.log(total);

// .. 
// const total = prices.reduce((total, price) => {
//     return total + price
// })

// .. 
// const minPrice = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min;
// })
// minPrice;


// TO USE REDUCE TO PICK HIGHEST RATED MOVIE IN AN ARRAY/OBJECT

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ]

// const highestRated = movies.reduce((bestMovie, currMovie) => {
//     if (currMovie.score > bestMovie.score) {
//         return currMovie;
//     }
//     return bestMovie
// })
// highestRated;

// .. 

// HOW TO ADD A START POINT FOR REDUCE FUNCTION 
// 
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100)

// output 120 because we specified a start point of 100

// .. 

// DEFAULT PARAMS

function multiply(a = 1, b = 1) {
  return a * b;
}
multiply(2, 2);

// output = 4 , however if 2,2 was blank, the function would default to = 1 for each parameter

// .. 

// function rollDie(sides = 6) {
//     return Math.floor(Math.random() * sides) + 1
// } 
// rollDie();

// function greet(person, msg ="Hey there", punc = "!") {
//     console.log(`${msg}, ${person}${punc}`)
// }
// greet('Jake');

// ...

// SPREAD "..."

// Math.max(1,2,3,4,5,6,20)

const nums = [1,2,3,4,5,6,20];
Math.max(...nums);
// // output 20

// // ... 

// console.log(...'hello')
// // output 
// // h e l l o

// .. 

 // SPREAD WITH ARRAY LITERALS 

// EXAMPLE 1

// const cats = ['meow', 'whiskers', 'miss tinky'];
// const dogs = ['woof', 'dogdog', 'barky'];

// const allPets = [...cats, ...dogs];
// allPets;

// // can add further 
// const allPets2 = [...cats, ...dogs, 'hamsterboy'];
// allPets2;

// .. 

// .. 

// SPREAD WITH OBJECTS
// EXAMPLE 1
// const feline = { legs: 4, family: 'cat'};
// const canine = { isFurry: true, family: 'dog'};

// // {...feline, color: 'purple'}; only works in console for some reason
// // {legs: 4, family: 'cat', color: 'purple'}

// const catDog = {...feline, ...canine};
// catDog; 

// // combines both, second option outranks first if clash

// WE USE THIS TO COPY OBJECTS

// const dataFromForm = {
//   email: 'ilikecats@gmail,com',
//   password: 'catsarecool1',
//   username: 'thecoolcat'
// }
// const newUser = {...dataFromForm, id: 2345, isAdmin: false}; // Allows us to add our own info to copied form when user submits which we can save to a variable
// newUser;

// // .. 

// .. 

// REST 

// function sum(...num) {
//     console.log(nums)
// }
// sum(1,2,3,4,5,6,7,8);

// ABOVE TAKES THE PARAMETER NUM AND ... (REST) TAKES THE "REST" OF THE ARGUMENTS AND TURNS THEM INTO AN ARRAY

// BELOW sums the arguments using reduce method, and placing rest in parameter

// function sum(...num) {
//  return num.reduce((total, element) => total + element)
// }
// sum(1,2,3,4,5,6,7,8);
// // output 36

// ANOTHER EXAMPLE OF USING REST TO CREATE AN ARRAY AND ACCOUNT FOR ALL PEOPLE (ARGUEMNTS)
// function raceResults(gold, silver, ...everyoneElse) {
//     console.log(`Gold medal goes to: ${gold}`)
//     console.log(`Silver medal goes to: ${silver}`)
//     console.log(`And thanks to: ${everyoneElse}`)
// }
// raceResults('nick', 'jake', 'puddin', 'gigi', 'brocolli', 'clue', 'plec');
// // output
// // Gold medal goes to: nick
// // Silver medal goes to: jake
// // And thanks to: puddin,gigi,brocolli,clue,plec

// .. 

// DESTRUCTURING ARRAYS 

// const scores = [9383492, 874839, 38393, 121, 31, 12, 2]

// const [gold, silver, bronze, ...everyoneElse2] = scores;
//   gold; // MAKES NEW VARIABLES WITHOUT CHANGING ORIGINAL
// //output 
// 9383492

// DESTRUCTURING OBJECTS

// const user = {
//     email: 'harvey@gmail.com',
//     password: 'sCoTt1948sMiTh',
//     firstName: 'Harvey',
//     lastName: 'Milk',
//     born: 1930,
//     died: 1978,
//     bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
//     city: 'San Francisco',
//     state: 'California'
// }

// const { email, firstName, lastName, city, bio } = user;

// to rename a variable made if you dont want the subject in object do as below:
// const {born: birthYear} = user;

// const user2 = {
//     email: 'Stacy@gmail.com',
//     firstName: 'Stacy',
//     lastName: 'Gonzalez',
//     born: 1987,
//     city: 'Tulsa',
//     state: 'Oklahoma'
// }

// // const {city, state, died = 'N/A'} = user2;

// // died; // adding a default value if not exist.

// // .. 

// // DESTRUCTURING PARAMETERS

// function fullName({firstName, lastName}) {
//  return `${firstName} ${lastName}`
// }
// fullName(user2);

// .. 


// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ]


// // movies.filter((movie) => movie.score >= 90)
// // movies.filter(({ score }) => score >= 90)


// // movies.map(movie => {
// //     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// // })

// movies.map(({ title, score, year }) => {
//     return `${title} (${year}) is rated ${score}`
// })

// // output 
// 0: "Amadeus (1984) is rated 99"
// 1: "Sharknado (2013) is rated 35"
// 2: "13 Going On 30 (2004) is rated 70"
// 3: "Stand By Me (1986) is rated 85"
// 4: "Waterworld (1995) is rated 62"
// 5: "Jingle All The Way (1996) is rated 71"
// 6: "Parasite (2019) is rated 95"
// 7: "Notting Hill (1999) is rated 77"
// 8: "Alien (1979) is rated 90"



// THE DOM (Document object Model)

console



