import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile/Profile';
import Dragons from './components/Dragons/Dragons';

import { addRockets } from './redux/Rockets/rockets';
import Rockets from './components/Rockets/Rockets';
import { missionsLoad } from './redux/Missions/Missions';
import { addDragons } from './redux/Dragons/Dragons';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addRockets());
  }, []);
  useEffect(() => {
    dispatch(missionsLoad());
  }, []);
  useEffect(() => {
    dispatch(addDragons());
  }, []);

  return (
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
};

export default App;
