import { DataPoint, Category } from '../types';

const categories: Category[] = ['Active', 'Idle', 'In-Transit'];

const cities = [
  { lat: 28.6139, lng: 77.2090 }, // Delhi
  { lat: 19.0760, lng: 72.8777 }, // Mumbai
  { lat: 12.9716, lng: 77.5946 }, // Bangalore
  { lat: 17.3850, lng: 78.4867 }, // Hyderabad
  { lat: 22.5726, lng: 88.3639 }, // Kolkata
  { lat: 13.0827, lng: 80.2707 }, // Chennai
];

export const generateData = (count: number): DataPoint[] => {
  return Array.from({ length: count }, (_, i) => {
    const city = cities[Math.floor(Math.random() * cities.length)];

    return {
      id: i,
      latitude: city.lat + (Math.random() - 0.5) * 0.6,
      longitude: city.lng + (Math.random() - 0.5) * 0.6,
      height: Math.random() * 2000,
      category: categories[Math.floor(Math.random() * 3)],
    };
  });
};