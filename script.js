


document.addEventListener("DOMContentLoaded", function() {
    const openFormButton = document.getElementById("openForm");
    const closeFormButton = document.getElementById("closeForm");
    const overlay = document.getElementById("overlay");

    openFormButton.addEventListener("click", function() {
        overlay.style.display = "block";
    });

    closeFormButton.addEventListener("click", function() {
        overlay.style.display = "none";
    });
});

// Menggunakan event listener untuk kartu pertama
const card1 = document.querySelector("#card1 .card__inner");

card1.addEventListener("click", function() {
    card1.classList.toggle("is-flipped");
});

// Menggunakan event listener untuk kartu kedua
const card2 = document.querySelector("#card2 .card__inner");

card2.addEventListener("click", function() {
    card2.classList.toggle("is-flipped");
});