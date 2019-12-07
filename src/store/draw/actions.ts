import { ADD_PLAYER, PERFORM_DRAW } from "./types";

export function addPlayer(name: string, spouseId:number | undefined) {
  return {
    type: ADD_PLAYER,
    name: name,
    spouseId: spouseId
  };
}

export function PerformDrawAction() {
  return {
    type: PERFORM_DRAW
  };
}