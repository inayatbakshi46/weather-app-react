import React from 'react';

const Invalid = () => {
  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      <div className="text-2xl px-2">Sorry, we couldn't find weather information for the specified city. Please double-check the city name and try again.</div>
    </div>
  );
}

export default Invalid;