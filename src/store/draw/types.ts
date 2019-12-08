export interface Player {
    readonly id: number;
    readonly name: string;
    haveSpouse: boolean;
    spouseId: number | undefined;
    matchId: number | undefined;
  }

  export interface drawState{
    players: Player[];
    isDrawPerformed: boolean;
  }
  
// Describing the different ACTION NAMES available
export const ADD_PLAYER = "ADD_PLAYER";
export const PERFORM_DRAW = "PERFORM_DRAW";
export const RESET_DRAW = "RESET_DRAW";

  interface addPlayerAction {
    type: typeof ADD_PLAYER;
    name: string,
    haveSpouse: boolean,
    spouseId: number | undefined
  }
  
  interface PerformDrawAction {
    type: typeof PERFORM_DRAW;

  }

  interface ResetDrawAction {
    type: typeof RESET_DRAW;

  }
  
  export type DrawActionTypes = addPlayerAction | PerformDrawAction | ResetDrawAction;
  