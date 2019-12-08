import {DRAW_ACTION_TYPE} from "./types";

export function addPlayerAction(name: string, haveSpouse:boolean, spouseId:string | undefined) {
  return {
    type: DRAW_ACTION_TYPE.ADD_PLAYER,
    data: {
      name: name,
      haveSpouse: haveSpouse,
      spouseId: spouseId
    }
  };
}

export function performDrawAction() {
  return {
    type: DRAW_ACTION_TYPE.PERFORM_DRAW
  };
}

export function resetDrawAction() {
  return {
    type: DRAW_ACTION_TYPE.RESET_DRAW
  };
}