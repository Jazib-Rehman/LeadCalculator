import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ResultsCalculator from './Pages/ResultsCalculator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result-calculator' element={<ResultsCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
