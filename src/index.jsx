// import React from react
import React from 'react';
// import ReactDOM from react-dom
import ReactDOM from 'react-dom/client';
// import App 
import App from './App.jsx';
// import index.css
import './style/index.css';

// create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));
// render the App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);