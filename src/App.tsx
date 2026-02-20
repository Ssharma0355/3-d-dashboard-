import React, { useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { MapView } from './components/MapView';
import { useStore } from './store/useStore';

const App: React.FC = () => {
  const { startRealtime } = useStore();

  useEffect(() => {
    const stop = startRealtime();
    return stop;
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <MapView />
      </div>
    </div>
  );
};

export default App;