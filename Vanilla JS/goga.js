const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const openBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const btns = document.querySelectorAll(".question-btn");

// Responsive Navbar
navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

// Open|Close Modal
openBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

// Q & A Section
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle("show-text");
  });
});
