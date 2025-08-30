export default function runScripts() {
  // Copy your old 2.js content here
  // Example for skill bars:
  const skillsSection = document.getElementById("skills");
  const progressBars = document.querySelectorAll(".progress-bar");

  function showProgress() {
    progressBars.forEach((bar) => {
      const value = bar.getAttribute("data-progress");
      bar.style.width = value;
    });
  }

  window.addEventListener("scroll", () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
      showProgress();
    }
  });
}
