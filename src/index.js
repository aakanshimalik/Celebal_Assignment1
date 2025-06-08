import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import FormComponent from "./components/formcomponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // using FormComponent to display on page
  <FormComponent/>
);
