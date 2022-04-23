import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const missionsJoined = useSelector(
    (state) => state.missionsReducer.missions.filter((mission) => mission.reserved === true),
  );
  const bookRockets = useSelector(
    (state) => state.rocketsReducer.rockets.filter((rocket) => rocket.reserved === true),
  );
  const reserveDragons = useSelector(
    (state) => state.dragonsReducer.dragons.filter((dragon) => dragon.reserved === true),
  );
  return (
    <div>
      <div className="profileContainer">
        <div className="missionContainer">
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
        <div className="rocketContainer">
          <h2 className="rightprof-heading">My Rockets</h2>
          <table className="rightTable">
            {
        bookRockets.length
          ? bookRockets.map((rocket) => (

            <td key={rocket.id}>
              <p>{rocket.name}</p>
            </td>

          ))
          : <p>You have not reserved any rocket yet.</p>
       }
          </table>
        </div>
        <div className="dragonContainer">
          <h2 className="rightprof-heading">My Dragons</h2>
          <table className="rightTable">
            {
        reserveDragons.length
          ? reserveDragons.map((dragon) => (

            <td key={dragon.id}>
              <p>{dragon.name}</p>
            </td>

          ))
          : <p>You have not reserved any dragon yet.</p>
       }
          </table>

        </div>
      </div>
    </div>
  );
};

export default Profile;
