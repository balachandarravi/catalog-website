
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
    event.preventDefault(); // Prevent default action

    var equipmentName = encodeURIComponent(this.dataset.equipment);  
    var inchargeEmail = encodeURIComponent(this.dataset.incharge);  

    var formURL = `https://docs.google.com/forms/d/e/1FAIpQLScG83Fooj9YG6lC5Vykg4D3VXoaOCJoLw88lsnx6p-Z90iDBw/viewform?usp=pp_url&
entry.1047378601=${equipmentName}&
entry.1457660674=${inchargeEmail}`;

    window.open(formURL, "_blank");  // Open the form with pre-filled data
  });
});

// ============= HAMBURGER ==================

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.querySelector('.hamburger');
  
  // Check if the menu is open and the click is outside the menu and hamburger
  if (navMenu.classList.contains('open') && 
      !navMenu.contains(event.target) && 
      !hamburger.contains(event.target)) {
    
    // Close the menu
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
  }
});

// Modify the existing toggleMenu function to use stopPropagation
function toggleMenu(event) {
  if (event) {
    event.stopPropagation(); // Prevent the click from being caught by the document click handler
  }
  
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.querySelector('.hamburger');
  
  navMenu.classList.toggle('open');
  hamburger.classList.toggle('active');
}


// --------------------------------------------

  // Theme Toggle Function
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
    icon.className = 'fas fa-sun';
  }
});



