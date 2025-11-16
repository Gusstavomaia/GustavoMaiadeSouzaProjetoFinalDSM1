document.addEventListener("DOMContentLoaded", () => {
  const carrosseis = document.querySelectorAll(".carrossel");
  carrosseis.forEach((carrossel) => {
    const slides = carrossel.querySelectorAll(".slide");
    let indiceAtual = 0;
    setInterval(() => {
      slides[indiceAtual].classList.remove("ativo");
      indiceAtual = (indiceAtual + 1) % slides.length;
      slides[indiceAtual].classList.add("ativo");
    }, 3000);
  });

  const carrosselGrandeAuto = document.querySelector(
    ".carrossel-grande:not(.manual)"
  );
  if (carrosselGrandeAuto) {
    const slides = carrosselGrandeAuto.querySelectorAll(".slide");
    let i = 0;
    setInterval(() => {
      slides[i].classList.remove("ativo");
      i = (i + 1) % slides.length;
      slides[i].classList.add("ativo");
    }, 3000);
  }

  function iniciarCarrosselManual(carrossel) {
    const slides = carrossel.querySelectorAll(".slide");
    const anterior = carrossel.querySelector(".anterior");
    const proximo = carrossel.querySelector(".proximo");
    const indicadores = carrossel.querySelectorAll(".indicador");
    let indiceAtual = 0;

    function mostrar(indice) {
      slides.forEach((s, i) => s.classList.toggle("ativo", i === indice));
      indicadores.forEach((b, i) => b.classList.toggle("ativo", i === indice));
      indiceAtual = indice;
    }

    anterior.addEventListener("click", () => {
      let novo = (indiceAtual - 1 + slides.length) % slides.length;
      mostrar(novo);
    });

    proximo.addEventListener("click", () => {
      let novo = (indiceAtual + 1) % slides.length;
      mostrar(novo);
    });

    indicadores.forEach((b, i) =>
      b.addEventListener("click", () => mostrar(i))
    );

    mostrar(0);
  }

  document
    .querySelectorAll(".carrossel-manual, .carrossel-grande.manual")
    .forEach(iniciarCarrosselManual);
});
