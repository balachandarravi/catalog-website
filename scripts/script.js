// ---------------- Search Bar ----------------
document.getElementById("search-input")?.addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  let matchCount = 0;
  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    if (text.includes(filter)) {
      card.style.display = "block";
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

    var formURL = `https://docs.google.com/forms/d/e/1FAIpQLScG83Fooj9YG6lC5Vykg4D3VXoaOCJoLw88lsnx6p-Z90iDBw/viewform?usp=pp_url&entry.1047378601=${equipmentName}&entry.1457660674=${inchargeEmail}`;

    window.open(formURL, "_blank");
  });
});

// ============= IMPROVED HAMBURGER MENU ==================
function toggleMenu(event) {
  if (event) {
    event.stopPropagation();
  }
  
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.querySelector('.hamburger');
  
  if (!navMenu || !hamburger) return;
  
  navMenu.classList.toggle('open');
  hamburger.classList.toggle('active');
  
  // Prevent body scroll when menu is open
  if (navMenu.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

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