import { traerRecetas } from './pedirDatos.js';
import { dibujarRecetas, mostrarEstado } from './dibujar.js';

const tarjetas = document.getElementById('recipe-cards');
const estado = document.getElementById('recipe-status');
const reintentar = document.getElementById('recipe-retry');

async function cargarRecetas() {
  reintentar.hidden = true;
  mostrarEstado(estado, 'Estamos buscando ideas para tu próximo día de playa…', 'loading');
  tarjetas.replaceChildren();

  try {
    const recetas = await traerRecetas();
    dibujarRecetas(recetas, tarjetas);
    mostrarEstado(estado, 'Selección cargada: 6 ideas de recetas para acompañar tu día de playa.', 'success');
  } catch (error) {
    mostrarEstado(
      estado,
      `${error.message} Revisá tu conexión e intentá de nuevo.`,
      'error'
    );
    reintentar.hidden = false;
  }
}

reintentar.addEventListener('click', cargarRecetas);
cargarRecetas();
