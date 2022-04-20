/* eslint-disable max-len */
const missions = 'https://api.spacexdata.com/v3/missions';

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
