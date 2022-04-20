import { useSelector } from 'react-redux';
import './Missions.css';

const Missions = () => {
  const allMissions = useSelector((state) => state.missionsReducer.missions);
  return (

    <div className="mission-table">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allMissions.map((mission) => (
            <tr key={mission.id}>
              <td><b>{mission.name}</b></td>
              <td>{mission.description}</td>
              <td><button type="button" className="member-btn">Not a Member</button></td>
              <td><button type="button" className="join-btn">Join Mission</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
