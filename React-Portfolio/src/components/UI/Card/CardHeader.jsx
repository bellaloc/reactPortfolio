import React from 'react';
import ProfileTeaser from '../ProfileSections/ProfileTeaser';

export default function CardHeader({ user }) {
  return (
    <div className="card-header d-flex align-items-center">
      {/* ProfileTeaser Component */}
      <ProfileTeaser user={user} />

      {/* Phone Number */}
      <a href={`tel:${user.phone}`} className="ms-auto text-decoration-none">
        {user.phone}
      </a>
    </div>
  );
}
