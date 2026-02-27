// ============= HAMBURGER MENU =============
function toggleMenu(event) {
  event.stopPropagation();
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.querySelector('.hamburger');
  navMenu.classList.toggle('open');
  hamburger.classList.toggle('active');
}

// Close menu when a nav link is clicked
document.querySelectorAll('.mini_nav a').forEach(function(link) {
  link.addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
  });
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
  }
});

// Close menu on resize back to desktop
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    if (navMenu) navMenu.classList.remove('open');
    if (hamburger) hamburger.classList.remove('active');
  }
});


// ============= THEME TOGGLE =============
function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById('themeIcon');
  const isDark = html.getAttribute('data-theme') === 'dark';

  if (isDark) {
    html.removeAttribute('data-theme');
    if (icon) icon.className = 'fas fa-moon';
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    if (icon) icon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'dark');
  }
}

// Sync icon on page load (theme itself is set in <head> inline script)
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  const icon = document.getElementById('themeIcon');
  if (savedTheme === 'dark') {
    if (icon) icon.className = 'fas fa-sun';
  } else {
    if (icon) icon.className = 'fas fa-moon';
  }
});


// ============= SEARCH BAR =============
document.getElementById("search-input")?.addEventListener("input", function() {
  const filter = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  let matchCount = 0;

  cards.forEach(function(card) {
    const text = card.textContent.toLowerCase();
    if (text.includes(filter)) {
      card.style.display = "";
      matchCount++;
    } else {
      card.style.display = "none";
    }
  });

  const noResults = document.getElementById("no-results");
  if (noResults) {
    noResults.style.display = matchCount === 0 ? "block" : "none";
  }
});


// ============= REPORT ISSUE =============
document.querySelectorAll(".report-btn").forEach(function(button) {
  button.addEventListener("click", function(event) {
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


// ============= SCROLL REVEAL =============
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, i) {
    if (entry.isIntersecting) {
      var el = entry.target;
      var delay = el.classList.contains('card') ? i * 45 : 0;
      setTimeout(function() { el.classList.add('visible'); }, delay);
      observer.unobserve(el);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(function(el) {
  observer.observe(el);
});