import React from 'react';

export default function CardAddress({ suite, street, city }) {
  return (
    <address className="text-start m-3">
      <div className="card">
        <div className="card-header bg-secondary text-white">
          <h6 className="m-0">Address</h6>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{suite}</li>
          <li className="list-group-item">{street}</li>
          <li className="list-group-item">{city}</li>
        </ul>
      </div>
    </address>
  );
}
