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
const mediaQueryLarge = window.matchMedia("(min-width: 1024px)");

// Funkcja do pokazywania elementu na dużych ekranach
function showOnLargeScreen() {
  const showCarousel = document.getElementById("showCarousel"); // Tutaj ustaw ID swojego elementu

  if (mediaQueryLarge.matches && showCarousel.classList.contains("d-none")) {
    showCarousel.classList.remove("d-none");
    showCarousel.classList.add("d-flex");
  }
}

// Dodaj nasłuchiwanie zmian w media query
mediaQueryLarge.addListener(showOnLargeScreen);

// Wywołaj funkcję przy załadowaniu strony
showOnLargeScreen();
