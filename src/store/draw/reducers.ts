import {
    PlayersState,
    ADD_PLAYER,
    PERFORM_DRAW,
    DrawActionTypes
  } from "./types";
  
  const initialState: PlayersState = {
    players: []
  };
  
  export function drawReducer(
    state = initialState,
    action: DrawActionTypes
  ): PlayersState {
    switch (action.type) {
      case ADD_PLAYER:
        let p  = {
              id: state.players.length,
              name: action.name,
              spouseId: action.spouseId,
              matchId: undefined
            }
        return {
            players: [...state.players, p]
        };
      case PERFORM_DRAW:
        return {
            // players: state.players.map(el => (el.id === id ? Object.assign({}, el, { text }) : el))
            players: state.players
        };
      default:
        return state;
    }
  }