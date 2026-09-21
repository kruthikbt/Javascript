//Calculate the average marks of four students and print the average

let sum=0;
let marks=[56,78,79,80];
for(let i=0;i<marks.length;i++){
    sum += marks[i];
}

console.log(`The Total Sum is ${sum}`);  //String Literal
console.log(`The Average marks is ${sum/marks.length}`);
