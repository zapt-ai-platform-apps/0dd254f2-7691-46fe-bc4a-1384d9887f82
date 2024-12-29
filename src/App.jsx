import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-purple-600 mt-8">Pretty Butterflies</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full max-w-6xl">
        {Array.from({ length: 12 }).map((_, index) => (
          <img src="https://images.unsplash.com/photo-1506940950647-b69276a2eae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8QmVhdXRpZnVsJTIwYnV0dGVyZmx5JTIwaW4lMjBuYXR1cmV8ZW58MHx8fHwxNzM1NDc4MzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080"
            key={index}
            
            alt="Beautiful Butterfly"
            data-image-request="Beautiful butterfly in nature"
            className="w-full h-48 object-cover rounded-md shadow-md"
          />
        ))}
      </div>
      <footer className="mt-auto mb-4">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:underline"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}

export default App;