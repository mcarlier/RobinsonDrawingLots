export interface Player {
    readonly id: number;
    readonly name: String;
    spouseId: number | undefined;
    matchId: number | undefined;
  }

  export interface PlayersState{
    players: Player[];
  }
  
// Describing the different ACTION NAMES available
export const ADD_PLAYER = "ADD_PLAYER";
export const PERFORM_DRAW = "PERFORM_DRAW";

  interface addPlayerAction {
    type: typeof ADD_PLAYER;
    name: String,
    spouseId: number | undefined
  }
  
  interface PerformDrawAction {
    type: typeof PERFORM_DRAW;

  }
  
  export type DrawActionTypes = addPlayerAction | PerformDrawAction;
  