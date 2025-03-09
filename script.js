document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

document.getElementById('getStartedBtn').addEventListener('click', function() {
  // Scroll to the contact section smoothly
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Select all sections
    const navLinks = document.querySelectorAll(".nav-links a");

    function activateNavLink() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", activateNavLink);
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const restaurantCards = document.querySelectorAll(".restaurant-card");

  function filterRestaurants(category) {
    restaurantCards.forEach((card, index) => {
      // Show only 4 items for "all" category
      if (category === "all") {
        card.style.display = index < 4 ? "block" : "none";
      } else {
        card.style.display = card.getAttribute("data-category") === category ? "block" : "none";
      }
    });
  }

  // Set default filter to 'all' showing only 4 restaurants
  filterRestaurants("all");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      const category = this.getAttribute("data-category");
      filterRestaurants(category);
    });
  });
});