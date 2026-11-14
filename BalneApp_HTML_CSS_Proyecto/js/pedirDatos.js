import Receta from './Receta.js';

const URL_API = 'https://dummyjson.com/recipes?limit=12';

export async function traerRecetas() {
  const control = new AbortController();
  const limite = setTimeout(() => control.abort(), 10000);
  let respuesta;

  try {
    respuesta = await fetch(URL_API, { signal: control.signal });
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('La API tardó más de 10 segundos en responder.');
    }
    throw new Error('No se pudo conectar con la API. Revisá tu conexión.');
  } finally {
    clearTimeout(limite);
  }

  if (!respuesta.ok) {
    throw new Error(`La API respondió con el error ${respuesta.status}.`);
  }

  const datos = await respuesta.json();
  if (!Array.isArray(datos.recipes) || datos.recipes.length < 6) {
    throw new Error('La API no devolvió suficientes recetas para armar la selección.');
  }

  return datos.recipes.map((dato) => new Receta(dato));
}
