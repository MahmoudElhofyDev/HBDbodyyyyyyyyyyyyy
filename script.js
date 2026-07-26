// =============================
// Music Control
// =============================


const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");


let playing = false;



musicBtn.onclick = function(){


    if(!playing){


        music.play();


        musicBtn.innerHTML =
        "⏸ Pause Music";


        playing = true;


    }

    else{


        music.pause();


        musicBtn.innerHTML =
        "▶ Play Music";


        playing = false;


    }


};







// =============================
// Photos Reveal Animation
// =============================


const photos =
document.querySelectorAll(".photo");



photos.forEach(photo=>{


    photo.style.opacity="0";

    photo.style.transform=
    "translateY(60px)";


    photo.style.transition=
    "1s";


});





window.addEventListener("scroll",()=>{


photos.forEach(photo=>{


let position =
photo.getBoundingClientRect().top;



if(position < window.innerHeight - 100){


photo.style.opacity="1";


photo.style.transform=
"translateY(0)";


}



});


});







// =============================
// Welcome Celebration
// =============================


setTimeout(()=>{


confetti({

particleCount:120,

spread:100,

origin:{
y:.7
}


});


},500);







// =============================
// Floating Light Effect
// =============================


function createLight(){


let light =
document.createElement("span");


light.className="light";



light.style.left =
Math.random()*100+"%";



light.style.animationDuration =
(3 + Math.random()*3)+"s";



document.body.appendChild(light);



setTimeout(()=>{


light.remove();


},6000);



}



setInterval(createLight,700);