import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { AppRouter } from './router/AppRouter.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppTheme } from './theme/AppTheme.jsx';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createBrowserRouter(AppRouter);
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={ store }>
      <AppTheme>
        <RouterProvider router={router} />
      </AppTheme>
    </Provider>
  </React.StrictMode>
);


