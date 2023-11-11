import React from 'react';

export default function ListItem({ children, ...props }) {
  return (
    <li className="list-group-item py-3">
      <div className="d-flex justify-content-center align-items-center">
        {children}
      </div>
    </li>
  );
}
