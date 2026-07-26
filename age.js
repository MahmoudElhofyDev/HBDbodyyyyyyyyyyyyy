let age = 0;


const number =
document.getElementById("age");


const text =
document.getElementById("text");



let counter=setInterval(()=>{


age++;


number.innerHTML=age;



if(age===16){


clearInterval(counter);



number.classList.add("finish");



text.innerHTML=
"🎉 WELCOME TO 16 MOHAMED 🎂";



celebrate();



setTimeout(()=>{


window.location.href="home.html";


},3500);



}



},180);






function celebrate(){


let duration=4000;

let end=Date.now()+duration;



(function frame(){



confetti({

particleCount:10,

spread:90,

origin:{
x:0
}

});



confetti({

particleCount:10,

spread:90,

origin:{
x:1
}

});



if(Date.now()<end){

requestAnimationFrame(frame);

}



})();



}