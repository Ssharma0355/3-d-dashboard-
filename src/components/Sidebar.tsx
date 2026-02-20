import React from 'react';
import { Filters } from './Filters';

export const Sidebar: React.FC = () => {
  return (
    <div
    style={{
      width: 280,
      padding: 20,
      background: '#111827',
      color: '#fff',
      height: '100vh',
      boxSizing: 'border-box'
    }}
  >
      <h2 style={{ marginBottom: 20 }}>3D Dashboard</h2>
      <Filters />
    </div>
  );
};