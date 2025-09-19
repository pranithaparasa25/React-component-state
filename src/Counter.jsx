import { useState } from "react";

function Counter(){
    var [count,setCount]=useState(0)
    return(
        <div className='border border-2 border-info p-3 m-2'>
            <h1>Counter::{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>INC</button>
            <button onClick={()=>setCount(count-1)}>DEC</button>
        </div>
    )
}
export default Counter;