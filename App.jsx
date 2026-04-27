import React, { useState } from 'react';
import LandingScreen from './screens/LandingScreen';
import OEMDashboardScreen from './screens/OEMDashboardScreen';
import SupplierScreen from './screens/SupplierScreen';
import CustomerTrackingScreen from './screens/CustomerTrackingScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-shell">
      {currentScreen !== 'landing' && (
        <header className="bg-white" style={{ borderBottom: '1px solid var(--color-primary-light)', padding: '1rem 0' }}>
          <div className="container flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80" onClick={() => navigateTo('landing')}>
              <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--color-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>P</div>
              <span className="font-bold text-lg text-primary">PartPulse EV</span>
            </div>
            <nav className="flex gap-4">
              <button 
                className={`text-sm font-medium ${currentScreen === 'dashboard' ? 'text-primary' : 'text-secondary hover:text-primary'}`}
                onClick={() => navigateTo('dashboard')}
              >OEM Dashboard</button>
              <button 
                 className={`text-sm font-medium ${currentScreen === 'supplier' ? 'text-primary' : 'text-secondary hover:text-primary'}`}
                 onClick={() => navigateTo('supplier')}
              >Supplier Update</button>
              <button 
                className={`text-sm font-medium ${currentScreen === 'tracking' ? 'text-primary' : 'text-secondary hover:text-primary'}`}
                 onClick={() => navigateTo('tracking')}
              >Customer Tracking</button>
            </nav>
          </div>
        </header>
      )}
      
      <main className={currentScreen === 'landing' ? '' : 'main-content bg-bg-light'}>
        {currentScreen === 'landing' && <LandingScreen onNavigate={navigateTo} />}
        {currentScreen === 'dashboard' && <OEMDashboardScreen />}
        {currentScreen === 'supplier' && <SupplierScreen />}
        {currentScreen === 'tracking' && <CustomerTrackingScreen />}
      </main>
    </div>
  );
}

export default App;
