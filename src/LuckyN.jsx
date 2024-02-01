import { useState } from "react";
import {getRolls , sum} from "./utils";
import Button from "./Button";
import Dice from "./Dice";
function LuckyN({numDice=2,goal=7}){
    const [dice,setDice]=useState(getRolls(numDice))
    const isWinner = sum(dice) ===goal;
    const roll = ()=> setDice(getRolls(numDice));
    return (
        <main className="LuckyN">
            <h1>Lucky{goal} {isWinner && "You win"}</h1>
            <Dice dice={dice}/>
            <Button clickFunc={roll}/>
        </main>
    )

}
export default LuckyN;