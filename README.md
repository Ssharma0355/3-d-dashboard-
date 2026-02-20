# 3D Dashboard – Production Grade Frontend Assignment

A high-performance 3D geospatial dashboard built with React + TypeScript.  
The application visualizes 10,000–50,000 real-time data points using WebGL rendering.

---

## 🚀 Tech Stack

- React + TypeScript
- Deck.gl (WebGL rendering)
- Mapbox (3D Map)
- Zustand (Global State Management)
- Vite / CRA
- React Hooks + Memoization
- Performance Optimizations

---

## ✨ Features

- 3D column visualization
- 10,000–50,000 generated data points
- Real-time simulation updates
- Category-based filtering
- Global state management
- Smooth animated transitions
- Optimized rendering using memoization

---

## 📊 Data Simulation

- Data is programmatically generated.
- Each data point contains:
  - Latitude
  - Longitude
  - Height value
  - Category (Active / Idle / In-Transit)
- Real-time updates simulate live system behavior.

---

## ⚡ Performance Optimizations

- useMemo for layer recalculation
- WebGL-based rendering via Deck.gl
- Transition animations instead of full re-render
- Controlled state updates via Zustand

---

## 🛠 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ssharma0355/3d-dashboard-.git
cd 3d-dashboard