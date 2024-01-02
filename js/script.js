const bubble_container = document.getElementsByClassName("bubble_container")[0];

// SIGN MENU
const sign_menu_container = document.getElementById("sign_menu_container");
const close_sign_menu = document.getElementById("close_sign_menu");
const sign_menu = document.querySelector(".sign_menu"); // THE MENU ITSELF
const sign_b = document.getElementById ("sign_button");
const login_b = document.getElementById("login_button");
const inputs_menu = document.querySelectorAll("input");
let modes = "sign_mode";

const under_submet = document.querySelector(".under_submet");

// Change Mode
const input_info = document.querySelectorAll(".input_info");
const info_form = document.getElementById("get_info_form");
const upper_title_menu = document.querySelector(".upper_title_menu");



// BACKGROUND ANIMATION
function create_bubble (){
    for (let i = 0; i < 3; i++){
        let bubble_size = Math.floor (Math.random() * (200 - 20 + 1)) +20;
        let random_time = Math.floor (Math.random() * (20 - 10 + 1)) +10;

        
        let bubble = document.createElement("div");
        bubble.classList.add ("bubble");
        bubble_container.appendChild(bubble);


   
        bubble.style.width = bubble_size + "px";
        bubble.style.height = bubble_size + "px";
        bubble.style.animationDuration = random_time + "s";
        
    }
    
}
create_bubble ();

function bubble_remover() {
    Array.from(bubble_container.children).forEach(bubble_in =>{
        let bubble_position_top = Math.floor (Math.random() * 75) +1;
        let leftPosition = bubble_in.getBoundingClientRect().left;
        if (leftPosition >= window.innerWidth){
            bubble_in.remove();
        } 

        if (leftPosition < -300){
            bubble_in.style.top = bubble_position_top + "dvh";
        }
    });
    
}



setInterval(() => {
    create_bubble();
}, 10000);

setInterval(() => {
    bubble_remover();
}, 1000);



// SIGN IN AND LOGIN SECTION
let menu_time_animation = 0.2;

function open_sign_menu() {
    sign_menu_container.style.display = "flex";
    sign_menu.style.animation = `menu_animation ${menu_time_animation}s forwards linear`;

    setTimeout(() => {
        sign_menu.style.removeProperty("animation");
    }, menu_time_animation * 1000);

    if (modes === "sign_mode"){


        input_info[0].setAttribute('placeholder', 'Username')
        input_info[1].style.display = "inline-block";
        input_info[3].style.display = "inline-block";

        upper_title_menu.innerHTML = "Sign in";     
        under_submet.firstElementChild.innerHTML = "Already Have an account";
        under_submet.lastElementChild.innerHTML = "Login here!";

    }else{
        
        input_info[0].setAttribute('placeholder', 'Username or Email')
        input_info[1].style.display = "none";
        input_info[3].style.display = "none";

        upper_title_menu.innerHTML = "Login";     
        under_submet.firstElementChild.innerHTML = "Don't Have an Account";
        under_submet.lastElementChild.innerHTML = "Sign in here!";

    }
}



sign_b.onclick = _ => {
    modes = "sign_mode";
    open_sign_menu();


}

login_b.onclick = _ => {
    modes = "login_mode";
    open_sign_menu();

}


close_sign_menu.onclick = _ =>{
    sign_menu.style.animation = `menu_animation ${menu_time_animation}s forwards reverse linear`;

    setTimeout(() => {
        sign_menu_container.style.display = "none";
        sign_menu.style.removeProperty("animation");
    }, menu_time_animation * 1000);
}


// MODE CHANGER
const input_timer = 1.2;


under_submet.lastElementChild.onclick = _=>{
    if (modes === "sign_mode"){

        info_form.style.animation = `input_animation ${input_timer}s linear`


        setTimeout(() => {
            input_info[0].setAttribute('placeholder', 'Username or Email')
            input_info[1].style.display = "none";
            input_info[3].style.display = "none";
        }, input_timer * 1000 / 2);

        setTimeout(() => {
            info_form.style.removeProperty("animation");
        }, input_timer * 1000);

        
            
        upper_title_menu.innerHTML = "Login";
        under_submet.firstElementChild.innerHTML = "Don't Have an Account";
        under_submet.lastElementChild.innerHTML = "Sign in here!";
        
        
        modes = "login_mode";
    }else {

        info_form.style.animation = `input_animation ${input_timer}s linear`


        setTimeout(() => {
            input_info[0].setAttribute('placeholder', 'Username')
            input_info[1].style.display = "inline-block";
            input_info[3].style.display = "inline-block";
        }, input_timer * 1000 / 2);

        setTimeout(() => {
            info_form.style.removeProperty("animation");
        }, input_timer * 1000);

        
        upper_title_menu.innerHTML = "Sign in";     
        under_submet.firstElementChild.innerHTML = "Already Have an account";
        under_submet.lastElementChild.innerHTML = "Login here!";
            
        modes = "sign_mode";   
        }
}


const scroll_b = document.getElementById ("scroll_button");

document.onscroll = _ =>{
    scrolling();
}

function scrolling (){
    if (scrollY >= 400){
        scroll_b.style.display = "block";
    }else{
        scroll_b.style.display = "none";
    }
}

scroll_b.onclick = _ =>{
    scrollTo ({top:0, behavior:"smooth",});
}








// Footer's Background Animation
const fish_onFooter = document.querySelector(".fish_animation");



for (let i = 0; i < 10; i++){
    let fish_left_position = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
    let fish_top_position = Math.floor(Math.random() * (320 - 0 + 1)) + 0;
    let fish_timer = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
    
    let fof = document.createElement("img");
    fof.setAttribute("src", "./images/constellation_1.png");
    fof.style.top = `${fish_top_position}px`;
    fof.style.left = `-${fish_left_position}px`;
    fof.style.animation = `footer_background_animation ${fish_timer}s linear infinite`;
    fish_onFooter.appendChild(fof);
}



