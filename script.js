"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    siteNav.classList.toggle("is-open", !isExpanded);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    }
  });
}

document.querySelectorAll("[data-current-year]").forEach((year) => {
  year.textContent = String(new Date().getFullYear());
});

const contactForm = document.querySelector("#contact-form");

if (contactForm instanceof HTMLFormElement) {
  const emailInput = contactForm.querySelector("#email");
  const status = contactForm.querySelector("#form-status");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!(emailInput instanceof HTMLInputElement) || !(status instanceof HTMLElement)) {
      throw new Error("The contact form is missing its email field or status message.");
    }

    if (!emailInput.validity.valid) {
      status.textContent = emailInput.validity.valueMissing
        ? "Please enter your email address."
        : "Please enter a valid email address, like you@example.com.";
      emailInput.focus();
      return;
    }

    status.textContent = "Thanks! Your email looks valid. This demo form does not send or store messages.";
    contactForm.reset();
  });
}
