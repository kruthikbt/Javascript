let para= document.querySelector("p");

// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class", "new_class")); //Here the old class values will be replaced/Overwritten  by the new class values.

console.log(para.classList);
para.classList.add("new_class"); //Here the old class values will be retained and new class values will be justa added to the new class list. It will not replace the old class values. 