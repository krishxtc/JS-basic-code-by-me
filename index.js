// Basic Code of Javascript, It's usefull when you learn JS.

//  Four Data Types In JavaScript 
// Numbers
 
var number1 = 10;
var number2 = 20;
console.log(number1 + number2);

// String  
var str1 = "This is string";
var str2 = "This is string";
console.log(str1)
console.log(str2)

// Objects  
var marks = {
    krish: 100,
    max: 92,
    jhon: 93,
}
console.log(marks)

// Booleans 

var a = true;
var b = false;
console.log(a)
console.log(b)

// Undefined 

var und;
console.log(und);

// Null 

var null1 = null;
console.log(null);

/* At a very high level, 
there are two types of datatypes in JavaScript.

1. Primitive data types: undefinde, null, number, string, boolen, symbol
2. Refernece data types: Arrays and Objects

*/

// var arr = [1,2,"Krish",4,5]

// Operators in javascript

// 1. Airithmetic Operators

var a = 5;
var b = 5;

console.log("The value of a + b is ", a + b);
console.log("The value of a - b is ", a - b);
console.log("The value of a * b is ", a * b);
console.log("The value of a / b is ", a / b);

//  2. Assingnment Operators

var c = b;
c += 2; // 7
c -= 2; // 3
c *= 2; // 10
c /= 2; // 2.5
console.log(c)
 
//  3.Comparison Operators

var x = 10;
var y = 20;
 
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x != y);

//  4. Logical Operators

//  AND
console.log(true && true);
console.log(true && false);
console.log(false && false);

//  OR
console.log(true || true);
console.log(true || false);
console.log(false || false);

//  NOT
console.log(!false);
console.log(!true);

//  Function in JavaScript
//  DRY = Do not repeat  yourself

function maths(a, b){
    return a + b
}
console.log(maths(2, 4))

//  Conditional in JS
var userAge = prompt("Enter Your age: ");

//  if statement
if(userNumber >= 18){
    alert("You can drive a vehcal.")
} 

//  if - else Statement
if(userNumber >= 18){
    alert("You can drive a vehcal.")
} else {
    alert("You can't drive vehical.")
}

//  if-else Ladder
if (userAge > 32){
    alert("You are under 32")
}
else if (userAge > 28){
    alert("You are under 28")
}
else if (userAge > 22){
    alert("You are under 22")
}
else if (userAge > 18){
    alert("You are under 18")
}

alert("End Of Game")

//  Loops in JS
var arr = [1,2,3,4,5,6,7];
console.log(arr)

for (var i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// Switch Statement
let a = 2 + 2;

switch(a){
    case 3:
        alert('Too small');
    case 4:
        alert("Exactly");
    case 5:
        alert('Too big');
}

function myName(firstName, lastName){
    alert('Hello, '+ firstName +" "+ lastName);
}
myName("Aagja","Krish")

function checkAge(Age){
    if (Age > 18){
        return alert("You can drive a vehical.")
    }
    else{
        return alert("You can't drive vehical.")
    }
}
checkAge(19)

let sum = (a,b) => {
    let result = a + b;
    return result;
}
alert(sum(1,2));

// Objects

let collegTopStudents =  {
    Surname: "Aagja",
    name: "Krish",
    SPI : 9.12,
    Enrollment: 226170316001,
}

alert("GPA In I.T. Engineering is top student name is "+collegTopStudents.Surname +" "+ collegTopStudents.name + " "+ collegTopStudents.SPI +" "+collegTopStudents.Enrollment+ " .")

const user = {
    name: "Jhon"
};

user.name = "Krish";
alert(user.name);

let user = {
    name: "Krish",
    sizes: {
        age: 17,
        height: 1.84,
        width: 65,
    }
}
let clone = Object.assign({}, user);
alert(user.sizes === clone.sizes);

user.sizes = 64;
alert(clone.sizes.width);

let user = {
    name: "Jhon",
    age: 30
};
user.sayHi = function(){
    alert("Hello! ");
};

user.sayHi();

function User(name){
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name);
alert(user.isAdmin);

//  Dates in JS
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getHours());

// Document Object Module 

let elem = document.getElementById('click');
console.log(elem);
let elemclass = document.getElementsByClassName("container");
console.log(elemclass);

elemclass[0].classList.add("bg-primary")
elemclass[0].classList.add("text-success")

elemclass[0].classList.remove("text-success")

console.log(elem.innerHTML);
console.log(elem.innerText);


console.log(elemclass[0].innerHTML);
console.log(elem.innerText);
tn = document.getElementsByTagName('div')
console.log(tn)
createElement = document.createElement('p');
createElement.innerText = "This is a created para."
tn[0].appendChild(createElement);

createElement2 = document.createElement('b');
createElement2.innerText = "This is a created bold."
tn[0].replaceChild(createElement2, createElement);
removeChild(Element)

// Selecting using Query

sel = document.querySelector('.container');
console.log(sel)
sel = document.querySelectorALL('.container')
console.log(sel)

// Events in JavaScript

function clicked(){
    console.log('The button was clicked')
}

window.onload = function(){
    console.log('The document was loaded.')
}

firstcontainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML = "We have click."
    console.log("Click Hua")
})

firstcontainer.addEventListener('mouseover', function(){
    console.log("Mouse on container")
})
firstcontainer.addEventListener('mouseout', function(){
    console.log("Mouse out container")
})

let preveHTML = document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = preveHTML;
    console.log("Mouse up container")
})
firstcontainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "We have click."
    console.log("Mouse down container")
})

//  Normal Function
function sum(a,b){
    return a + b;
}

//  Arrow Function
sum = (a,b) => {
    return a  + b ;
}

// SetTimeout and setinterval
logKaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "Set TimeOut Fired"
    console.log("I am your log")
}

clr = setTimeout(logKaro, 5000);
clr = setInterval(logKaro, 2000);

// Backticks
a = 34;
console.log(`this is my ${a}`)

//  JavaScript LocalStorage
localStorage.setItem('name','krish');
localStorage.getItem('name')
localStorage.removeItem('name')
localStorage.clear();

//  JSON
obj = {name: "Krish", length: 1,a: {this: `tht"s`}}
jso = JSON.stringify(obj);
console.log(typeof(obj))
console.log(typeof(jso))
console.log(obj)
console.log(jso)
parsed = JSON.parse(`{"name" : "Krish", "length": 1, "a": {"this":"that"}}`)
console.log(parssed);

//  Class
class User{
    Using Method constructor
    constructor(name){
    this.name = name;
    }

    sayHi(){
        alert(this.name);
    }

}

let user = new User("Jhon");
user.sayHi();

let userClass = class Myclass{
    sayhii(){
        alert(Myclass);
    }
};

new userClass.sayhii();
alert(Myclass);

class car{
    constructor(name, year);{
    this.name = name;
    this.age = age;
    }

    age(){
        const daTe = new Date();
        return daTe.getFullYear() - this.year;
    }
}

const myCar = new car('Ford',2023);
document.getElementById("demo").innerHTML = "My car is " + myCar.age() + "years old."