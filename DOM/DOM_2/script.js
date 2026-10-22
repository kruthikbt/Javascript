// let div= document.querySelector("div");
// console.dir(div);

// let value = div.getAttribute("id");
// console.log(div.setAttribute("id","new_id"));

let p=document.querySelector("p");
// let value_1=p.getAttribute("class");
// console.log(value_1);
console.log(p.setAttribute("class","new_class")); //setAttribute


console.log(p.setAttribute("class","my_class"));

//Changing the style of the element using javascript.
let div= document.querySelector("div");
div.style.backgroundColor="red";

console.log(div.style); //prints all the styles of the element under style object.

div.style.fontSize="50px";
div.innerText="Hello World";
// div.style.visibility="hidden"; //hides the element from the page but still takes up space in the page.