// progress bar
const progress = document.querySelector(".progress");

// prev button
const prev = document.getElementById("prev");

// next button
const next = document.getElementById("next");

// progress circle
const circles = document.querySelectorAll(".circle");

// current active circle
let currentActive = 1;

// click next button to change progress step
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  // call update button to update progress step
  update();
});

// click prev button to prev progress step
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  // call update button to update progress step
  update();
});

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      // add acive class
      circle.classList.add("active");
    } else {
      // remove active class
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  // update progress bar
  const progressBar = ((actives.length - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressBar}%`;
};
