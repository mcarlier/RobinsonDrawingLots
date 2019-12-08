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
            isDrawPerformed: false,
            drawIntegrity: undefined
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
            players: [
                {"haveSpouse": true, "id": "testid0", "matchId": undefined, "name": "John", "spouseId": "testid0"}
            ],
            isDrawPerformed: false,
            drawIntegrity: undefined
        }
        expect(drawReducer(state ,action)).toEqual({"players": [
            {"haveSpouse": true, "id": "testid0", "matchId": undefined, "name": "John", "spouseId": "testid1"},
            {"haveSpouse": true, "id": "testid1", "matchId": undefined, "name": "Maria", "spouseId": "testid0"}
        ],
        isDrawPerformed: false
        })
    })

    it('should match correctly in this cases', () => {
      uuidv4.mockImplementation(() => 'testid1');

      const action = {
          type: <typeof DRAW_ACTION_TYPE.PERFORM_DRAW>('PERFORM_DRAW')
        }
      const state1 = {
          players: [
              {"haveSpouse": false, "id": "0", "matchId": undefined, "name": "John", "spouseId": undefined},
              {"haveSpouse": false, "id": "1", "matchId": undefined, "name": "Maria", "spouseId": undefined}
          ],
          isDrawPerformed: false,
          drawIntegrity: undefined

      }
      expect(drawReducer(state1 ,action)).toEqual({"players": [
          {"haveSpouse": false, "id": "0", "matchId": "1", "name": "John", "spouseId": undefined},
          {"haveSpouse": false, "id": "1", "matchId": "0", "name": "Maria", "spouseId": undefined}
        ],
        isDrawPerformed: true,
        drawIntegrity: true
      })

      const state2 = {
        players: [
            {"haveSpouse": true, "id": "0", "matchId": undefined, "name": "John", "spouseId": "1"},
            {"haveSpouse": true, "id": "1", "matchId": undefined, "name": "Maria", "spouseId": "0"}
        ],
        isDrawPerformed: false,
        drawIntegrity: undefined

    }
    expect(drawReducer(state2 ,action)).toEqual({"players": [
      {"haveSpouse": true, "id": "0", "matchId": "1", "name": "John", "spouseId": "1"},
      {"haveSpouse": true, "id": "1", "matchId": "0", "name": "Maria", "spouseId": "0"}
      ],
      isDrawPerformed: true,
      drawIntegrity: false
    })
  })

  it('should reset the drawState', () => {
    const action = {
        type: <typeof DRAW_ACTION_TYPE.RESET_DRAW>('RESET_DRAW')
      }
    const state1 = {
        players: [
            {"haveSpouse": true, "id": "0", "matchId": "1", "name": "John", "spouseId": undefined},
            {"haveSpouse": true, "id": "1", "matchId": "0", "name": "Maria", "spouseId": undefined}
        ],
        isDrawPerformed: true,
        drawIntegrity: true
    }
    expect(drawReducer(state1 ,action)).toEqual({"players": [],
      isDrawPerformed: false,
      drawIntegrity: undefined
    })
})
  })

