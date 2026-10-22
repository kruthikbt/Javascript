let button=document.createElement("button");//create a button element
button.innerText="Click Me";
console.log(button);

//Access div element
let div=document.querySelector("#new_div");
div.append(button); //append button to div at the end of div.

let para=document.createElement("p");//create a paragraph element  
para.innerText="This is a simple paragraph";
div.prepend(para); //prepend paragraph to div at the start of div.

let h1=document.createElement("h1");//create a heading h1 element
h1.innerText="This is a heading";
para.before(h1); //insert heading before paragraph.


let h4=document.createElement("h4");//create a heading h4 element
h4.innerText="This is a Lastheading";
div.after(h4); //insert heading h4 after div element.




div.style.width="150px";
div.style.height="350px";