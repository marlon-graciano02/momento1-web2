import './RecetaCard.css';

export function RecetaCard({ nombre, categoria, tiempo, porciones, descripcion }) {
  return (
    <article className="receta-card">
      <span className="receta-card__categoria">{categoria}</span>
      <h3 className="receta-card__titulo">{nombre}</h3>
      <p className="receta-card__descripcion">{descripcion}</p>
      <ul className="receta-card__datos">
        <li>⏱ {tiempo} min</li>
        <li>🍽 {porciones} porciones</li>
      </ul>
    </article>
  );
}