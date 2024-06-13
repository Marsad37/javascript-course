// //Basic Variables

let myName= "Marsad";
const age= 23;
let isEmployed = true;

// //Basic Operators
// let sum = 5+3;
// let product = 4*5;

// //Control structure
// if(age>18){
//     console.log(myName + " is an adult.")

// }else{
//     console.log(myName + " is a minor.  " + age)
// }

// //Loops
// for (let i=0; i<2; i++){
//     console.log("Integration: " + i)
// }

// //Functions

// function greet(name){
//     return "Hello, " + name;
// }

// console.log(greet(myName));


// //Data Structure
//Arrays
// let fruits = ["Apple","Banana","Mango"];
// fruits.push("Orange");
// console.log(fruits)

//Objects
// let person = {
//     fname:"Ahmad",
//     age:25,
//     greet: function(){
//         return "Hi, I'm "+this.fname;
//     }
// };
// console.log(person.greet())

// //Dom Manipulation
// document.body.innerHTML = `

// <h1>Welcome To JavaScript </h1>
// <p id="demo">This is Demo Paragraph.</p>

// <button onClick="changeText()">Click Me</button>

// `;

// function changeText(){
//     document.getElementById("demo").textContent = "Text Changed";
// }

//ES6+ Featurs

// let message = `Hello, ${myName}. You are ${age} years old.`;
// console.log(message);

// //Destructuring

// let [fruit1, fruit2]  = fruits;
// console.log(fruit1, fruit2);

// //spread Operator
// let morefruits = [...fruits, "Cherry"];
// console.log(morefruits);

//Asynchronous JavaScript
//Promises
// let promise = new Promise((resolve, reject) => {
//     let success =  true;
//     if (success){
//         resolve("Operation Successful");
//     }else{
//         reject ("Operation Failed");
//     }
// });

// promise
// .then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.error(error);
// })


//Async/Await

// async function fetchData(){
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         let data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.error(error);
//     }
// }
// fetchData();

//Error Handling
// try{
//     throw new Error ("Something went wrong!");

// }catch(error){
//     console.error(error.message);
// }


//Advance Functions
//Closures
// function makeCounter(){
//     let count=0;
//     return function(){
//         count++;
//         return count;
//     };
// }

// let counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

//Higher-order Functions

// function applyOperation(a,b, operation){
//     return operation(a,b);
// }
// let result = applyOperation(5,10,(x,y)=>x+y);
// console.log(result);

//OOP Object Oriented Programming
//classes
class Animal{
    constructor(name){
        this.name= name;
    }
    speak(){
        console.log(this.name + " Makes a Noise.");
    }
}
class Dog extends Animal{
    speak(){
        console.log(this.name + " Barks.");
    }
}
let dog = new Dog ("Rex");
let animal = new Animal("AnyOne");

animal.speak();
dog.speak();

//Advance Dom Manipulation

// let newElement = document.createElement("div");
// newElement.textContent = "I am a new Element.";
// document.body.appendChild(newElement);

//Event Delegation
document.body.addEventListener("click",(event)=>{
    if(event.target.targName === "Button"){
        console.log("Button Clicked.");
    }
});

//Tooling and Build Systems
//Use tools like npm, webpack etc

//Testing
//Use Tool like Jest for testing

//Performance Optimaization
//Debouncing
function debounce(func, delay){
    let debounceTimer;
    return function(){
        clearTimeout(debounceTimer);
        debounceTimer= setTimeout(()=>func.apply(this, arguments), delay);

    };
}
let optimizedFunc = debounce(() => console.log("Debounced function"), 300);
window.addEventListener("resize", optimizedFunc);


// Thanks For Watching