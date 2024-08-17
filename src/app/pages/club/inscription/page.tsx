import React from 'react';

export default function InscriptionPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-64 h-64 card-flip">
        <div className="card-inner relative w-full h-full">
          {/* Front of the card */}
          <div className="card-front absolute w-full h-full bg-blue-500 text-white flex items-center justify-center">
            Front
          </div>
          {/* Back of the card */}
          <div className="card-back absolute w-full h-full bg-red-500 text-white flex items-center justify-center">
            Back
          </div>
        </div>
      </div>
    </div>
  );
}
