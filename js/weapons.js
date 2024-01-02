import { weapons_src, weapons_name, weapons_baseATK, weapons_source, weapons_describe, weapons_rarity, weapons_state } from "./weaponsData.js";


const weapon_cell = document.querySelectorAll(".weapon_cell");
const arrows = document.querySelectorAll(".arrow");

const name = document.getElementById("name");
const baseatk = document.getElementById("base_atk");
const source = document.getElementById("source");
const describe = document.getElementById("weapon_describe");
const rarity = document.getElementById("rarity");

const state = document.getElementById("state");
const em_hp = document.getElementById("em_hp");


let left_counter = 0;
let counter = 1;
let right_counter = 2;








function WhichWeapon() {
    weapon_cell[0].firstElementChild.setAttribute("src", weapons_src[left_counter]);
    weapon_cell[1].firstElementChild.setAttribute("src", weapons_src[counter]);
    weapon_cell[2].firstElementChild.setAttribute("src", weapons_src[right_counter]);
    
    name.innerHTML = weapons_name[counter];
    baseatk.innerHTML = weapons_baseATK[counter];
    source.innerHTML = weapons_source[counter];
    describe.innerHTML = weapons_describe[counter];
    rarity.innerHTML = weapons_rarity[counter];
    em_hp.innerHTML = weapons_state[counter];
    
    if (weapons_state[counter].includes("%")){
        state.innerHTML = "HP : ";
    }else {
        state.innerHTML = "Elemental Mastery : ";
    }
}

WhichWeapon();




arrows[0].onclick = _=>{
    left_counter = (left_counter - 1 + weapons_src.length) % weapons_src.length;
    counter = (counter - 1 + weapons_src.length) % weapons_src.length;
    right_counter = (right_counter - 1 + weapons_src.length) % weapons_src.length;
    
    WhichWeapon();
}


arrows[1].onclick = _=>{
    left_counter = (left_counter + 1) % weapons_src.length;
    counter = (counter + 1) % weapons_src.length;
    right_counter = (right_counter + 1) % weapons_src.length;
    
    WhichWeapon();
}


