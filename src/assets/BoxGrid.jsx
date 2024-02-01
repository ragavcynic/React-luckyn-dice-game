import Box from "./Box";
import { useState } from "react";
function BoxGrid(){
    const [boxes,setBoxes] = useState([true,false,false,false,false,false,false,false,false])
    const reset = ()=>{
        setBoxes([false,false,false,false,false,false,false,false,false]);
    }
    const toggleBox=(idx)=>{
        setBoxes((oldBoxes)=>{
          return  oldBoxes.map((value,i)=>{
                if(i===idx){
                    return !value;}
                    else{
                        return value;
                    }
                }
            )
        })
    }
    return (

        <div className="Boxgrid">
           {boxes.map((b,idx)=>(<Box key={idx} isActive={b} toggle={()=>toggleBox(idx)} />))}
           <button onClick={reset}>RESET</button>
        </div>
    )
}
export default BoxGrid;