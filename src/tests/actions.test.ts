import '@testing-library/jest-dom/extend-expect';
import {DRAW_ACTION_TYPE} from "../store/draw/types"
import { addPlayerAction,performDrawAction, resetDrawAction} from "../store/draw/actions";

describe('actions', () => {
    it('addPlayer should create ADD_PLAYER action', () => {
      const name = 'John'
      const haveSpouse = false
      const spouseId = undefined
      const expectedAction = {
        type: DRAW_ACTION_TYPE.ADD_PLAYER,
        data: {
            name: name,
            haveSpouse: haveSpouse,
            spouseId: spouseId
          }
      }
      expect(addPlayerAction(name,haveSpouse,spouseId)).toEqual(expectedAction)
    })
    it('performDrawAction should create PERFORM_DRAW action', () => {
      const expectedAction = {
        type: DRAW_ACTION_TYPE.PERFORM_DRAW,
      }
      expect(performDrawAction()).toEqual(expectedAction)
    })
    it('resetDrawAction should create RESET_DRAW action', () => {
      const expectedAction = {
        type: DRAW_ACTION_TYPE.RESET_DRAW,
      }
      expect(resetDrawAction()).toEqual(expectedAction)
    })
  })