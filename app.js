


const modal = document.getElementById("modal")
const cardBtn = document.getElementsByClassName("chart-cardflip")
const backBtn = document.getElementById("backBtn")


//para boton del modal-video
const modalVideo = document.getElementById("modal-video")
const modalIframe=document.getElementById("modal-iframe")

function showModalVideo(){
  modalVideo.classList.add("show-modal-video")
  modalIframe.setAttribute("src", "https://www.youtube.com/embed/-dQrMc9VD6A")
}
function closeModalVideo(){
  modalVideo.classList.remove("show-modal-video")
  modalIframe.removeAttribute("src")
  
}


//Intro de la Web, para que solo se ejecute la primera vez que se entra
const introSection = document.getElementById("intro-section")
if (sessionStorage.getItem("animacion-intro")) {
  introSection.style.animation = "none"
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

  if ($(window).width() < 767) {
    document.getElementById("mySidebar").style.width = "50%";
    document.getElementById("openBtn").style.marginLeft = "0";
    document.getElementById("openBtn").style.opacity = "0";
  }
  if ($(window).width() > 767){
    document.getElementById("mySidebar").style.width = "30%";
    document.getElementById("openBtn").style.marginLeft = "0";
    document.getElementById("openBtn").style.opacity = "0";
  }

}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("openBtn").style.marginLeft = "0";
  document.getElementById("openBtn").style.opacity = "1";
}



//Funcion para Links del home

function cerveza() {
  window.location.href = "./nuestras-cervezas.html"
}

function itemDetail() {
  window.location.href = "./ItemDetail.html"
}









