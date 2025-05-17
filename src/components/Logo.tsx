import { useState } from 'react';

export default function Logo() {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="flex items-center">
      {!imageError ? (
        <img 
          src="/images/Daraida_logo.jpg" 
          alt="Daraida" 
          className="h-12"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="text-2xl font-bold text-red-600">
          Daraida
        </div>
      )}
    </div>
  );
}