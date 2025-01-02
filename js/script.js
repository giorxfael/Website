document.addEventListener("DOMContentLoaded", () => {
  // --- Typed.js Configuration ---
  new Typed("#typing", {
    strings: ["Web Developer", "Software Engineer", "I love Coding"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true,
  });

  // --- Scroll Navbar Behavior ---
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // --- Back to Top Button ---
  const backToTopButton = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // --- Smooth Scroll for Navbar Links ---
  const navbarLinks = document.querySelectorAll(".nav-links a");
  const navbarHeight = navbar.offsetHeight;

  navbarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href").substring(1);
      if (targetId === "skills") return;

      event.preventDefault();
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;
        const viewportHeight = window.innerHeight;
        const sectionHeight = targetElement.offsetHeight;

        const scrollToPosition =
          targetPosition -
          viewportHeight / 2 +
          sectionHeight / 2 -
          navbarHeight;

        window.scrollTo({
          top: scrollToPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // --- Scroll to Top on Refresh ---
  window.scrollTo({ top: 0, behavior: "auto" });

  // --- EmailJS Form Submission ---
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const serviceID = "service_slgv7dv";
    const templateID = "template_5ol7a9h";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        const feedback = document.getElementById("feedback");
        feedback.style.display = "block";
        feedback.style.color = "#ffffff";
        feedback.innerText = "Your message has been sent successfully!";
        form.reset();
      },
      (error) => {
        const feedback = document.getElementById("feedback");
        feedback.style.display = "block";
        feedback.style.color = "#ff0000";
        feedback.innerText = "Failed to send the message. Please try again.";
        console.error("EmailJS Error:", error);
      }
    );
  });
});
