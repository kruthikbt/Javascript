// console.log("Hello world");
// console.log("Where are you")
// window.console.log("Hi !How are you");
// // window.alert("Hello Everyone"); 
// console.dir(document);// Gives all the functions /properties present under document object.
// console.log(document); //Prints the complete html code in the console.

// console.dir(document.body);
// console.log(document.body);


//Selecting the elements using ids.
let id = document.getElementById("one");
console.log(id);
console.dir(id);

//Selecting the elements using class.
let myclass = document.getElementsByClassName("myclass");
console.log(myclass);
console.dir(myclass);

//Selecting the elements using tagname.
let paras= document.getElementsByTagName("p");
console.log(paras);
console.dir(paras);

//Get elements without mentioining idname,classname,tagname
let firstEl= document.querySelector("p");
console.log(firstEl);

//Gives all the elements of the given tag/class/id name.
let allEl= document.querySelectorAll("p");
console.log(allEl);

//For classes
let firstClass= document.querySelector(".myclass");
console.log(firstClass);

let allClass= document.querySelectorAll(".myclass");
console.dir(allClass);

//For Id
let idEl= document.querySelector("#one");
console.log(idEl);