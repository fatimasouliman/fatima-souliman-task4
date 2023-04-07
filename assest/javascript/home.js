let choices= document.querySelectorAll(".choices li");
let cards= document.querySelectorAll(".cards .card");
choices.forEach((li) => {
    li.addEventListener("click",removeActive);
    li.addEventListener("click",remove);
});
function removeActive() {
    choices.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}
function remove() {
    cards.forEach((card) => {
        card.style.display="none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display="flex";
        
    })   
}

