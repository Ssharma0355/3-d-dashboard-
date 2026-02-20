import React, { useMemo } from 'react';
import { useStore } from '../store/useStore';
import { Category } from '../types';

const categories: (Category | 'All')[] = [
  'All',
  'Active',
  'Idle',
  'In-Transit'
];

export const Filters: React.FC = () => {
  const { data, activeCategory, setCategory } = useStore();

  const stats = useMemo(() => {
    const counts: Record<string, number> = {
      All: data.length,
      Active: 0,
      Idle: 0,
      'In-Transit': 0
    };

    data.forEach(d => counts[d.category]++);
    return counts;
  }, [data]);

  return (
    <div>
      <h3 style={{ marginBottom: 15 }}>Filter by Status</h3>

      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          style={{
            display: 'block',
            width: '100%',
            marginBottom: 10,
            padding: 10,
            borderRadius: 4,
            border: 'none',
            cursor: 'pointer',
            background:
              activeCategory === cat ? '#2563eb' : '#1f2937',
            color: '#fff'
          }}
        >
          {cat} ({stats[cat]})
        </button>
      ))}
    </div>
  );
};