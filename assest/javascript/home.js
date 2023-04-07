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
const searchBar = () => {
    let search = document.getElementById("search");
    let filter = search.value.toUpperCase();
    let employees = document.querySelector(".cards");
    let employee = document.querySelectorAll(".card");
    for (i = 0; i < employee.length; i++) {
        let a = employee[i].getElementsByTagName("h1")[0];
        let txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            console.log(txtValue.toUpperCase().indexOf(filter));
            employee[i].style.display = "";
        } else {
            employee[i].style.display = "none";
        }
    }
}
