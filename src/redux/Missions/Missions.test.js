import '@testing-library/jest-dom';
import missionReducer, { missionsLoad, joinMission, leaveMission } from './Missions';

describe('fetchMission', () => {
  test('test fetchMission function', () => {
    const result = missionsLoad();
    expect(typeof result).toBe('function');
  });
});

describe('joinMission', () => {
  test('test joinMission function', () => {
    const id = '9D1B7E0';
    const result = joinMission(id);
    expect(typeof result).toBe('object');
  });
});

describe('leaveMission', () => {
  test('test leaveMission function', () => {
    const id = '9D1B7E0';
    const result = leaveMission(id);
    expect(typeof result).toBe('object');
  });
});

describe('missionReducer', () => {
  test('test missionReducer empty action', () => {
    const initialState = {
      missions: [],
    };
    const result = missionReducer(initialState, {});
    expect(result.missions.length).toBe(0);
  });

  test('test missionReducer missions loaded', () => {
    const initialState = {
      missions: [],
    };
    const action = {
      type: 'space-travelers-hub/Missions/MISSIONS_LOADED',
      payload: ['mission1', 'mission2', 'mission3', 'mission4'],
    };
    const result = missionReducer(initialState, action);
    expect(result.missions.length).toBe(4);
  });

  test('test missionReducer join mission', () => {
    const state = {
      missions: [
        { id: '9D1B7E0', name: 'mission 1', description: 'description 1' },
        { id: 'F4F83DE', name: 'mission 2', description: 'description 2' },
        {
          id: 'F3364BF', name: 'mission 3', description: 'description 3', reserved: true,
        },
        { id: 'CE91D46', name: 'mission 4', description: 'description 4' },
      ],
    };
    const action = {
      type: 'space-travelers/Missions/JOIN_MISSION',
      payload: 'F3364BF',
    };
    const result = missionReducer(state, action);
    expect(result.missions[2].reserved).toBe(true);
  });

  test('test missionReducer leave mission', () => {
    const state = {
      missions: [
        { id: '9D1B7E0', name: 'mission 1', description: 'description 1' },
        { id: 'F4F83DE', name: 'mission 2', description: 'description 2' },
        {
          id: 'F3364BF', name: 'mission 3', description: 'description 3', reserved: true,
        },
        { id: 'CE91D46', name: 'mission 4', description: 'description 4' },
      ],
    };
    const action = {
      type: 'space-traveler/Missions/LEAVE_MISSION',
      payload: 'F3364BF',
    };
    const result = missionReducer(state, action);
    expect(result.missions[2].reserved).toBe(false);
  });
});
