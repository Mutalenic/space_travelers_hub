import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const missionsJoined = useSelector(
    (state) => state.missionsReducer.missions.filter((mission) => mission.reserved === true),
  );
  return (
    <div>
      <div className="profileContainer">
        <h2 className="leftprof-heading">My Missions</h2>
        <table className="leftTable">
          {
        missionsJoined.length
          ? missionsJoined.map((mission) => (

            <td key={mission.id}>
              <p>{mission.name}</p>
            </td>

          ))
          : <p>You have not joined any mission yet.</p>
       }
        </table>
      </div>
    </div>
  );
};

export default Profile;
