export function dibujarRecetas(recetas, contenedor) {
  contenedor.replaceChildren();

  recetas.slice(0, 6).forEach((receta) => {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'recipe-card';

    const imagen = document.createElement('img');
    imagen.className = 'recipe-image';
    imagen.src = receta.imagen;
    imagen.alt = `Plato de ${receta.nombre}`;
    imagen.loading = 'lazy';

    const contenido = document.createElement('div');
    contenido.className = 'recipe-content';

    const etiqueta = document.createElement('p');
    etiqueta.className = 'recipe-tag';
    etiqueta.textContent = receta.cocina;

    const titulo = document.createElement('h3');
    titulo.textContent = receta.nombre;

    const detalles = document.createElement('ul');
    detalles.className = 'recipe-details';

    const tiempo = document.createElement('li');
    tiempo.textContent = `⏱ ${receta.minutos} min en total`;

    const porciones = document.createElement('li');
    porciones.textContent = `🍽 ${receta.porciones} porciones`;

    const calificacion = document.createElement('li');
    calificacion.textContent = `★ ${receta.calificacion.toFixed(1)} · ${receta.dificultad}`;

    detalles.append(tiempo, porciones, calificacion);
    contenido.append(etiqueta, titulo, detalles);
    tarjeta.append(imagen, contenido);
    contenedor.append(tarjeta);
  });
}

export function mostrarEstado(contenedor, mensaje, estado) {
  contenedor.textContent = mensaje;
  contenedor.dataset.state = estado;
}
