import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

