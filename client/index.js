import React from 'react';
import { createRoot } from 'react-dom';
import App from './src/app.jsx';

// container is assigned to the *node* with id of 'root'
const container = document.getElementById('root')

// createRoot takes a *node* as an argument which it can then render the react app into
const root = createRoot(container);

// the render method actually will insert our app into the DOM (which will cause it to render)
root.render(<App />);

