// var nav = header.getElementsByClassName("nav");

// for (var i = 0; i < navElement.length; i++){
//     nav[i].addEventListener("click", function(){
//         var current = document.getElementsByClassName("active");
//         current[i].className = current[i].className.replace(" active", "");
//         this.className += " active";
//     });
// }


// $(document).ready(function(){

//     $('.nav').click(function(){
//         $(".nav.active").removeClass("active");
//         $(this).addClass('active');
//     });
// })



const nav = document.getElementById("nav");
const menuIcon = document.getElementById("menu-icon");

const dropDown = document.getElementById("drop-down");
const close = document.getElementById("close");


window.onscroll = function(){
    var top = window.scrollY;
    if(top >= 50){
        nav.style.backgroundColor = "white";
        nav.style.filter = "drop-shadow(0px 3px 3px rgba(83, 83, 83, 0.15))";
    }
    else{
        nav.style.backgroundColor = "#f8f8f8";
        nav.style.filter = "none";
    }
}


    

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





AOS.init();