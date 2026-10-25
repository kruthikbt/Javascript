let btn1=document.querySelector("#btn1");
let body = document.querySelector("body");
let present_mode = "Light-mode";



btn1.addEventListener("click", () => {
    if(present_mode === "Light-mode"){
        present_mode = "Dark-mode";
        //document.querySelector("body").style.backgroundColor = "black";
        //Implementation through classes.
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        present_mode = "Light-mode";
        //document.querySelector("body").style.backgroundColor = "white";
       body.classList.add("light");
     body.classList.remove("dark");
    }

    console.log(present_mode);

});

