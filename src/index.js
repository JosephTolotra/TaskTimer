import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContexteProvider from './context/theme';
import TaskContexteProvider from './context/tasks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <ThemeContexteProvider>
            <TaskContexteProvider>
                <App />
            </TaskContexteProvider>
        </ThemeContexteProvider>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
