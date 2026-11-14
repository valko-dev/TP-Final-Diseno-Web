# BalneApp 🌊

Sitio web de turismo costero para conocer balnearios de Miramar y planificar un día de playa. Proyecto final de Diseño Web 2026.

## Páginas

- **Inicio (`index.html`):** presentación, seis tarjetas dinámicas de recetas y galería de balnearios.
- **Quiénes somos (`about-us.html`):** equipo, roles, API elegida y decisiones técnicas.
- **Contacto (`contact.html`):** formulario con validación JavaScript, alerts y reinicio después del envío de demostración.
- `images.html` redirige a la galería integrada en Inicio para conservar los enlaces anteriores.

## API pública

Se utiliza [DummyJSON Recipes](https://dummyjson.com/docs/recipes), una de las APIs propuestas en la consigna.

- **Método:** `GET`
- **Endpoint:** `https://dummyjson.com/recipes?limit=12`
- **Datos de lista:** propiedad `recipes` de la respuesta JSON.
- **Tarjetas:** se muestran las primeras seis recetas.
- **Campos utilizados:** `name`, `image`, `cuisine`, `prepTimeMinutes`, `cookTimeMinutes`, `servings`, `difficulty` y `rating`.
- **Estados:** loading, success y error con opción para reintentar.
- **Consultas:** un solo `fetch`; no se hace una consulta individual por tarjeta.

Ejemplo simplificado de respuesta:

```json
{
  "recipes": [
    {
      "id": 1,
      "name": "Classic Margherita Pizza",
      "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
      "cuisine": "Italian",
      "prepTimeMinutes": 20,
      "cookTimeMinutes": 15,
      "servings": 4,
      "difficulty": "Easy",
      "rating": 4.6
    }
  ],
  "total": 50,
  "skip": 0,
  "limit": 12
}
```

Las recetas se presentan como inspiración general para un picnic. BalneApp no vende comida ni reservas por medio de la API.

## Organización de JavaScript

- `js/app.js`: coordina la carga y los estados de Inicio.
- `js/pedirDatos.js`: consulta la API, revisa la respuesta HTTP y crea los modelos.
- `js/Receta.js`: adapta los campos de la API a los que usa el sitio.
- `js/dibujar.js`: construye las tarjetas usando el DOM.
- `js/contacto.js`: valida el formulario y muestra los alerts.

Los módulos se cargan con `type="module"`. Abrí el proyecto desde un servidor local, por ejemplo con **Live Server** en VS Code. No abras `index.html` con doble clic, porque el navegador puede bloquear los módulos con `file://`.

## Formulario

Contacto solicita nombre, correo, teléfono, motivo, preferencia de respuesta y mensaje. La validación se realiza al enviar, muestra un alert específico para cada error y limpia los campos cuando todos son válidos. Es una demostración de frontend: no hay backend y los datos no se envían ni se almacenan.

## Diseño y tecnologías

- HTML semántico y CSS con enfoque mobile first.
- Grid de tarjetas: una columna en móvil, dos en tablet y tres en escritorio.
- Variables CSS, Flexbox, imágenes con texto alternativo y carga diferida.
- HTML5, CSS3 y JavaScript modular con Fetch API.

## Equipo

Magalí Bustos, Mariana Sánchez y Valeria Kocar.

## Repositorio

[TP Final Diseño Web en GitHub](https://github.com/valko-dev/TP-Final-Diseno-Web)
