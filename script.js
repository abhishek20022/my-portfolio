// Mobile Menu
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
  }
  
  // Dark Mode Toggle
  const toggleBtn = document.getElementById("darkToggle");
  
  // Load previous mode
  if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }
  
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  
    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "☀️";
      localStorage.setItem("mode", "dark");
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("mode", "light");
    }
  });
  