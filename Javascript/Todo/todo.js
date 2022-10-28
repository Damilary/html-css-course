document.title = 'My Todo App';


let todo1 = 'Get groceries';
let todo2 = 'Wash car';
let todo3 = 'Make dinner';

function addTodo(todoTitle) {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
}

addTodo(todo1);
addTodo(todo2);
addTodo(todo3);
addTodo.push(todoTitle);



    










    
// const users = []; // empty array
// const grades = [10, 8, 13, 15]; // array of numbers
const attendees = ["Sam", "Alex"]; // array of strings
const values = [10, false, "John"]; // mixed

[].length; // 0

const grades = [10, 8, 13, 15];
grades.length; // 4


const users = ["Sam", "Alex", "Charley"];
users[1]; //"Alex"

const numbers = []; // start with empty array
numbers.push(10); // returns 1 (new length of array)
console.log(numbers); // [10] (still an array but content changed)
numbers.push(20); // returns 2 (new length of array)
console.log(numbers); // [10, 20] (still an array but content changed)


/**
 * @param {array} apps
 * @param {string} app
 */
 function useApp(apps, app) {
    apps.push(app)
    return apps
}

// Sample usage - do not modify
console.log(useApp(["Clock", "Twitter"], "Firefox")); // ["Clock", "Twitter", "Firefox"]
console.log(useApp([], "Safari")); // ["Safari"]




// const ages = [10, 8, 13];

// // grades.forEach(function(age) {
// //     // do something with individual grade
// //     console.log(grade);
// // });


// // this is the callback
// function(age) {
//     console.log(grade);
// }
// // call the callback with grade = 10 (grades[0])
// console.log(grade); // will log 10
// // call the callback with grade = 8 (grades[1])
// console.log(grade); // will log 8
// // call the callback with grade = 13 (grades[2])
// console.log(grade); // will log 13










/**
 * @param {array} elements
 */
 function loopThroughElements(elements) {
    elements.forEach(function(element){
        console.log(element)
})
}


// Sample usage - do not modify
loopThroughElements(["Sam", "Charlie", "Alex"]); // should log every name to the console
