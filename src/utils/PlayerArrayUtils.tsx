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