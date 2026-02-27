// ---------------- Search Bar ----------------
document.getElementById("search-input")?.addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  const isMobile = window.innerWidth <= 768;

  let matchCount = 0;
  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    if (text.includes(filter)) {
      card.style.display = isMobile ? "flex" : "";
      card.style.flexDirection = isMobile ? "column" : "";
      matchCount++;
    } else {
      card.style.display = "none";
    }
  });

  const noResultsMessage = document.getElementById("no-results");
  if (noResultsMessage) {
    noResultsMessage.style.display = matchCount === 0 ? "block" : "none";
  }
});

// ------------------ REPORT ISSUE --------------------
document.querySelectorAll(".report-btn").forEach(button => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    var equipmentName = encodeURIComponent(this.dataset.equipment);  
    var inchargeEmail = encodeURIComponent(this.dataset.incharge);  

   var formURL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd_y7JjLhHymPbY5YvdRy0lK-1XkdvnyvwO95sQBHSEnubzPA/viewform" +
  "?entry.662675588=" + equipmentName +
  "&entry.1735823310=" + inchargeEmail;
  
    window.open(formURL, "_blank");
  });
});

// ============= IMPROVED HAMBURGER MENU ==================
// ── THEME TOGGLE ──
// Replace your existing toggleTheme function with this in script.js

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

// ── ON PAGE LOAD — sync toggle button icon with saved theme ──
// Add this inside your DOMContentLoaded or at the bottom of script.js

document.addEventListener('DOMContentLoaded', function() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  // If you have a sun/moon icon that needs updating, handle it here too
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.querySelector('.hamburger');
  
  if (!navMenu || !hamburger) return;
  
  if (navMenu.classList.contains('open') && 
      !navMenu.contains(event.target) && 
      !hamburger.contains(event.target)) {
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  }
});



// Close menu on window resize
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    if (window.innerWidth > 768) {
      const navMenu = document.getElementById('navMenu');
      const hamburger = document.querySelector('.hamburger');
      
      if (navMenu && hamburger) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  }, 250);
});

// ============= THEME TOGGLE ==================
function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById('themeIcon');
  const currentTheme = html.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    html.removeAttribute('data-theme');
    icon.className = 'fas fa-moon';
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    icon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'dark');
  }
}

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const icon = document.getElementById('themeIcon');
  
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (icon) icon.className = 'fas fa-sun';
  } else {
    if (icon) icon.className = 'fas fa-moon';
  }
});