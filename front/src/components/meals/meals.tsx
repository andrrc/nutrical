'use client'

import { useEffect, useState } from 'react';
import '@/components/meals/style.css';

interface Nutrients {
  calcium: number;
  sodium: number;
  kcal: number;
  lipids: number;
  carbohydrates: number;
}

interface Food {
  name: string;
  nutrients: Nutrients;
}

export default function Meals() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
    
  const fetchFoods = async () => {
    try {
      const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              getAllFood {
                name
                nutrients {
                  calcium
                  sodium
                  kcal
                  lipids
                  carbohydrates
                }
              }
            }
          `
        })
      });
      const data = await response.json();
      return data.data?.getAllFood || [];
    } catch (error) {
      console.error('Error fetching foods:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchFoods().then(data => {
      setFoods(data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Meals</h1>
      <div className="foodGrid">
        {foods.map((food, index) => (
          <div 
            key={index}
            className="foodCard"
            onClick={() => setSelectedFood(food)}
          >
            <h3>{food.name}</h3>
          </div>
        ))}
      </div>

      {selectedFood && (
        <div className="overlay" onClick={() => setSelectedFood(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>{selectedFood.name}</h2>
            <div className="nutrientsList">
              <div className="nutrientItem">
                <span>Calories:</span>
                <span>{selectedFood.nutrients.kcal}kcal</span>
              </div>
              <div className="nutrientItem">
                <span>Carbohydrates:</span>
                <span>{selectedFood.nutrients.carbohydrates}g</span>
              </div>
              <div className="nutrientItem">
                <span>Lipids:</span>
                <span>{selectedFood.nutrients.lipids}g</span>
              </div>
              <div className="nutrientItem">
                <span>Sodium:</span>
                <span>{selectedFood.nutrients.sodium}mg</span>
              </div>
              <div className="nutrientItem">
                <span>Calcium:</span>
                <span>{selectedFood.nutrients.calcium}mg</span>
              </div>
            </div>
            <button 
              onClick={() => setSelectedFood(null)}
              style={{ marginTop: '1rem' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
