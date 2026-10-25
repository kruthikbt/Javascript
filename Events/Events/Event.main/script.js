 let btn3=document.querySelector("#btn3");

//  btn3.onclick = (e) => {
//     console.log("btn3 was clicked");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//  }

// let div2 =document.querySelector("#box2");
// box2.onmouseover = () =>{
//     console.log("You are inside Second Div");
// }
 
// Overwritten event...
let div_2 =document.querySelector("#box2");
// box2.onmouseover = (e) =>{
//     console.log("You are in Current Div!!");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);

// }

//Concept of AddEventListener
//Adding two event for a single html element div.
div_2.addEventListener("mouseover",() => {
    console.log("Hello User ")
    console.log("You are inside Second Div!");
})

div_2.addEventListener("click",() => {
    console.log("Hello User ")
    console.log("You have taped the div ");
})
 
//Adding two event for a single html element btn3.
btn3.addEventListener("click", (e) => {
    console.log("You have taped button3 once! - handler1");
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target);
})

btn3.addEventListener("click", () => {
    console.log("You have taped button3 twice!  - handler2");
});

// btn3.addEventListener("click", () => {
//     console.log("You are inside  button3   - handler3");
// })
const handler3= () => { //Creates both function under one variable handler3.
    console.log("You are inside  button3 - handler3");
};
btn3.addEventListener("click",handler3);

// btn3.addEventListener("dblclick", () => {
//     console.log("You have taped button3 twice!  - handler4");
// })

//Concept of remove Event. In order to delete handler 3
btn3.removeEventListener("click",handler3);
