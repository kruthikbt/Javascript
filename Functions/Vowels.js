/* Count the number of vowels in the given string by using functions */

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    //Traversing through all the elements of string.
    console.log(char);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
       ) 
    {
        count ++;
    }
  }
  return count;
}

let result= countVowels("JavaScript");
console.log(`The number of Vowels are ${result}`);


//////////////////////////////////////////////////////////////////////////////////

// Arrow function format

const countVowels= (str) => {
    let count = 0;
  for (const char of str) {
    //Traversing through all the elements of string.
    console.log(char);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
       ) 
    {
        count ++;
    }
  }
  return count;
}

let result1= countVowels("AgenticAI");
console.log(`The number of Vowels are :${result1}`);

