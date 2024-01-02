const nav_b = document.getElementById("nav_button");
const nav_menu = document.getElementById("nav_menu");
let menu_b = document.getElementsByClassName("menu_button");
let isOpened = false;
let timeanimation = 0.3;


// SECTIONS TAG
// let head_page = document.getElementsByClassName("head_page")[0];
let tag_section = document.querySelectorAll(".tag");

let little_sqr = document.getElementsByClassName("little_sqr");



// When you Click on NavButton and It Does Animation
nav_b.onclick = _ => {

    if (isOpened === false){
        nav_b.children[0].children[0].style.transform = "translateY(15px) rotate(45deg)";
        nav_b.children[0].children[1].style.display = "none";    
        nav_b.children[0].children[2].style.transform = "translateY(-15px) rotate(-45deg)";

        if (window.innerWidth > 600){
            nav_b.style.transform = "translateX(230px)"
        }else{
            nav_b.style.transform = "translateX(180px)"
        }

        nav_menu.style.transform = "translateX(0px)";


        isOpened = true;
    }else {
        nav_b.children[0].children[0].style.transform = "translateY(0px) rotate(0deg)";
        nav_b.children[0].children[1].style.display = "block";    
        nav_b.children[0].children[2].style.transform = "translateY(0px) rotate(0deg)";
        nav_b.style.transform = "translateX(0px)";

        nav_menu.style.transform = "translateX(-100%)";
        
        isOpened = false;
    }
}



// Every Button in NavMenu is Working
for (let i = 0; i < menu_b.length; i++){
    menu_b[i].onmouseover = _ => {   
        menu_b[i].firstElementChild.style.animation = `button_animated ${timeanimation}s linear`;
        setTimeout(() => {
            menu_b[i].firstElementChild.style.removeProperty("animation")
        }, timeanimation * 1000);    
    }
    
    menu_b[i].onclick = _ =>{

        window.scroll({behavior:"smooth", top: tag_section[i].getBoundingClientRect().top - document.body.getBoundingClientRect().top + 10,})
        // tag_section[i].scrollIntoView({behavior:"smooth", block:"start" });
    }
}


// When You Scroll a Little box will change its color at The same position of your Section
window.onscroll = _ => {
    tag_section.forEach ((kkk, index) =>{
        if (scrollY >= kkk.offsetTop && scrollY < kkk.offsetTop + kkk.offsetHeight){
                little_sqr[index].style.backgroundColor = "#C8DFF5";

        }else{
            little_sqr[index].style.backgroundColor = "rgba(0,0,0,0)";
        }
    });
}


