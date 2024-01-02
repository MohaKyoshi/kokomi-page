const talent_icons = document.getElementsByClassName("talent_icons")[0].children;
const talent_video_container = document.getElementsByClassName("talent_video_container")[0].firstElementChild;
const para_container = document.getElementsByClassName("para_container")[0];
const title = document.getElementsByClassName("talent_text_container")[0].firstElementChild;

const talent_selector = document.getElementById("talent_selector");


para_container.children[1].firstElementChild.style.display = "none";
para_container.children[1].lastElementChild.style.display = "none";

for (let i = 0; i < talent_icons.length; i++){
    talent_icons[i].style.border = "3px solid var(--lightBlue-clr)";
    talent_icons[0].style.border = "3px solid var(--purple-clr)";
}

if (window.innerWidth > 1050){
    talent_selector.style.left = talent_icons[0].getBoundingClientRect().left - 113 +"px";
    if (talent_selector.style.display === "none"){
        talent_selector.style.display = "block";
    }
    
}else if (window.innerWidth <= 1050) {
    talent_selector.style.display = "none";
}

for (let i = 0; i < talent_icons.length; i++){
    talent_icons[i].addEventListener('click',   _ =>{
        if (i === 0){
            title.innerHTML = "Normal Attack: The Shape of Water";
            talent_video_container.setAttribute("src", "./images/talent_video/battle_talent_0.gif");
            if (talent_video_container.parentElement.style.display === "none"){
                talent_video_container.parentElement.style.display = "block";
            }

            // Show or Not
            if (para_container.children[0].firstElementChild.style.display === "none"){
                para_container.children[0].firstElementChild.style.display = "block";
            }
            if (para_container.children[1].firstElementChild.style.display !== "none"){
                para_container.children[1].firstElementChild.style.display = "none";
            }
            if (para_container.children[2].firstElementChild.style.display === "none"){
                para_container.children[2].firstElementChild.style.display = "block";
            }
            if (para_container.children[3].firstElementChild.style.display === "none"){
                para_container.children[3].firstElementChild.style.display = "block";
            }

            if (para_container.children[0].lastElementChild.style.display === "none"){
                para_container.children[0].lastElementChild.style.display = "block";
            }
            if (para_container.children[1].lastElementChild.style.display !== "none"){
                para_container.children[1].lastElementChild.style.display = "none";
            }
            if (para_container.children[2].lastElementChild.style.display === "none"){
                para_container.children[2].lastElementChild.style.display = "block";
            }
            if (para_container.children[3].lastElementChild.style.display === "none"){
                para_container.children[3].lastElementChild.style.display = "block";
            }



            // Text
            para_container.children[0].firstElementChild.innerHTML = "Normal Attack";
            para_container.children[0].lastElementChild.innerHTML = "Performs up to 3 consecutive attacks that take the form of swimming fish, dealing Hydro DMG.";

            para_container.children[2].firstElementChild.innerHTML = "Charged Attack";
            para_container.children[2].lastElementChild.innerHTML = "Consumes a certain amount of Stamina to deal AoE Hydro DMG after a short casting time.";

            para_container.children[3].firstElementChild.innerHTML = "Plunging Attack";
            para_container.children[3].lastElementChild.innerHTML = "Gathering the might of Hydro, Kokomi plunges towards the ground from mid-air, damaging all opponents in her path. Deals AoE Hydro DMG upon impact with the ground.";


            
            
        }else if (i === 1){
            title.innerHTML = "Kurage's Oath";
            talent_video_container.setAttribute("src", "./images/talent_video/battle_talent_1.gif");
            if (talent_video_container.parentElement.style.display === "none"){
                talent_video_container.parentElement.style.display = "block";
            }


            // Show or Not
            if (para_container.children[0].firstElementChild.style.display !== "none"){
                para_container.children[0].firstElementChild.style.display = "none";
            }
            if (para_container.children[1].firstElementChild.style.display !== "none"){
                para_container.children[1].firstElementChild.style.display = "none";
            }
            if (para_container.children[2].firstElementChild.style.display === "none"){
                para_container.children[2].firstElementChild.style.display = "block";
            }
            if (para_container.children[3].firstElementChild.style.display !== "none"){
                para_container.children[3].firstElementChild.style.display = "none";
            }

            if (para_container.children[0].lastElementChild.style.display === "none"){
                para_container.children[0].lastElementChild.style.display = "block";
            }
            if (para_container.children[1].lastElementChild.style.display !== "none"){
                para_container.children[1].lastElementChild.style.display = "none";
            }
            if (para_container.children[2].lastElementChild.style.display === "none"){
                para_container.children[2].lastElementChild.style.display = "block";
            }
            if (para_container.children[3].lastElementChild.style.display === "none"){
                para_container.children[3].lastElementChild.style.display = "block";
            }


            // Text
            para_container.children[0].lastElementChild.innerHTML = "Summons a \"Bake-Kurage\" created from water that can heal her allies. Using this skill will apply the Wet status to Sangonomiya Kokomi.";

            para_container.children[2].firstElementChild.innerHTML = "Bake-Kurage";
            para_container.children[2].lastElementChild.innerHTML = "Deals Hydro DMG to surrounding opponents and heals nearby active characters at fixed intervals. This healing is based on Kokomi's Max HP.";


            para_container.children[3].lastElementChild.innerHTML = "Kokomi needs timely \"refreshment\" in order to maintain optimal work efficiency.";



        }else if (i === 2){
            title.innerHTML = "Nereid's Ascension";
            talent_video_container.setAttribute("src", "./images/talent_video/battle_talent_2.gif");
            if (talent_video_container.parentElement.style.display === "none"){
                talent_video_container.parentElement.style.display = "block";
            }

            
            // Show or Not
            if (para_container.children[0].firstElementChild.style.display !== "none"){
                para_container.children[0].firstElementChild.style.display = "none";
            }
            if (para_container.children[1].firstElementChild.style.display === "none"){
                para_container.children[1].firstElementChild.style.display = "block";
            }
            if (para_container.children[2].firstElementChild.style.display !== "none"){
                para_container.children[2].firstElementChild.style.display = "none";
            }
            if (para_container.children[3].firstElementChild.style.display !== "none"){
                para_container.children[3].firstElementChild.style.display = "none";
            }

            if (para_container.children[0].lastElementChild.style.display === "none"){
                para_container.children[0].lastElementChild.style.display = "block";
            }
            if (para_container.children[1].lastElementChild.style.display === "none"){
                para_container.children[1].lastElementChild.style.display = "block";
            }
            if (para_container.children[2].lastElementChild.style.display === "none"){
                para_container.children[2].lastElementChild.style.display = "block";
            }
            if (para_container.children[3].lastElementChild.style.display === "none"){
                para_container.children[3].lastElementChild.style.display = "block";
            }

            

            para_container.children[0].lastElementChild.innerHTML = "Summons the might of Watatsumi, dealing Hydro DMG to surrounding opponents, before robing Kokomi in a Ceremonial Garment made from the flowing waters of Sangonomiya.";

            //list is working here

            para_container.children[2].lastElementChild.innerHTML = "These effects will be cleared once Sangonomiya Kokomi leaves the field.";
            
            para_container.children[3].lastElementChild.innerHTML = "Clear light coalesces into robes around Her Excellency, Sangonomiya Kokomi, reflecting her magnificent form.";



        }else if (i === 3){
            title.innerHTML = "Tamakushi Casket";
            if (talent_video_container.parentElement.style.display !== "none"){
                talent_video_container.parentElement.style.display = "none";
            }
            


            // Show or Not
            if (para_container.children[0].firstElementChild.style.display !== "none"){
                para_container.children[0].firstElementChild.style.display = "none";
            }
            if (para_container.children[1].firstElementChild.style.display !== "none"){
                para_container.children[1].firstElementChild.style.display = "none";
            }
            if (para_container.children[2].firstElementChild.style.display !== "none"){
                para_container.children[2].firstElementChild.style.display = "none";
            }
            if (para_container.children[3].firstElementChild.style.display !== "none"){
                para_container.children[3].firstElementChild.style.display = "none";
            }

            if (para_container.children[0].lastElementChild.style.display === "none"){
                para_container.children[0].lastElementChild.style.display = "block";
            }
            if (para_container.children[1].lastElementChild.style.display !== "none"){
                para_container.children[1].lastElementChild.style.display = "none";
            }
            if (para_container.children[2].lastElementChild.style.display !== "none"){
                para_container.children[2].lastElementChild.style.display = "none";
            }
            if (para_container.children[3].lastElementChild.style.display !== "none"){
                para_container.children[3].lastElementChild.style.display = "none";
            }


            para_container.children[0].lastElementChild.innerHTML = "If Sangonomiya Kokomi's own Bake-Kurage is on the field when she uses Nereid's Ascension, the Bake-Kurage's duration will be refreshed.";



        }else if (i === 4){
            title.innerHTML = "Song of Pearls";
            if (talent_video_container.parentElement.style.display !== "none"){
                talent_video_container.parentElement.style.display = "none";
            }


            // Show or Not
            if (para_container.children[0].firstElementChild.style.display !== "none"){
                para_container.children[0].firstElementChild.style.display = "none";
            }
            if (para_container.children[1].firstElementChild.style.display !== "none"){
                para_container.children[1].firstElementChild.style.display = "none";
            }
            if (para_container.children[2].firstElementChild.style.display !== "none"){
                para_container.children[2].firstElementChild.style.display = "none";
            }
            if (para_container.children[3].firstElementChild.style.display !== "none"){
                para_container.children[3].firstElementChild.style.display = "none";
            }

            if (para_container.children[0].lastElementChild.style.display === "none"){
                para_container.children[0].lastElementChild.style.display = "block";
            }
            if (para_container.children[1].lastElementChild.style.display !== "none"){
                para_container.children[1].lastElementChild.style.display = "none";
            }
            if (para_container.children[2].lastElementChild.style.display !== "none"){
                para_container.children[2].lastElementChild.style.display = "none";
            }
            if (para_container.children[3].lastElementChild.style.display !== "none"){
                para_container.children[3].lastElementChild.style.display = "none";
            }


            para_container.children[0].lastElementChild.innerHTML = "While donning the Ceremonial Garment created by Nereid's Ascension, the Normal and Charged Attack DMG Bonus Sangonomiya Kokomi gains based on her Max HP will receive a further increase based on 15% of her Healing Bonus.";



        }else if (i === 5){
            title.innerHTML = "Princess of Watatsumi";
            if (talent_video_container.parentElement.style.display !== "none"){
                talent_video_container.parentElement.style.display = "none";
            }


            // Show or Not
            if (para_container.children[0].firstElementChild.style.display !== "none"){
                para_container.children[0].firstElementChild.style.display = "none";
            }
            if (para_container.children[1].firstElementChild.style.display !== "none"){
                para_container.children[1].firstElementChild.style.display = "none";
            }
            if (para_container.children[2].firstElementChild.style.display !== "none"){
                para_container.children[2].firstElementChild.style.display = "none";
            }
            if (para_container.children[3].firstElementChild.style.display !== "none"){
                para_container.children[3].firstElementChild.style.display = "none";
            }

            if (para_container.children[0].lastElementChild.style.display === "none"){
                para_container.children[0].lastElementChild.style.display = "block";
            }
            if (para_container.children[1].lastElementChild.style.display !== "none"){
                para_container.children[1].lastElementChild.style.display = "none";
            }
            if (para_container.children[2].lastElementChild.style.display === "none"){
                para_container.children[2].lastElementChild.style.display = "block";
            }
            if (para_container.children[3].lastElementChild.style.display !== "none"){
                para_container.children[3].lastElementChild.style.display = "none";
            }


            para_container.children[0].lastElementChild.innerHTML = "Decreases swimming Stamina consumption for your own party members by 20%.";
            para_container.children[2].lastElementChild.innerHTML = "Not stackable with Passive Talents that provide the exact same effects.";


        }else{
            title.innerHTML = "Flawless Strategy";
            if (talent_video_container.parentElement.style.display !== "none"){
                talent_video_container.parentElement.style.display = "none";
            }


            // Show or Not
            if (para_container.children[0].firstElementChild.style.display !== "none"){
                para_container.children[0].firstElementChild.style.display = "none";
            }
            if (para_container.children[1].firstElementChild.style.display !== "none"){
                para_container.children[1].firstElementChild.style.display = "none";
            }
            if (para_container.children[2].firstElementChild.style.display !== "none"){
                para_container.children[2].firstElementChild.style.display = "none";
            }
            if (para_container.children[3].firstElementChild.style.display !== "none"){
                para_container.children[3].firstElementChild.style.display = "none";
            }

            if (para_container.children[0].lastElementChild.style.display === "none"){
                para_container.children[0].lastElementChild.style.display = "block";
            }
            if (para_container.children[1].lastElementChild.style.display !== "none"){
                para_container.children[1].lastElementChild.style.display = "none";
            }
            if (para_container.children[2].lastElementChild.style.display !== "none"){
                para_container.children[2].lastElementChild.style.display = "none";
            }
            if (para_container.children[3].lastElementChild.style.display !== "none"){
                para_container.children[3].lastElementChild.style.display = "none";
            }


            para_container.children[0].lastElementChild.innerHTML = "Sangonomiya Kokomi has a 25% Healing Bonus, but a 100% decrease in CRIT Rate.";


        }

        for (let j = 0; j < talent_icons.length; j++){
            talent_icons[j].style.border = "3px solid var(--lightBlue-clr)";
            talent_icons[i].style.border = "3px solid var(--purple-clr)";

        }

        if (window.innerWidth > 1050){
            talent_selector.style.left = talent_icons[i].getBoundingClientRect().left - 113 +"px";
            if (talent_selector.style.display === "none"){
                talent_selector.style.display = "block";
            }
            
        }else if (window.innerWidth <= 1050) {
            talent_selector.style.display = "none";
        }
        
    });

}



