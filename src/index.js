// External dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// boilerplate dependency
import reportWebVitals from './reportWebVitals';

// global styles  
import './index.css';

// sub-components
import App from './App';
// index, about, contact

// binding the root element to index.js
const root = ReactDOM.createRoot(document.getElementById('root'));

// render the binding
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
