import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contador from './Components/Contador';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Contador>10</Contador>
    <Contador></Contador>
  </div>
);
