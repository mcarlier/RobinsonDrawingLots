export interface Player {
    readonly id: string;
    readonly name: string;
    haveSpouse: boolean;
    spouseId: string | undefined;
    matchId: string | undefined;
  }

  export interface drawState{
    players: Player[];
    isDrawPerformed: boolean;
  }
  
// Describing the different ACTION NAMES available
export enum DRAW_ACTION_TYPE {
  ADD_PLAYER = 'ADD_PLAYER',
  PERFORM_DRAW = 'PERFORM_DRAW',
  RESET_DRAW = 'RESET_DRAW',
}

  interface addPlayerAction {
    type: typeof DRAW_ACTION_TYPE.ADD_PLAYER;
    data:{
      name: string,
      haveSpouse: boolean,
      spouseId: string | undefined
    }
  }
  
  interface PerformDrawAction {
    type: typeof DRAW_ACTION_TYPE.PERFORM_DRAW;

  }

  interface ResetDrawAction {
    type: typeof DRAW_ACTION_TYPE.RESET_DRAW;

  }
  
  export type DrawActionTypes = addPlayerAction | PerformDrawAction | ResetDrawAction;
  