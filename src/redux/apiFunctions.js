/* eslint-disable max-len */
const missions = 'https://api.spacexdata.com/v3/missions';
const rocketAPI = 'https://api.spacexdata.com/v3/rockets';

const loadRockets = async () => {
  const response = await fetch(rocketAPI).then((res) => res.json()).then((GetRockets) => GetRockets);
  const rocketData = response.map((rocket) => (
    {
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
    }
  ));
  return rocketData;
};

loadRockets();

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

export { loadMissions, loadRockets };
