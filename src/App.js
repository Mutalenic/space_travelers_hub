import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Rockets from './components/Rockets/Rockets';
import Navbar from './components/Navbar/Navbar';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile/Profile';
import { missionsLoad } from './redux/Missions/Missions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(missionsLoad());
  }, []);
  return (
    <div className="spaceApp">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
