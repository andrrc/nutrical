'use client'

import React, { useState } from 'react';
import '@/components/calculo/style.css';

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');
  const [classification, setClassification] = useState('');

  const calculateIMC = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (weightNum && heightNum) {
      const imc = weightNum / (heightNum * heightNum);
      setResult(imc.toFixed(2));

      if (imc < 18.5) {
        setClassification('Abaixo do peso');
      } else if (imc >= 18.5 && imc < 25) {
        setClassification('Peso normal');
      } else if (imc >= 25 && imc < 30) {
        setClassification('Sobrepeso');
      } else if (imc >= 30 && imc < 35) {
        setClassification('Obesidade Grau I');
      } else if (imc >= 35 && imc < 40) {
        setClassification('Obesidade Grau II');
      } else {
        setClassification('Obesidade Grau III');
      }
    }
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Calculadora de IMC</h2>
      <div className="input-group">
        <label>
          Peso (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="calculator-input"
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Altura (m):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="calculator-input"
          />
        </label>
      </div>
      <button onClick={calculateIMC} className="calculator-button">Calcular IMC</button>
      {result && (
        <div className="result-container">
          <p className="result-text">Seu IMC é: {result}</p>
          <p className="result-text">Classificação: {classification}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
