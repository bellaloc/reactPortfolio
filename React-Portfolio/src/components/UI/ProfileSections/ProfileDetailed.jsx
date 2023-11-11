import React from 'react';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';

export default function ProfileDetailed({ user }) {
  return (
    <div className="card">
      {/* CardHeader Component */}
      <CardHeader user={user} />

      {/* CardBody Component */}
      <CardBody company={user.company} address={user.address} />
    </div>
  );
}
