import React, { useState } from 'react';
import Overview from './pages/OverviewTab';
import SoilHealth from './pages/SoilHealthTab';
import Alerts from './pages/AlertsTab';

function App() {
  const [currentPage, setCurrentPage] = useState('overview');

  const renderPage = () => {
    switch(currentPage) {
      case 'overview':
        return <Overview />;
      case 'soilHealth':
        return <SoilHealth />;
      case 'alerts':
        return <Alerts />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Regenerative Agriculture Dashboard
          </h1>
        </div>
      </header>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4">
            <button onClick={() => setCurrentPage('overview')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Overview</button>
            <button onClick={() => setCurrentPage('soilHealth')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Soil Health</button>
            <button onClick={() => setCurrentPage('alerts')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Alerts</button>
          </div>
        </div>
      </nav>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;