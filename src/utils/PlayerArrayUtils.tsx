import { Player } from "../store/draw/types";

export const getMatchPlayerName = (name: string,players: Player[]) =>  {
    if(!name){
        return { success: false,
        name:"", 
        error:'Please enter a name to see a match.'}
    }
    let player = players.find(p => p.name === name)
    if(player  !==  undefined){
        let id = player.id
        let match = players.find(p => p.matchId === id)
        if(match  !==  undefined){
        return { success: true,
                name:match.name, 
                error:""}
        }else{
        return { success: true,
            name:"John", 
            error:""}
        }
    }
    return { success: false,
        name:"", 
        error:'Sorry ' + name + "\n We could not find your match.\n Are you sure you spelled your name correctly?"}
};

export interface drawResult {
    integrity: boolean;
    players: Player[];
  }
export const performDraw = (players: Player[]):boolean =>  {
    let isSpouseRuleOk = isSpouseRuleApplicable(players)
    var drawResult = trytomakeADraw(players,isSpouseRuleOk)
    while (!drawResult.integrity){
        drawResult = trytomakeADraw(players,isSpouseRuleOk)
    }
    return isSpouseRuleOk   
  }
  function isSpouseRuleApplicable(players: Player[]):boolean{
      var spouseRuleApplicable = true
      if(players.length<=3){
        players.forEach(p => {
            if(p.haveSpouse){
                spouseRuleApplicable = false
                return
            }
        })
      }
      return spouseRuleApplicable
  }
  function trytomakeADraw(players: Player[],isSpouseRuleOk: boolean):drawResult{
    spouseRuledDraw(players,isSpouseRuleOk)
    if(testDrawIntegrity(players)){
        return {
            integrity: true,
            players: players
        }
    }else{
        resetMatchID(players)
        return {
            integrity: false,
            players: players
        }
    }
  }

  function testDrawIntegrity(players: Player[]):boolean{
    var integrity = true
    players.forEach(p => {
        if(!p.matchId){
            integrity = false
        }
    })
    return integrity
  }
  function resetMatchID(players: Player[]){
    players.forEach(p => {
        p.matchId = undefined
    })
  }

  function spouseRuledDraw(players: Player[],isSpouseRuleOk:boolean){
    var matchId:string[] = []
    for (let p of players) {
       matchId = [...matchId,p.id]
    }
    shuffleArray(matchId)
    console.log(matchId)
    players.forEach(p => {
      for (let i in matchId) {
        if((matchId[i]) && (matchId[i] !== p.id) && (matchId[i] !== p.spouseId || !isSpouseRuleOk)){
          p.matchId = matchId[i]
          matchId[i] = ""
          return 
        }
      }
    })
  }
  function shuffleArray(array: any[] | number[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }