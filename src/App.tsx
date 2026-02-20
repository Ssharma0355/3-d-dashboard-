import React, { useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { MapView } from './components/MapView';
import { useStore } from './store/useStore';

const App: React.FC = () => {
  const { startRealtime } = useStore();

  useEffect(() => {
    const stop = startRealtime();
    return stop;
  }, [startRealtime]);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <div style={{ width: 280, flexShrink: 0 }}>
        <Sidebar />
      </div>

      <div style={{ flex: 1, position: 'relative' }}>
        <MapView />
      </div>
    </div>
  );
};

export default App;