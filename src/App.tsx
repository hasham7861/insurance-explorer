import { Route, Routes } from 'react-router-dom';
import { InsuranceBuy } from './components/InsuranceBuy';
import { InsuranceList } from './components/InsuranceList';

function App(): JSX.Element {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InsuranceList/>}/>
        <Route path="/buy" element={<InsuranceBuy/>}/>
      </Routes>
    </div>
  );
}

export default App;
