/* eslint-disable max-len */
const rocketsAPI = 'https://api.spacexdata.com/v3/rockets';
const missions = 'https://api.spacexdata.com/v3/missions';

export const loadRockets = async () => {
  const response = await fetch(rockets).then((res) => res.json()).then((GetRockets) => GetRockets );
  const rocketData = response.map((rocket) =>(
    {
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.filter_images[0],
      reserved: false,
    }
  ));
  return rocketData;
}

const loadMissions = async () => {
  const response = await fetch(missions).then((res) => res.json()).then((viewMissions) => viewMissions);
  const missionsObj = response.map((mission) => (
    {
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    }

  ));

  return missionsObj;
};

export default loadMissions;
