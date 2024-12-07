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

const LoadingSkeleton = () => {
  return (
    <div className="container">
      <div className="search-wrapper">
        <div className="search-skeleton"></div>
      </div>
      <div className="foodGrid">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="foodCard-skeleton"></div>
        ))}
      </div>
    </div>
  );
};

export default function Meals() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);

  const fetchFoods = async () => {
    try {
      setLoading(true);
      // Add artificial delay to see loading state
      await new Promise(resolve => setTimeout(resolve, 2000));
      
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

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      if (data.errors) {
        throw new Error(data.errors[0].message);
      }

      return data.data?.getAllFood || [];
    } catch (error) {
      console.error('Error fetching foods:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchFoods()
      .then(data => {
        setFoods(data);
        setFilteredFoods(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = foods.filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(filtered);
  }, [foods, searchTerm]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <div className="container">Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Procurar comida..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className='aviso'>
          <h1>Todos os macronutrientes são calculados com a base de 100 gramas</h1>
      </div>


      
      <div className="foodGrid">
        {filteredFoods.map((food, index) => (
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
                <span>Calorias:</span>
                <span>{selectedFood.nutrients.kcal}kcal</span>
              </div>
              <div className="nutrientItem">
                <span>Carboidratos:</span>
                <span>{selectedFood.nutrients.carbohydrates}g</span>
              </div>
              <div className="nutrientItem">
                <span>Lípidios:</span>
                <span>{selectedFood.nutrients.lipids}g</span>
              </div>
              <div className="nutrientItem">
                <span>Sódio:</span>
                <span>{selectedFood.nutrients.sodium}mg</span>
              </div>
              <div className="nutrientItem">
                <span>Cálcio:</span>
                <span>{selectedFood.nutrients.calcium}mg</span>
              </div>
            </div>
            <button 
              onClick={() => setSelectedFood(null)}
              className="close-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
