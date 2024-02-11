// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });

  // CV
 document.getElementById('CV').onclick= function(){
   window.open("https://drive.google.com/file/d/1hchDwqcTZpRLnEiB_uCIqhCqhGWHD9JA/view?usp=sharing");
 }

 // chat
 document.getElementById('chat').onclick= function(){
   window.open("https://api.whatsapp.com/send?phone=+918375860588&text=I'm%20interested%20in%20your%20services");
 }

 // hire
   document.getElementById('Hire').onclick= function(){
   let hire =document.getElementById('Hire').innerHTML ="Hired";
   document.querySelector('.home .button a').style.display="inline";
   document.querySelector('.home .button a').style.pointerEvents="none";
   document.querySelector('.home .button a').style.color="#04AA6D";
   document.querySelector('.home .button button').style.background="#04AA6D";
   document.querySelector('.home .button button').style.color="#fff";
   document.querySelector('.home .button button').style.border="3px solid #04AA6D";
   document.querySelector('.home .button button').style.pointerEvents="none";
}

 let hired = document.querySelector('.home .button button');
 hire.mouseover =function myfunction(){
     hired.classList.add("hover");
 }
}
