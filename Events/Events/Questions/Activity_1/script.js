let btn1 = document.querySelector("button");
let body = document.querySelector("body");
let present_mode = "light";

btn1.addEventListener( "mouseover",() =>{
    if(present_mode === "light"){
        present_mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        present_mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        console.log(present_mode);
    }
})

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("mouseover", () => {
    btn2.classList.add("blue");
    console.log("Color Changed");
})

btn2.addEventListener("mouseout", () => {
    btn2.classList.add("red");
    console.log("Color Changed");
})