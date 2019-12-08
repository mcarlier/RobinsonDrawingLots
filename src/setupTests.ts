// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import { addPlayer } from "./store/draw/actions";
import {ADD_PLAYER,PERFORM_DRAW,RESET_DRAW} from "./store/draw/types"
import  { drawReducer } from "./store/draw/reducers"


describe('actions', () => {
  it('addPlayer should create ADD_PLAYER action', () => {
    const name = 'John'
    const haveSpouse = false
    const spouseId = undefined
    const expectedAction = {
      type: ADD_PLAYER,
      name,
      haveSpouse,
      spouseId
    }
    expect(addPlayer(name,haveSpouse,spouseId)).toEqual(expectedAction)
  })
})

describe('actions', () => {
    it('should add a player', () => {
        const action = {
            type: <typeof ADD_PLAYER>('ADD_PLAYER'), 
            name: 'John',
            haveSpouse: false,
            spouseId: undefined
          }

        expect(drawReducer({
            players: [],
            isDrawPerformed: false
          },action)).toEqual({"players": [
                {"haveSpouse": false, "id": 0, "matchId": undefined, "name": "John", "spouseId": undefined
            }],
            isDrawPerformed: false})
    })
  })

  describe('actions', () => {
    it('should add a player with a spouse and update the spouse', () => {
        const action = {
            type: <typeof ADD_PLAYER>('ADD_PLAYER'), 
            name: 'Maria',
            haveSpouse: true,
            spouseId: 0
          }
        const state = {
            "players": [
                {"haveSpouse": true, "id": 0, "matchId": undefined, "name": "John", "spouseId": 0}
            ],
            isDrawPerformed: false
        }
        expect(drawReducer(state ,action)).toEqual({"players": [
            {"haveSpouse": true, "id": 0, "matchId": undefined, "name": "John", "spouseId": 1},
            {"haveSpouse": true, "id": 1, "matchId": undefined, "name": "Maria", "spouseId": 0}
        ],
        isDrawPerformed: false
        })
    })
  })
  describe('actions', () => {
    it('should not add a player because draw is already done', () => {
      const action = {
        type: <typeof ADD_PLAYER>('ADD_PLAYER'), 
        name: 'John',
        haveSpouse: false,
        spouseId: undefined
      }

    expect(drawReducer({
        players: [],
        isDrawPerformed: true
      },action)).toEqual({"players": [],
        isDrawPerformed: true})
    })
  })

  describe('actions', () => {
    it('should create a draw', () => {
        const action = {
            type: <typeof PERFORM_DRAW>('PERFORM_DRAW'), 
          }
        const state = {
            "players": [],
            isDrawPerformed: false
        }
        expect(drawReducer(state ,action)).toEqual({"players": [],
        isDrawPerformed: true
        })
    })
  })

  describe('actions', () => {
    it('should reset draw', () => {
        const action = {
            type: <typeof RESET_DRAW>('RESET_DRAW'), 
          }
        const state = {
            "players": [
            {"haveSpouse": true, "id": 0, "matchId": undefined, "name": "John", "spouseId": 1},
            {"haveSpouse": true, "id": 1, "matchId": undefined, "name": "Maria", "spouseId": 0}
        ],
            isDrawPerformed: true
        }
        expect(drawReducer(state ,action)).toEqual({"players": [],
        isDrawPerformed: false
        })
    })
  })