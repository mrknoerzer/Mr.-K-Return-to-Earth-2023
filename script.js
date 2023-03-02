let choice1=document.querySelector(".choice1");
let header=document.querySelector("h1");
let img=document.querySelector("img");
let message=document.querySelector("h2");
let next=document.querySelector("h3");
let jupiter=document.querySelector(".Jupiter");
let choices=document.querySelector(".choices");
let alien=document.querySelector(".alien");


let choice2=document.querySelector(".choice2");
let neptune=document.querySelector(".neptune");
let planet_choice2=document.querySelector(".planet_choice2");

let choice3=document.querySelector(".choice3");
let mars=document.querySelector(".mars");
let mercury=document.querySelector(".mercury");

let choice4=document.querySelector(".choice4");
let final_choice=document.querySelector(".final_choice");

let burn=document.querySelector(".bad_end");
let second_choice_buttons=document.querySelector(".second_choice_buttons");

let mercury2=document.querySelector(".mercury2");
let earth=document.querySelector(".earth");


choice1.onclick=function(){
    header.innerHTML="Nope.  Now you're way out there!!!  Try again.";
    img.style.display="none";
    message.innerHTML=" This is Neptune";
    next.style.display="none";
    jupiter.style.display="none";
    choices.style.display="none";
    alien.style.display="block";
};

choice2.onclick=function(){
  img.src = "https://cdn.britannica.com/s:800x1000/66/155966-131-17B5B518/Jupiter.jpg";
  img.style.width="400px";
  neptune.style.display="none";
  jupiter.style.display="none";
  message.innerHTML="Good choice!  Now you're a little closer to home!!";
  planet_choice2.style.display="block";
  choices.style.display="none";
 
};

choice3.onclick=function(){
  choice3.style.display="none";
  choice4.style.display="none";
  mercury.style.display="none";
  mars.style.display="none";
  message.innerHTML="So close, you're almost home";
  img.src = "https://cdn.cnn.com/cnnnext/dam/assets/180725085608-01-mars-lake-radar-evidence-exlarge-169.jpg";
  final_choice.style.display="block";
};

choice4.onclick=function(){
  mars.style.display="none";
  mercury.style.display="none";
  img.style.display="none";
  message.innerHTML="That's mercury.  Now you're toast.  Sorry try again.";
  burn.style.display="block";
  second_choice_buttons.style.display="none";
  next.style.display="none";
};

earth.onclick=function(){
  message.innerHTML="You win!  You're back on earth now!!";
  img.src = "https://media.nationalgeographic.org/assets/photos/000/276/27633.jpg";
  next.style.display="none";
  mercury2.style.display="none";
  earth.style.display="none";
  
};



