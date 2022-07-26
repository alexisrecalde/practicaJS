export default function temaOscuro(temaBtn, classDark) {
  const darkBtn = document.querySelector(temaBtn);
  const selectors = document.querySelectorAll("[data-dark]");
  const sun = "☀️";
  const moon = "🌙";

  const lightmode = () => {
    selectors.forEach((el) => el.classList.add(classDark));
    darkBtn.textContent = sun;
    localStorage.setItem("tema", "light");
  };

  const darkmode = () => {
    selectors.forEach((el) => el.classList.remove(classDark));
    darkBtn.textContent = moon;
    localStorage.setItem("tema", "dark");
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches(temaBtn)) {
      if (darkBtn.textContent === moon) {
        lightmode();
      } else {
        darkmode();
      }
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("tema") === null) {
      localStorage.setItem("tema", "light");
    }

    if (localStorage.getItem("tema") === "light") {
      lightmode();
    }

    if (localStorage.getItem("tema") === "dark") {
      darkmode();
    }
  });
}
