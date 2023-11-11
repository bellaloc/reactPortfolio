import React from 'react';

export default function CardCompany({ name, catchPhrase }) {
  return (
    <section className="ms-2 me-auto">
      <div>
        <h4 className="card-title">{name}</h4>
        <h5 className="card-subtitle mb-2 text-muted">Catchphrase:</h5>
        <p className="card-text">{catchPhrase}</p>
      </div>
    </section>
  );
}
