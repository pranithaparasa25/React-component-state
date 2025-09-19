import { useState } from "react"
import React from "react"
function Counter(){
    var [count,setCountfn]=React.useState(10)
    function incCount(){
        setCountfn(count+10)
    }
    function inc(){
        setCountfn(count+100)
    }
    function decCount(){
        setCountfn(count-10)
    }
    return(
        
        <div className='border border-2 border-info p-3 m-2'>
            <h3>Welcome to class components</h3>
            <h1>{count}</h1>
            <button onClick={()=>{incCount()}}>inc count by 10</button>
            <button onClick={()=>{inc()}}>inc count by 100</button>
            <button onClick={()=>{decCount()}}>dec count by 10</button>
        </div>
    )
}
export default Counter;