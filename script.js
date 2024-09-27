console.log("//--- Variables Example ---");

var x = 15;
console.log(x);  

var x = 25;  
var x = 35;  
console.log(x);  

function letExample() {
    let y = 50;  
    console.log(y);  
    y = 80;  
    console.log(y);  
}
letExample();

const z = 100;
console.log(z); 

console.log("//--- Data Types Example ---");

function dataTypeExample() {
    var numberValue = 42; 
    console.log(typeof(numberValue));  

    var stringValue = 'John Doe';  
    console.log(typeof(stringValue));  

    var boolValue = true;  
    console.log(typeof(boolValue));  

    var undefinedValue;  
    console.log(typeof(undefinedValue));  

    var nullValue = null;  
    console.log(typeof(nullValue));  
}
dataTypeExample();

console.log("------- Synchronous Example --------");

function synchronousExample() { 
    console.log("Start Task 1");
    console.log("Start Task 2");
    console.log("Start Task 3");
    console.log("Start Task 4");
    console.log("Finish All Tasks");
}
synchronousExample(); 

console.log("------- Asynchronous Example --------");

function asynchronousExample() {
    console.log("Task A");
    console.log("Task B");

    setTimeout(() => {
        console.log("This message is delayed by 3 seconds"); 
    }, 3000);

    console.log("Task C");
    console.log("Task D");
}
asynchronousExample();  