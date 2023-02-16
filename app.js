
const modal = document.getElementById("modal")
const cardBtn = document.getElementsByClassName("chart-cardflip")
const backBtn = document.getElementById("backBtn")

for (let i = 0; i < cardBtn.length; i++) {
    cardBtn[i].addEventListener('click', showModal);
  }

backBtn.addEventListener("click", closeModal)




function showModal(){
    modal.classList.add("showModal")
}
function closeModal(){
    modal.classList.remove("showModal")
}



//Side Bar 
function openNav() {
    document.getElementById("mySidebar").style.width = "50%";
    document.getElementById("openBtn").style.marginLeft = "0";
    document.getElementById("openBtn").style.opacity= "0";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("openBtn").style.marginLeft= "0";
    document.getElementById("openBtn").style.opacity= "1";
  }


  //Iframe
  function openVideo(){
    document.getElementById("video").style.width="90vw"
    document.getElementById("video").style.height="90vw"
  }
