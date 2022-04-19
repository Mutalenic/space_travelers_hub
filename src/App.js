import './App.css';
import { Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets/Rockets';
import Navbar from './components/Navbar/Navbar';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile/Profile';
import Dragons from './Dragons/Dragons';

const App = () => (
  <div className="spaceApp">
    <Navbar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="missions" element={<Missions />} />
      <Route path="profile" element={<Profile />} />
      <Route path="dragons" element={<Dragons />} />
    </Routes>
  </div>
);

export default App;
