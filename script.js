// MENU MOBILE

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// FERMER LE MENU APRÈS UN CLIC

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


// ANNÉE AUTOMATIQUE

document.getElementById("year").textContent =
    new Date().getFullYear();


// FORMULAIRE WHATSAPP

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !subject || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    const text =
        "Bonjour TECH AND SKILL ML !\n\n" +
        "Nom : " + name + "\n" +
        "Téléphone : " + phone + "\n" +
        "Service souhaité : " + subject + "\n" +
        "Message : " + message;

    const whatsappNumber = "22378074865";

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(text);

    window.open(whatsappURL, "_blank");

});