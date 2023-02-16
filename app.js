
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

