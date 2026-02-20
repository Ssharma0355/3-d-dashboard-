export type Category = 'Active' | 'Idle' | 'In-Transit';

export interface DataPoint {
  id: number;
  latitude: number;
  longitude: number;
  height: number;
  category: Category;
}