import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { JournalApp } from './JournalApp.jsx';
import { Provider } from 'react-redux';
import { AppTheme } from './theme/AppTheme.jsx';
import { store } from './store';
 
ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>

        <Provider store={ store }>

            <AppTheme>

                <JournalApp />

            </AppTheme>

        </Provider>
      
    </React.StrictMode>
  
);

