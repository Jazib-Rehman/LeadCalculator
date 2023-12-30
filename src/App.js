import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ResultsCalculator from './Pages/ResultsCalculator';
import OutreachForecast from './Pages/OutreachForecast';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result-calculator' element={<ResultsCalculator />} />
        <Route path='/outreach-forecast' element={<OutreachForecast />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
