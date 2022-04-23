import { useSelector, useDispatch } from 'react-redux';
import './Missions.css';
import { joinMission, leaveMission } from '../../redux/Missions/Missions';

const Missions = () => {
  const allMissions = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();
  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th className="invisible">Status</th>
        </tr>
      </thead>
      <tbody>
        {allMissions.map((mission) => (
          <tr key={mission.id}>
            <td><b>{mission.name}</b></td>
            <td>{mission.description}</td>
            {mission.reserved
              ? <td><button type="button" className="active-btn">Active Member</button></td>
              : <td><button type="button" className="member-btn">NOT A MEMBER</button></td>}
            {mission.reserved
              ? <td><button type="button" className="leave-btn" onClick={() => dispatch(leaveMission(mission.id))}>Leave Mission</button></td>
              : <td><button type="button" className="join-btn" onClick={() => dispatch(joinMission(mission.id))}>Join Mission</button></td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
