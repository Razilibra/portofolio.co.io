const yearElement = document.querySelector("#currentYear");
yearElement.textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll("#mainNavigation .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navigation = document.querySelector("#mainNavigation");
    if (navigation.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navigation).hide();
    }
  });
});
