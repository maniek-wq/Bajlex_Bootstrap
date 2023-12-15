const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Zatrzymaj obserwację, gdy element jest widoczny
      }
    });
  },
  { threshold: 0.5 }
);

// Dodaj obserwator do wszystkich elementów z klasą fade-in
const elements = document.querySelectorAll(".fade-in");
elements.forEach((element) => {
  observer.observe(element);
});

// Zdefiniuj punkt przerwania (media query)
const mediaQueryLarge = window.matchMedia("(min-width: 1200px)");
const second = document.getElementsByClassName("second")[0];

function removeTiles() {
  if (mediaQueryLarge.matches) {
    second.remove();
  }
}

removeTiles();
