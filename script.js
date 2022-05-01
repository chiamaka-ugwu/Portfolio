const nav = document.getElementById("nav");
const menuIcon = document.getElementById("menu-icon");
const dropDown = document.getElementById("drop-down");
const close = document.getElementById("close");
const navs = document.querySelectorAll(".nav");
const button = document.getElementById("button");



const active = window.matchMedia("(min-width: 1100px)");
if( active.matches){
    for (var i = 0; i < navs.length; i++) {
        navs[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) { 
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        });
      }
}






// onscroll, navbar effects, scroll button
window.onscroll = function(){
    var top = window.scrollY;
    if(top >= 50){
        nav.style.backgroundColor = "white";
        nav.style.filter = "drop-shadow(0px 3px 3px rgba(83, 83, 83, 0.15))";
        button.style.display = "block";

    }
    else{
        nav.style.backgroundColor = "#f8f8f8";
        nav.style.filter = "none";
        button.style.display = "none";

    }
}

// button function
button.addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})



// hamburger menu
menuIcon.addEventListener("click", function(){
    close.style.display = "block";
    menuIcon.style.display = "none";
    dropDown.style.right = "0";
})

close.addEventListener("click", function(){
    close.style.display = "none";
    menuIcon.style.display = "block";
    dropDown.style.right = "-100%";
})



// nav links on 1000px max-width
const x = window.matchMedia("(max-width: 1000px)");

if(x.matches){
    for(var i = 0; i < navs.length; i++){
        navs[i].addEventListener('click', function(){
            close.style.display = "none";
            menuIcon.style.display = "block";
            dropDown.style.right = "-100%";
        })
    }
}



// open and close for "see more"
const text = document.querySelectorAll(".text");
const more = document.querySelectorAll(".more")

text.forEach((text) => {
    text.addEventListener('click', () =>{
        text.classList.toggle("active");
    })
})
more.forEach((more) => {
    more.addEventListener('click', () =>{
        more.classList.toggle("active");
    })
})






AOS.init();


