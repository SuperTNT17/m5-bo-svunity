let modal = document.getElementById("js--event-modal");
modal.style.display = "none";

let close = document.getElementById("modal-close");
close.addEventListener("click", hideModal);

let cards = document.getElementsByClassName("event-card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", showModal);
    
}

function showModal() {
    modal.style.display = "inline";
}

function hideModal() {
    modal.style.display = "none";
}