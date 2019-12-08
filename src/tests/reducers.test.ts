import '@testing-library/jest-dom/extend-expect';
import {DRAW_ACTION_TYPE} from "../store/draw/types"
import  { drawReducer } from "../store/draw/reducers"
const uuidv4 = require('uuid/v4');
jest.mock('uuid/v4');

describe('draw reducer ADD_PLAYER', () => {
    it('should add a player', () => {
        uuidv4.mockImplementation(() => 'testid');
        const action = {
            type: <typeof DRAW_ACTION_TYPE.ADD_PLAYER>('ADD_PLAYER'),
            data: {
              name: 'John',
              haveSpouse: false,
              spouseId: undefined
            }
          }

        expect(drawReducer({
            players: [],
            isDrawPerformed: false
          },action)).toEqual({"players": [
                {"haveSpouse": false, "id": 'testid', "matchId": undefined, "name": "John", "spouseId": undefined
            }],
            isDrawPerformed: false})
    })

    it('should add a player with a spouse and update the spouse', () => {
        uuidv4.mockImplementation(() => 'testid1');

        const action = {
            type: <typeof DRAW_ACTION_TYPE.ADD_PLAYER>('ADD_PLAYER'), 
            data: {
              name: 'Maria',
              haveSpouse: true,
              spouseId: "testid0"
            }
          }
        const state = {
            "players": [
                {"haveSpouse": true, "id": "testid0", "matchId": undefined, "name": "John", "spouseId": "testid0"}
            ],
            isDrawPerformed: false
        }
        expect(drawReducer(state ,action)).toEqual({"players": [
            {"haveSpouse": true, "id": "testid0", "matchId": undefined, "name": "John", "spouseId": "testid1"},
            {"haveSpouse": true, "id": "testid1", "matchId": undefined, "name": "Maria", "spouseId": "testid0"}
        ],
        isDrawPerformed: false
        })
    })
  })

