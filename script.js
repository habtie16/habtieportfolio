
// 1. MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isOpen =
        navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a")
.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.textContent = "☰";

    });

});


// 2. DARK AND LIGHT MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    const darkMode =
        document.body.classList.contains("dark");

    themeBtn.textContent = darkMode ? "☀️" : "🌙";

});


// 3. CONTACT FORM VALIDATION

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (name.length < 2) {

        formStatus.textContent =
            "Please enter your name.";

        return;
    }


    if (!email.includes("@") || !email.includes(".")) {

        formStatus.textContent =
            "Please enter a valid email.";

        return;
    }


    if (message.length < 10) {

        formStatus.textContent =
            "Message must contain at least 10 characters.";

        return;
    }


    formStatus.textContent =
        "Thank you, " + name +
        "! Your form is valid.";

    contactForm.reset();

});

