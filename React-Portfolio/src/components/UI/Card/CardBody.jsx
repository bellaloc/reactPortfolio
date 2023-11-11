import React from 'react';
import CardCompany from './CardCompany';
import CardAddress from './CardAddress';

export default function CardBody({ company, address }) {
  return (
    <div className="card-body">
      {/* CardCompany Component */}
      <div className="mb-4">
        <h5 className="card-title">Company Information</h5>
        <CardCompany {...company} />
      </div>

      {/* CardAddress Component */}
      <div>
        <h5 className="card-title">Address</h5>
        <CardAddress {...address} />
      </div>
    </div>
  );
}
