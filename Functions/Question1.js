//Sum of two numbers

// function sum(a,b){
//     console.log(`The sum is ${a+b}`); //Function definition and usage of string lateral
// }

// sum(10,20); // Function call

//OR

// function sum(a,b){
//     s=a+b;
//     console.log("before return")
//     return s;
//     console.log("before return")  //will not be detected
// }

// let val=sum(3,4);
// console.log(val);

function vowel(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count); // outsid the for loop
}

vowel("Kruthik");
