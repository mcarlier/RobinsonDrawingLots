import {
    Player,
    drawState,
    ADD_PLAYER,
    PERFORM_DRAW,
    DrawActionTypes,
    RESET_DRAW
  } from "./types";
  
  const initialState: drawState = {
    players: [],
    isDrawPerformed : false
  };
  
  export function drawReducer(
    state = initialState,
    action: DrawActionTypes
  ): drawState {
    switch (action.type) {
      case ADD_PLAYER:
          console.log("add player : " + action.name)
        if(!state.isDrawPerformed){
          let p  = {
                id: state.players.length,
                name: action.name,
                spouseId: action.spouseId,
                haveSpouse: action.haveSpouse,
                matchId: undefined
              }
            var spouse = state.players.find(i => i.id === action.spouseId);
            if(spouse !== undefined){
              spouse.spouseId = p.id
              }
          return {
              players: [...state.players, p],
              isDrawPerformed: state.isDrawPerformed
          };
        }else{
          return {
            players: [...state.players],
            isDrawPerformed: state.isDrawPerformed
          }
        }
      case PERFORM_DRAW:
        console.log("Performing a draw")
        //TODO DRAW ALGORITHM
        const matched_players =  JSON.parse(JSON.stringify(state.players)) as Player[]
        matched_players.forEach(p => p.matchId! = Math.floor(Math.random() * matched_players.length))
        return {
            players: matched_players,
            isDrawPerformed: true
        };
      case RESET_DRAW:
          console.log("reset draw")
          return {
              players: [],
              isDrawPerformed: false
          };
      default:
        return state;
    }
  }