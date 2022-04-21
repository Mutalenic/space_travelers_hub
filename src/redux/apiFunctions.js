/* eslint-disable max-len */
const missions = 'https://api.spacexdata.com/v3/missions';
const rocketAPI = 'https://api.spacexdata.com/v3/rockets';
const dragonData = 'https://api.spacexdata.com/v3/dragons';

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

const loadDragons = async () => {
  const respond = await fetch(dragonData).then((res) => res.json()).then((GetDragons) => GetDragons);
  const dragonsItems = respond.map((dragon) => (
    {
      id: dragon.dragon_id,
      name: dragon.dragon_name,
      description: dragon.description,
      image: dragon.flickr_images[0],
    }
  ));
  return dragonsItems;
};

loadDragons();

export { loadMissions, loadRockets, loadDragons };
