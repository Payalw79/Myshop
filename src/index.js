import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextDataProvider } from './PropsDrilling/ContextData';
import ThemeContextProvider from './Pages/ThemeContext';

//import { createContext } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ContextData.Provider value={{name:"payal",email:"payal@gmail.com"}}>
    //      <App />
    // </ContextData.Provider>
//    <ContextDataProvider>
//     <App/>
//    </ContextDataProvider>

<ThemeContextProvider>
    <App/>
</ThemeContextProvider>

);


reportWebVitals();
