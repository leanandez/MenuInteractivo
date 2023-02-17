



const modal = document.getElementById("modal")
const cardBtn = document.getElementsByClassName("chart-cardflip")
const backBtn = document.getElementById("backBtn")

//Intro de la Web, para que solo se ejecute la primera vez que se entra
const introSection = document.getElementById("intro-section")
if (sessionStorage.getItem("animacion-intro")) {
    introSection.style.animation ="none"
         introSection.style.opacity = "0";
         introSection.style.zIndex = "-2"
     } else {
        sessionStorage.setItem("animacion-intro", "true")
     }
  


function showModal() {
  modal.classList.add("showModal")
}
function closeModal() {
  modal.classList.remove("showModal")
}





//Side Bar 
function openNav() {
  document.getElementById("mySidebar").style.width = "50%";
  document.getElementById("openBtn").style.marginLeft = "0";
  document.getElementById("openBtn").style.opacity = "0";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("openBtn").style.marginLeft = "0";
  document.getElementById("openBtn").style.opacity = "1";
}


//Iframe
function openVideo() {
  document.getElementById("video").style.width = "90vw"
  document.getElementById("video").style.height = "90vw"
}

//Funcion para Links del home

function cerveza() {
  window.location.href = "./nuestras-cervezas.html"
}










