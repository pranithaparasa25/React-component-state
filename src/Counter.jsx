import { useEffect, useState } from "react";

function Counter(x){
    console.log(x)
    var [count,setCountfn]=useState(x.a)
    function incCount(){
        setCountfn(count+x.b)
    }
    function decCount(){
        setCountfn(count-x.b)
    }
    useEffect(()=>{
        console.log("counter mounted")
    },[]);
    useEffect(()=>{
        console.log("counter updated")
    })
    return(
        <div  className='border border-2 border-success p-3 m-2'>
            <h1>Counter::{count}</h1>
            <button onClick={()=>{incCount()}}>Inc</button>
            <button onClick={()=>{decCount()}}>Dec</button>
            <button onClick={()=>{x.s(count)}}>mee parents ke call chesta</button>
        </div>
    )
}
export default Counter;