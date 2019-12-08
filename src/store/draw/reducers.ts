import {
    Player,
    drawState,
    DRAW_ACTION_TYPE,
    DrawActionTypes,
  } from "./types";
const uuidv4 = require('uuid/v4');
  
  const initialState: drawState = {
    players: [],
    isDrawPerformed : false
  };
  
  export function drawReducer(
    state = initialState,
    action: DrawActionTypes
  ): drawState {
    switch (action.type) {
      case DRAW_ACTION_TYPE.ADD_PLAYER:
          console.log("add player : " + action.data.name)
          let p  = {
            id: uuidv4(),
            name: action.data.name,
            spouseId: action.data.spouseId,
            haveSpouse: action.data.haveSpouse,
            matchId: undefined
          }
          return {
            players: [...state.players.map((item, index) => {
                if (item.id !== p.spouseId) {
                  return item
                }
                return {
                  id: item.id,
                  name: item.name,
                  spouseId: p.id,
                  haveSpouse: item.haveSpouse,
                  matchId: item.matchId
                }
            }),p],
            isDrawPerformed: state.isDrawPerformed
        }
      case DRAW_ACTION_TYPE.PERFORM_DRAW:
        console.log("Performing a draw")
        //TODO DRAW ALGORITHM
        const matched_players =  performDraw(JSON.parse(JSON.stringify(state.players)) as Player[])
        return {
            players: [...state.players],
            isDrawPerformed: true
        };
      case DRAW_ACTION_TYPE.RESET_DRAW:
          console.log("reset draw")
          return initialState
      default:
        return state;
    }
  }

  function performDraw(players: Player[]):Player[] { 
   /* let matchId = Array.from(new Array(players.length),(val,index)=>index);
    shuffleArray(matchId)
    console.log(matchId)
    players.forEach(p => {
      for (let i in matchId) {
        if((matchId[i]>=0) && (matchId[i] != p.id) && (matchId[i] != p.spouseId)){
          p.matchId = matchId[i]
          matchId[i] = -1
          return
        }
      }
    })
    console.log(players)
    return players*/
    return []
 }

 function shuffleArray(array: any[] | number[]) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}