import { create } from 'zustand';
import { DataPoint, Category } from '../types';
import { generateData } from '../utils/generateData';

interface State {
  data: DataPoint[];
  filteredData: DataPoint[];
  activeCategory: Category | 'All';

  setCategory: (cat: Category | 'All') => void;
  simulateRealtime: () => void;
  startRealtime: () => () => void;
}

export const useStore = create<State>((set, get) => ({
  data: generateData(50000),
  filteredData: [],
  activeCategory: 'All',

  setCategory: (cat) => {
    const { data } = get();

    set({
      activeCategory: cat,
      filteredData:
        cat === 'All'
          ? []
          : data.filter(d => d.category === cat),
    });
  },

  simulateRealtime: () => {
    set(state => ({
      data: state.data.map(d => ({
        ...d,
        height: Math.max(
          100,
          d.height + (Math.random() - 0.5) * 200
        )
      }))
    }));
  },

  startRealtime: () => {
    const interval = setInterval(() => {
      get().simulateRealtime();
    }, 2000);

    return () => clearInterval(interval);
  }
}));