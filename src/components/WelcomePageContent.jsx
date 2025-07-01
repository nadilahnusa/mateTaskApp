import React from 'react';

function WelcomePageContent(props) { 
  const { title, subtitle, user } = props; 

  return (
    <div className="bg-white p-8 rounded-lg shadow-md min-h-full flex flex-col items-center justify-center text-blue-500 text-center">
      <h1 className="text-3xl font-bold mb-4">{title}, {user}!</h1>
      <p className="text-xl text-black mb-6">{subtitle}</p>
    </div>
  );
}

export default WelcomePageContent; // Pastikan export default sesuai nama baru
