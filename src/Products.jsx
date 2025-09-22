import { useEffect, useState } from "react";

function Products(){
    var [Products,setProducts]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>{
            setProducts(data)
        })
    },[]);
    return(
        <div className='border border-2 border-success p-3 m-2'>
            <h1>Products</h1>
            <ul>
                {Products.map((P)=>(
                    <li>{P.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Products;