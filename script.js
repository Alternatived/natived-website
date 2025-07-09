// script.js

document.addEventListener("DOMContentLoaded", () => {
  const cursorLine = document.querySelector(".blink-cursor");
  setInterval(() => {
    cursorLine.scrollIntoView({ behavior: "smooth", block: "end" });
  }, 1000);
});
