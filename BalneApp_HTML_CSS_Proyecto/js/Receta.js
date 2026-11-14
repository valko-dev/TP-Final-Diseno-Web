// La API devuelve muchos campos; el modelo conserva los que muestra BalneApp.
export default class Receta {
  constructor(datos) {
    this.nombre = datos.name;
    this.imagen = datos.image;
    this.cocina = datos.cuisine || 'Cocina internacional';
    this.minutos = Number(datos.prepTimeMinutes || 0) + Number(datos.cookTimeMinutes || 0);
    this.porciones = Number(datos.servings || 0);
    this.dificultad = datos.difficulty || 'Sin dato';
    this.calificacion = Number(datos.rating || 0);
    this.tipoComida = Array.isArray(datos.mealType) ? datos.mealType.join(' · ') : '';
  }
}
