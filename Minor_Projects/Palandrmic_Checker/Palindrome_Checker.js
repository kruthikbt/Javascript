

let string=prompt("Enter the string  to check the palindromic Sequence:");


function palindrome(string){
    let reversed= string.split("").reverse().join("");
    if(string === reversed){
        console.log("The Entered value is Palindromic ");
    }
    else{
        console.log("Not a Palandromic Sequence");
    }
}

palindrome(string);