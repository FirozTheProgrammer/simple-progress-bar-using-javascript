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

// button active and disabled
const button = () => {
  // next button disabled
  if (3 < currentActive) {
    next.setAttribute("disabled", "");
  }

  // previous button active
  if (1 < currentActive) {
    prev.removeAttribute("disabled", "");
  }
};

// button disable and active
const buttonPrev = () => {
  // next button active
  if (4 > currentActive) {
    next.removeAttribute("disabled", "");
  }

  // previous button disabled
  if (2 > currentActive) {
    prev.setAttribute("disabled", "");
  }
};

// click next button to change progress step
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  // call update button to update progress step
  update();

  // button active and disabled
  button();
});

// click prev button to prev progress step
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  // call update button to update progress step
  update();

  // button active and disabled
  buttonPrev();
});

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      console.log(idx)
      console.log(currentActive)
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
