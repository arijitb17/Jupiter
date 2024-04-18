import React from 'react';

function Cards() {
  return (
    <div>
      {/* Trending Products section */}
      <div className="p-4 ">
        <h2 className="text-2xl font-bold mt-8 mb-8">Trending Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Sample card for a product */}
          <div className="bg-white p-4 rounded-lg shadow-md relative overflow-hidden">
            <img src="src\assets\s1.jpg" alt="Product" className="w-full object-cover rounded-md mb-2 h-40" />
            <h3 className="text-lg font-semibold mb-1">Product Name</h3>
            <p className="text-gray-600 mb-2">Product description goes here.</p>
            <div className="flex justify-center">
              <button className="px-4 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center">
                <span className="text-red-500 mr-1">View</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M13.293 7.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Repeat this block for other cards */}
          <div className="bg-white p-4 rounded-lg shadow-md relative overflow-hidden">
            <img src="src\assets\s1.jpg" alt="Product" className="w-full object-cover rounded-md mb-2 h-40" />
            <h3 className="text-lg font-semibold mb-1">Product Name</h3>
            <p className="text-gray-600 mb-2">Product description goes here.</p>
            <div className="flex justify-center">
              <button className="px-4 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center">
                <span className="text-red-500 mr-1">View</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M13.293 7.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md relative overflow-hidden">
            <img src="src\assets\s1.jpg" alt="Product" className="w-full object-cover rounded-md mb-2 h-40" />
            <h3 className="text-lg font-semibold mb-1">Product Name</h3>
            <p className="text-gray-600 mb-2">Product description goes here.</p>
            <div className="flex justify-center">
              <button className="px-4 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center">
                <span className="text-red-500 mr-1">View</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M13.293 7.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md relative overflow-hidden">
            <img src="src\assets\s1.jpg" alt="Product" className="w-full object-cover rounded-md mb-2 h-40" />
            <h3 className="text-lg font-semibold mb-1">Product Name</h3>
            <p className="text-gray-600 mb-2">Product description goes here.</p>
            <div className="flex justify-center">
              <button className="px-4 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center">
                <span className="text-red-500 mr-1">View</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M13.293 7.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Add a border beneath the cards */}
      <div className="my-4 w-full md:w-2/3 mx-auto border-b-2 border-gray-300 shadow-lg"></div>

      {/* Responsive layout for 2x2 cards on smaller screens */}
      <style jsx>{`
        @media (max-width: 768px) {
          .grid-cols-1 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
}

export default Cards;
