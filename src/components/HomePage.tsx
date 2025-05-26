import React from 'react';
import { homePageData } from '../data/homePageData';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-auto bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">易京科技同城买卖</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {homePageData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-lg text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;