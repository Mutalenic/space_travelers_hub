import './Profile.css';

const Profile = () => (
  <div className="profileContainer">
    <div className="rightTable">
      <h2>My Missions</h2>
      <table>
        <tr>
          <th>TESLA</th>
        </tr>
        <tr>
          <th>AsiaSat</th>
        </tr>
        <tr>
          <td>SES</td>
        </tr>
      </table>

    </div>
    <div className="leftTable">
      <h2>My Rockets</h2>
      <table>
        <tr>
          <th>Falcon 9</th>
        </tr>
        <tr>
          <th>StarShip</th>
        </tr>
        <tr>
          <td>Falcon heavy</td>
        </tr>
      </table>

    </div>
  </div>

);
export default Profile;
