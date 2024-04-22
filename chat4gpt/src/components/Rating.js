import React, { useState } from 'react';

export default function Rating({ onRating }) {
  const [rating, setRating] = useState('');

  const handleRating = (value) => {
    setRating(value);
    onRating(value);  // Propaga o evento de rating para o componente pai
  };

  return (
    <div className="rating">
      <p>Avalie a qualidade do atendimento:</p>
      <button className={rating === 'Ruim' ? 'active' : ''} onClick={() => handleRating('Ruim')}>Ruim</button>
      <button className={rating === 'Médio' ? 'active' : ''} onClick={() => handleRating('Médio')}>Médio</button>
      <button className={rating === 'Bom' ? 'active' : ''} onClick={() => handleRating('Bom')}>Bom</button>
    </div>
  );
}
