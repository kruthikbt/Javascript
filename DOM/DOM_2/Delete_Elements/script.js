let h1 = document.createElement("h1");
h1.innerText="This is a heading";
h1.innerHTML= "<i>This is a heading</i>";//This will overwrite the innerText and add italic text.

let p=document.createElement("p");
p.innerText="This is a paragraph";

let div=document.createElement("div");
div.innerText="This is a div element";
div.style.height="250px";
div.style.width="200px";
div.style.backgroundColor="lightgray";

let unordered_list=document.createElement("ul");
unordered_list.innerHTML= "<li> List item 1</li><li>List item 2</li><li>List item 3</li>";


document.querySelector("body").prepend(h1);
document.querySelector("h1").after(p);
document.querySelector("p").after(div);
document.querySelector("div").append(unordered_list);

p.remove(); //This will remove the paragraph element from the DOM.
// div.remove(); //This will remove the div element from the DOM.
// unordered_list.remove(); //This will remove the unordered list element from the DOM.
