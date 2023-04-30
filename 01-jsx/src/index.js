// 1 Import React
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// 2 Find root

const el = document.getElementById('root');

// 3 Bind react to the root

const root = ReactDOM.createRoot(el);
// 4 Create a component

// 5 Show Component
root.render(<App />);