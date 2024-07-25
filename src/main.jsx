import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new client
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import Popper from 'popper.js';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize Popper.js
const popper = new Popper(document.body, document.querySelector('.navbar-toggler'), {
  placement: 'bottom',
});

// Handle click events on the navbar toggler button
$(document).on('click', '.navbar-toggler', function () {
  const navbarCollapse = $(this).data('target');
  $(navbarCollapse).collapse('toggle');
});