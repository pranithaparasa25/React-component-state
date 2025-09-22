import { useState } from "react";

function Counter(){
    var [count,setCountfn]=useState(0)
    function incCount(){
        setCountfn(count+1)
    }
    function decCount(){
        setCountfn(count-1)
    }
    return(
        <div>
            <h1>Counter::</h1>
            <button onClick={()=>{incCount()}}>Inc</button>
            <button onClick={()=>{decCount()}}>Dec</button>
        </div>
    )
}
export default Counter;