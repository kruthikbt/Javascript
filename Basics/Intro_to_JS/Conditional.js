// if Statements 

// let age =15;
// if ( age > 18){
//     console.log("Can Vote");
// }
// if ( age <= 18){
//     console.log("Cannot Vote")
// }

let mood= "light";
let color;

if(mood == "dark"){
    color= "black";
}

if(mood == "light"){
    color="White";
}

console.log(color);

// else- if Statements
let mode= "dark";
let colour;

if(mode == "dark"){
    colour= "black";
}

else {
    colour="White";
}

console.log(colour);

// Odd or even question
let a=14;
if( a %2 == 0){
    console.log(a,"is Even Number");
}
else{
    console.log(a," is Odd Number")
}

// else-if 
let marks= 67;
if(marks >= 90){
    console.log("Grade A");
}

else if(marks >= 60){
    console.log("Grade B");
}
else{
    console.log("Next Year");
}

//Ternary Operator 
let age =15;
age > 18 ? console.log("adult") : console.log("not adult");

// alert("Hello");  // A pop-up message 

// Take the number from the console and print wheteher the number is divible by 5 or no.
let number = prompt("Enter the number");
(number % 5== 0)  
    ? console.log("The Number is Multiple of 5")
    : console.log("Not a Multiple of 5");

// Entering the grading by using the Logical Oppeartor

let score=10;
if( score >= 90 && score <= 100){
    console.log("Grade A");
}
if( score >= 70 && score <= 89){
    console.log("Grade B");
}
if( score >= 60 && score <= 69){
    console.log("Grade C");
}
if( score >= 50 && score <= 59){
    console.log("Grade D");
}
if( score >= 0 && score <= 49){
    console.log("Grade F");
}
