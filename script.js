// script.js

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("terminal-input");
  const response = document.getElementById("terminal-response");

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = input.value.trim().toLowerCase();
      handleCommand(command);
      input.value = "";
    }
  });

  // Optional: allow ↓ arrow to go to next screen
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      scrollToSection("about");
    }
  });
});

function handleCommand(cmd) {
  const response = document.getElementById("terminal-response");
  switch (cmd) {
    case "help":
      response.innerText = `Available commands:
> help — show this message
> about — scroll to about
> links — scroll to links
> projects — scroll to projects`;
      break;
    case "about":
    case "links":
    case "projects":
      scrollToSection(cmd);
      break;
    default:
      response.innerText = `Unknown command: ${cmd}`;
  }
}
