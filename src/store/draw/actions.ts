import { ADD_PLAYER, PERFORM_DRAW, RESET_DRAW } from "./types";

export function addPlayer(name: string, haveSpouse:boolean, spouseId:number | undefined) {
  return {
    type: ADD_PLAYER,
    name: name,
    haveSpouse: haveSpouse,
    spouseId: spouseId
  };
}

export function performDrawAction() {
  return {
    type: PERFORM_DRAW
  };
}

export function resetDrawAction() {
  return {
    type: RESET_DRAW
  };
}