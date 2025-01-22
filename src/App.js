import logo from './logo.svg';
import './App.css';
import ProductsList from './ProductsList';
import ConditionalRendering from './ConditionalRendering';
import NavBar from './Pages/NavBar';
import { BrowserRouter } from 'react-router-dom';
//import Form1 from './Form/Form1';
import Form2 from './Form/Form2';
import Form3 from './Form/Form3';
import ComponentA from './PropsDrilling/ComponentA'
import Counter1 from './Counter/Counter1';
import ErrorBoundary from './Counter/ErrorBoundary';

function App() {
  return (
    <div className="App">
      {/* <ProductsList/> */}
      {/* <ConditionalRendering/> */}
     {/* <BrowserRouter>
        <NavBar/>
     </BrowserRouter> */}
     {/* <Form2/> */}
     {/* <Form3/> */}
     {/* <ComponentA name={"Payal"} email={"payal@gmail.com"} /> */}

      <ErrorBoundary>
      <Counter1/>
      </ErrorBoundary>
    
      <ErrorBoundary>
      <Counter1/>
      </ErrorBoundary>

    
     
    </div>
  );
}

export default App;
