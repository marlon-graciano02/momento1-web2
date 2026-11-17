import { useState } from 'react';
import { RecetaCard } from '../../recetas/RecetaCard';
import { recetasIniciales } from '../../../data/recetas';

export function RecetarioPage() {
  const [recetas] = useState(recetasIniciales);

  return (
    <main className="contenedor pagina-modulo">
      <section className="bloque-modulo">
        <h1>Módulo Recetario</h1>
        <div className="recetas-grid">
          {recetas.map((receta) => (
            <RecetaCard key={receta.id} {...receta} />
          ))}
        </div>
      </section>
    </main>
  );
}