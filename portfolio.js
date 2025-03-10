
document.addEventListener("DOMContentLoaded", function () {
  // Form Validation with Dynamic Error Messages
  const form = document.querySelector(".contact-form form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const errorMsg = document.querySelector(".error-message");

    if (
      name.value.trim() === "" ||
      email.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      errorMsg.textContent = "All fields are required!";
      return;
    }
    errorMsg.textContent = "";
    alert("Form submitted successfully!");
    form.reset();
  });

  // Highlight Active Section on Scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-list ul li a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});
