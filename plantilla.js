// Aplica los datos de config.js a las páginas. No necesitas editar este archivo.
(() => {
  const colores = { "--crema": "COLOR_FONDO", "--rosa": "COLOR_PRINCIPAL", "--turquesa": "COLOR_SECUNDARIO",
                    "--amarillo": "COLOR_ACENTO", "--morado": "COLOR_OSCURO" };
  for (const [variable, clave] of Object.entries(colores)) {
    if (CONFIG[clave]) document.documentElement.style.setProperty(variable, CONFIG[clave]);
  }
  document.querySelectorAll("[data-t]").forEach(e => e.textContent = CONFIG[e.dataset.t]);
  const portada = document.querySelector(".portada");
  if (portada) { portada.src = CONFIG.IMAGEN; portada.alt = CONFIG.TITULO; }
  document.title = document.title.split(" · ")[0] + " · " + CONFIG.TITULO;
})();
