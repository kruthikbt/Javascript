let n =prompt("Enter the number whose table has to be calculated and displayed:");
function table(n){
    for(let i=0;i<=10;i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
    
}

table(n)