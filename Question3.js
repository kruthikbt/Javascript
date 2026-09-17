// let company=["Microsoft","Bloomberg","Uber","Google","IBM","Netflix"];
// console.log(company.shift());
// company.splice(2,1,"Ola");
// console.log(company.push("Amazon"));

let marks=[20,40,50,200];
console.log(marks);

// Sumof the array
let mark=[20,40,50,200];
let sum=0;
for(let i=0;i<mark.length;i++){
    sum += mark[i];
}

console.log(`The final sum is: ${sum}`);

//Find the largest number 
// let arr = [12, 45, 7, 89, 34];
// let largest= arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i] > largest){
//         largest = arr[i];
//     }
// }
// console.log(`The largest number is ${largest}`);


// find the smallest number

// let arr = [12, 45, 7, 89, 34];
// let smallest= arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i] < smallest){
//         smallest = arr[i];
//     }
// }
// console.log(`The largest number is :${smallest}`);

// Count no of even and odd
// let arr = [10, 15, 22, 33, 40, 51];
// let even=0;
// let odd=0;
// for(i = 0;i<arr.length; i++){
//     if( arr[i] % 2 === 0){
//         even ++;
//     }
//     else{
//         odd ++;
//     }
// }

// console.log(`The total no of odd and even consicutively are :${odd} , ${even}`);


// Search foe the target
let arr = [10, 20, 30, 40, 50];
let target = 30;
let found= false;

for(let i=0; i<arr.length;i++){
    if(arr[i] === target){
       found = true;
        break;
    }
}

if (found){
    console.log("Element  found");
}
else{
    console.log("Element not found");
}


