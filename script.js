document.addEventListener("DOMContentLoaded", function() {
    const openFormButton = document.getElementById("openForm");
    const closeFormButton = document.getElementById("closeForm");
    const formSection = document.getElementById("JoinUsSection");

    openFormButton.addEventListener("click", function() {
        formSection.style.display = "block";
    });

    closeFormButton.addEventListener("click", function() {
        formSection.style.display = "none";
    });

    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Menghentikan pengiriman formulir
        formSection.style.display = "none";
        // form tidak muncul
        window.alert("Terima kasih atas pengiriman formulir Anda!");
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