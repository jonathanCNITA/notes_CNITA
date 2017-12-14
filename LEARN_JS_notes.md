# LEARN JS

## Tips

[A JS game](http://play.elevatorsaga.com)

**Write Js in strict mode**
write this at the top of your file:
```js
"use strict";
```

**An array of functions**
```js
function first_function(param){console.log(param);}
function second_function(param){console.log(param);}
function third_function(param){console.log(param);}
function forth_function(param){console.log(param);}

let array_of_functions = [
    first_function,
    second_function,
    third_function,
    forth_function
]
```
and then call it like that
`array_of_functions[0]('myParam');`
Or loop over the array to match the good function name
```js
for(let i = 0; i < array_of_functions.length; i++) {
  if(array_of_functions[i].name === 'second_function') {
    array_of_functions[i](i);
  }
}
```

**Sum the values of an array**
```js
const numbers = [10, 20, 30, 40] // sums to 100

// function for adding two numbers. Easy!
const add = (a, b) =>
  a + b

// use reduce to sum our array
const sum = numbers.reduce(add)
```

**La fonction anonyme appelée immédiatement en Javascript: (function())()**
[les fonctions anonyme et good practices](http://sametmax.com/la-fonction-anonyme-appelee-immediatement-en-javascript-function/)


## Chapt_1
### Introduction to JS
4 essential data types :
- strings
- numbers
- booleans
- null


- `console.log('hello');` is the same as `print('Hello')`
- `console.log('world'.length());`
- operators + - * /
- `console.log(Math.ceil(48.3));`
- `console.log(Math.random()*10);`
- `console.log(Number.isInteger(2017))`
- `console.log('hello'.toUpperCase())`

** User Input**
```js
var name = prompt('What is your name?');
```

[MDN JS Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

### Variables
In ES6 concatenate string with variables
use backTik with ${variable}
```js
let name = 'John';
console.log(`my name is ${name}`);
```


### Control flow
1.Switch statement
```js
let moonPhase = 'full';

switch (moonPhase){
  case 'full':
    console.log('Howl');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
}

```


2.Ternary Operator:
```js
let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
```
became
```js
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
```

#### Review: Control Flow

Way to go! We just learned a lot of control flow concepts:

+ if/else statements make binary decisions and execute different code based on conditions.
+ All conditions are evaluated to be truthy or falsy.
+ We can add more conditional statements to if/else statements with else if.
+ switch statements make complicated if/else statements easier to read and achieve the same result.
+ The ternary operator (?) and a colon (:) allow us to refactor simple if/else statements.
+ Comparison operators, including <, >, <=, and >= can compare two variables or values.
+ After two values are compared, the conditional statement evaluates to true or false.
+ The logical operator `&&` checks if both sides of a condition are truthy.
+ The logical operator `||` checks if either side is truthy.
+ The logical operator `!==` checks if the two sides are not equal.
+ An exclamation mark (!) switches the truthiness / falsiness of the value of a variable.
+ One equals symbol (=) is used to assign a value to a variable.
+ Three equals symbols (===) are used to check if two variables are equal to each other.


### Functions

**function expression**
```js
function isGreaterThan(numberOne, numberTwo) {
  if(numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
}

isGreaterThan(5, 2);
```

**function expression arrow syntax**
```js
const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
}

isGreaterThan(5, 2);
```

**Set Arrow functions more concise**
```js
const multiplyByNineFifths = (celsius) => {
  return celsius * (9/5);
};
```
Could be write
```js
const multiplyByNineFifths = celsius => celsius * (9/5);
```

#### Review Functions

This unit introduced you to functions.

+ Functions are written to perform a task.
+ Functions take data, perform a set of tasks on the data, and then return the result.
+ We can define parameters to be used when calling the function.
+ When calling a function, we can pass in arguments, which will set the function's parameters.
+ We can use return to return the result of a function which allows us to call functions anywhere, even inside other functions.

### Arrays
**Get the length of an array**
```js
let arr = ['spam', 'egg', 'bean'];
console.log(arr.length);
```

**Add an element to an array**
```js
let arr = ['spam', 'egg', 'bean'];
arr.push('add an element', 'javascript');
console.log(arr);
```

**Remove the last element of an array**
```js
let arr = ['spam', 'egg', 'bean'];
arr.pop();
console.log(arr); // should return => ['spam', 'egg']
```

[all the array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

#### methods used frequently
+ .join()
+ .slice() : copy a specific part of an array .slice(indexStart , toIndexEnd) `arr.slice(1,2);`
+ .splice()
+ .shift() : remove the first item of an array `arr.shift();`
+ .unshift() : add an item at the beginning of the array `arr.unshift('ajoute ça au début');`
+ .concat()

>Variables that are assigned with const cannot be reassigned. However, arrays that are declared with const remain mutable, or changeable.
>This means that we can change the contents of an array, but cannot reassign the variable name to a new array or other data type.

#### Review Arrays

Nice work! In this lesson, we learned these concepts regarding arrays:

+ Arrays are lists and are a way to store data in JavaScript.
+ Arrays are created with brackets [].
+ Each item inside of an array is at a numbered position, starting at 0.
+ We can access one item in an array using its numbered position, with syntax like: myArray[0].
+ We can also change an item in an array using its numbered position, with syntax like myArray[0] = "new string";
+ Arrays have a length property, which allows you to see how many items are in an array.
+ Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
+ Arrays have many other methods that perform different functions, such as .slice() and .shift(). You can read the documentation for any array method on the Mozilla Developer Network website.
+ Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable; they can be changed. However, a variable declared with const cannot be reassigned.

### Loop
**A basic `for` loop**
```js
let arr = ['Tokyo', 'Oslo', 'Mexico'];

for (let i = 0; i < arr.length; i++) {
	console.log('I would like to visit ' + arr[i]);
}
```

**Start with the hightest index in the array to the lowest**
```js
let arr = ['Tokyo', 'Oslo', 'Mexico'];
// Don't forget arr.length - 1
for (let i = arr.length; i >= 0 ; i--) {
	console.log('I would like to visit ' + arr[i]);
}
```

**The `while` loop**
```js
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';

while(currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log('The program found a spade');
```

### Scope
> Block scope means that a variable defined in the block is only accessible within the curly braces.


### Javascript Object
This how to write a JS object
```js
let myObject = {
  name : 'john',
  city : 'grenoble',
  age : 35
};
```
This how to get the value of this object
`myObject.name` or `myObject['name']`
You can add a key value pair on the fly like that :
`myOject.hobbies = ['pingpong', 'animation'];` Or like that `myOject['hobbies'] = ['pingpong', 'animation'];`

Add function to an object, this will become a method
```js
let person = {
  name : 'John',
  age : 35,
  weekendAlarm : 'No alarms needed',
  weekAlarm : 'Alarm set to 7AM',
  sayHello : () => {
    return 'hello, there!';
  }
};

console.log(person.sayHello()); // should print 'Hello, there!'

```

The ES6 syntax without arrow :
```js
const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurant() {
    if (hasDineInSpecial) {
      return 'Unlock the door, post the special on the board, then flip the open sign.';
    } else {
      return 'Unlock the door, then flip the open sign.';
    }
  }
};

```

An array of object in an Object :
```js
const team = {
  _players : [{ firstName : 'pablo', lastName : 'Sanchez', age : 11 }, { firstName : 'jojo', lastName : 'test', age : 12 }],
  _games : [{ opponent : 'Broncos', teamPoints : 42, opponentPoints : 27 }]
};

```

Access to a value :
```js
this._players[1].lastName; // -> 'test'
```

**USE THIS keyword**
to access to a value in your object instead of `objectName.KeyName` use `this.keyName`

###Iterators
example from code academy :
```js
let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

// method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// method that will return a new array
let smallerNums = nums.map(num => num - 5);

// method that will return a boolean value
nums.some(num => num < 0);
```

list of main iterator
+ forEach
+ filter
+ map
+ some
+ every
+ reduce


### Test in JS (test unitaire)

+ install nodeJS with npm : [npmjs](https://www.npmjs.com/​​)
+ test your version with `node -v` and `npm -v`
+ open terminal as admin in your location files
+ verify package.json
+ in the terminal launch dependancies with `npm install`
+ start your tests with `npm start` 


### Jquery and the DOM
Jquery is a famous JS library for manipulating the dom (since 1995).
the web page  : [jquery.com](https://jquery.com/)
To include jQuery cdn in your HTML page :

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

```

A basic function in JS when the document is ready:
```js
$(document).ready(function() {
  // add code here
});

```

A simple example :

```html
<html>
  <head>
    <title>Bouton magique</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>      
        </script>
        <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
     <div><br/><strong>Cliquez sur moi !</strong></div>   
  </body>
</html>
```

```css
div {
    height: 60px;
    width: 100px;
    border-radius: 5px;
    background-color: #69D2E7;
    text-align: center;
    color: #FFFFFF;
    font-family: Verdana, Arial, Sans-Serif;
    opacity: 0.5;
}
```

```js
$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('slow', 1);
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('slow', 0.2);
    });
});
```

Use of click:
```js
$(document).ready(function() {
    $('button').click(function() {
        $('.vanish').fadeOut();
    });
});
```

select by balise:
`$('div').fadeTo('slow', 0.3);`
select by class:
`$('.myClass').fadeOut();`
select by Id:
`$('#myId').fadeIn();`



We can also select multiple things at a time:
`$('p, .myClass2, button, #myId2').fadeIn();`
Or specific things select all p with class intro
`$('p .intro');`

[all selectors list on openclassroom](https://openclassrooms.com/courses/simplifiez-vos-developpements-javascript-avec-jquery/plus-loin-dans-la-selection-d-elements#/id/r-1638154)

Some Tips:

```js
$('.myClass').click(function(){
            $(this).remove();
        });
```

clear an input
```js
$('input[name="myinput"]').val(''); 
```

TO DO LIST with jQuery:
```html
<!DOCTYPE html>
<html>
    <head>
      <title>To Do</title>
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
    <h2>To Do</h2>
    <form name="checkListForm">
      <input type="text" name="checkListItem"/>
    </form>
    <div id="button">Add!</div>
    <br/>
    <div class="list"></div>
  </body>
</html>

```

```css
h2 {
  font-family:arial;
}

form {
  display: inline-block;
}

#button{
  display: inline-block;
  height:20px;
  width:70px;
  background-color:#cc0000;
  font-family:arial;
  font-weight:bold;
  color:#ffffff;
  border-radius: 5px;
  text-align:center;
  margin-top:2px;
}

.list {
  font-family:garamond;
  color:#cc0000;
}
```

```js
$(document).ready(function(){
    $('#button').click(function() {
        var aAjouter = $('input[name="checkListItem"]').val();
        $('.list').append('<div class="item">'+ aAjouter +'</div>');
        $('.item').click(function(){
            $(this).remove();
        });
        $('input[name="checkListItem"]').val(''); 
    });
});
```

------
Some examples:
```js
$(document).ready(function() {
  let $blogTitle = $('#title'); // 1 Sélectionne le titre du blog : "John's Blog"
  let $sideNav = $('.sidenav'); // 2. Sélectionne tous les éléments du sidemenu de gauche. 
  let $footer = $('footer'); // 3. Sélectionne le footer. 
  let $searchBar = $('.input-group:first'); // 4. Sélectionne l'élément qui permet de faire la barre de recherche. 
  let $glypgIcons = $('.glyphicon'); //  5. Sélectionne tous les glyphicons de la page. 
  let $greenLabels = $('.label-success'); // 6. Sélectionne tous les labels verts
  let $pWithIntro = $('p.intro'); // 7. Sélectionne tous les paragraphes qui ont comme classe 'intro'. 
  let $imageTime = $('img, .glyphicon-time') // 8. Sélectionne toutes les images avec toutes les icones dont la classe est 'glyphicon-time'
  let $firstSideMenu = $('.nav li:first-child'); // 9. Sélectionne le premier élément du sidemenu. 
  let $pOddEven = $('p:even');
  console.log($firstSideMenu);
  /*$firstSideMenu.fadeTo('slow', 0.1);*/
  $firstSideMenu.css('background-color', 'green');
});
```

Chage values in the dom
```js
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#test1").text("Hello world!");
    });
    $("#btn2").click(function(){
        $("#test2").html("<b>Hello world!</b>");
    });
    $("#btn3").click(function(){
        $("#test3").val("Dolly Duck");
    });
});

```

Move the DOM with Jquery
```
before
<div>
append


prepend
</div>
after
```

Select elements with multiple values
```js
$('p.intro'); // recup tous les <p> avec une classe intro
$('p .intro'); // recup tous les enfants de <p> qui ont une classe intro
$('p , .intro'); // recup tous les <p> et tous éléments avec la class intro

```

Animate a div with a keydow event
```js
$(document).ready(function() {
    $(document).keydown(function() {
        $('div').animate({left:'+=10px'}, 500);    
    });
});
```