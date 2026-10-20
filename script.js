// Update the footer year automatically.
const yearElement = document.getElementById("year");

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}

// Mobile navigation menu.
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
menuToggle.addEventListener("click", function () {
const isOpen = navLinks.classList.toggle("open");

```
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after selecting a section.
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});
```

}

console.log("Merlin Joy R's portfolio loaded successfully!");

