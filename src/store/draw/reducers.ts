import {
    Player,
    drawState,
    DRAW_ACTION_TYPE,
    DrawActionTypes,
  } from "./types";
import { performDraw } from "../../utils/PlayerArrayUtils";
const uuidv4 = require('uuid/v4');
  
  const initialState: drawState = {
    players: [],
    isDrawPerformed : false,
    drawIntegrity: undefined
  };
  
  export function drawReducer(
    state = initialState,
    action: DrawActionTypes
  ): drawState {
    switch (action.type) {
      case DRAW_ACTION_TYPE.ADD_PLAYER:
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
            isDrawPerformed: state.isDrawPerformed,
            drawIntegrity: state.drawIntegrity
        }
      case DRAW_ACTION_TYPE.PERFORM_DRAW:
        const matched_players =  JSON.parse(JSON.stringify(state.players)) as Player[]
        let drawResult = performDraw(matched_players)
        return {
            players: [...matched_players],
            isDrawPerformed: true,
            drawIntegrity: drawResult
        };
      case DRAW_ACTION_TYPE.RESET_DRAW:
          return initialState
      default:
        return state;
    }
  }