# Historia de usuario: Listado de recetas del Recetario Sazón

## Historia

**Como** usuario del Recetario de Sazón,
**quiero** ver las recetas disponibles en tarjetas ordenadas en una cuadrícula,
**para** identificar rápidamente el nombre, la categoría, el tiempo de preparación y las porciones de cada receta.

## Criterios de aceptación

1. La página del módulo muestra el encabezado de Sazón, el título "Módulo Recetario" y el pie de página.
2. Cada receta se muestra como una tarjeta (`RecetaCard`) con:
   - categoría (etiqueta),
   - nombre,
   - descripción corta,
   - tiempo de preparación en minutos,
   - número de porciones.
3. Las tarjetas se ordenan en una cuadrícula que se adapta al ancho de la pantalla.
4. Los datos de las recetas son estáticos y se guardan en el estado local del componente de la página (`useState`).
5. Cada tarjeta se genera con `.map()` y tiene una `key` única (el `id` de la receta).
6. Los estilos usan el kit de marca de Sazón (colores y tipografías Poppins e Inter definidos en `:root`).
7. Al pasar el mouse sobre una tarjeta, esta se eleva ligeramente.

## Ubicación de los componentes

| Componente / archivo | Ruta | Función |
|---|---|---|
| `App` | `src/App.jsx` | Arma la página: Header, RecetarioPage y Footer |
| `main` | `src/main.jsx` | Punto de entrada de la aplicación |
| `Header` | `src/components/layout/Header.jsx` | Encabezado con la marca Sazón |
| `Footer` | `src/components/layout/Footer.jsx` | Pie de página con derechos reservados |
| `RecetarioPage` | `src/components/pages/Receta/Receta.jsx` | Vista del módulo; guarda las recetas en el estado local |
| `RecetaCard` | `src/components/recetas/RecetaCard.jsx` | Tarjeta reutilizable de una receta |
| Estilos de la tarjeta | `src/components/recetas/RecetaCard.css` | CSS propio del componente `RecetaCard` |
| Datos estáticos | `src/data/recetas.js` | Lista inicial de recetas |

## Árbol de componentes

```
App
├── Header
├── RecetarioPage
│   └── RecetaCard (una por cada receta)
└── Footer
```

## Datos de cada receta

| Campo | Tipo | Ejemplo |
|---|---|---|
| `id` | número | 1 |
| `nombre` | texto | Arepa de huevo |
| `categoria` | texto | Desayunos |
| `tiempo` | número (minutos) | 25 |
| `porciones` | número | 2 |
| `descripcion` | texto | Arepa frita rellena de huevo... |

## Fuera de alcance de este momento

- Conexión con el backend.
- Crear, editar o eliminar recetas.
- Filtros, búsqueda y navegación entre vistas.
