let append = document.querySelector("h2");
console.dir(append.innerText);

append.innerText = append.innerText + " from Apna College"; //Concatination

console.dir(append.innerText);

let divs= document.querySelectorAll(".box");
console.log(divs);

let idx=1;
for(div of divs){
    div.innerText= `Unique value ${idx}`; //for of loop.
    idx++;
}
// divs[0].innerText="First_div";
// divs[1].innerText="Second_div";
// divs[2].innerText="Third_div";
