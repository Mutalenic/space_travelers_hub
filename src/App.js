import './App.css';
import { Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets/Rockets';

const App = () => (
  <div className="spaceApp">
    <Routes>
      <Route path="/" element={<Rockets />} />
    </Routes>
  </div>
);

export default App;
