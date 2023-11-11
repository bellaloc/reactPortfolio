import React from 'react';

export default function ProfileTeaser({ user: { username, name, email } }) {
  const usernameConcat = `(${username})`;

  return (
    <div className="ms-2 me-auto">
      <div>
        <h2 className="card-title fw-bold mb-1">{name}</h2>
        <h5 className="card-subtitle mb-1">{usernameConcat}</h5>
      </div>
      <a href={`mailto:${email}`} className="text-decoration-none">
        {email}
      </a>
    </div>
  );
}
