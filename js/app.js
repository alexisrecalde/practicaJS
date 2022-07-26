import hamburgerMenu from "./menu.js";
import iniciarReloj from "./reloj.js";
import responsiveMedia from "./responsive.js";
import { shortCut } from "./teclado.js";
import temaOscuro from "./tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");

  iniciarReloj(".iniciar-reloj", ".detener-reloj");

  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="goo.gl/maps/oxUa7zsUETEEXx5p9">VER MAPA</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.8260412404356!2d-58.63119228518775!3d-34.81031817596499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcdb4c86a7fe29%3A0x35a9acb6c62d6aea!2sDungenes%201880%2C%20B1763ARH%20Virrey%20del%20Pino%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1658790406227!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  //
  https: responsiveMedia(
    "map",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/6rqT8OP-yn0">VER VIDEO</a>`,
    ` <iframe width="560" height="315" src="https://www.youtube.com/embed/6rqT8OP-yn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
});

d.addEventListener("keydown", (e) => {
  shortCut(e);
});

temaOscuro(".tema-btn", "dark-mode");
