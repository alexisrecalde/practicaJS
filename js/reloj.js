export default function iniciarReloj(iniciarReloj, detenerReloj) {
  const d = document;
  const relojVisible = d.querySelector(".reloj");

  let clockTempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches(iniciarReloj)) {
      clockTempo = setInterval(() => {
        const hora = new Date().toLocaleTimeString();
        relojVisible.innerHTML = `
   <h4> ${hora} </h4>
   `;
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(detenerReloj)) {
      clearInterval(clockTempo);

      relojVisible.innerHTML = `
   <h4> Reloj Detenido, presione iniciar </h4>
   `;
      d.querySelector(iniciarReloj).disabled = false;
    }
  });
}
