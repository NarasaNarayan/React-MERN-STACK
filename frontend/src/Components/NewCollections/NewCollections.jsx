import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import './NewCollections.css'
const NewCollections = () => {

    const [new_collection,setNew_collection]=useState([]);
    useEffect(()=>{
         fetch('http://localhost:4000/newcollectoin').then((res)=>res.json()).then((data)=>{setNew_collection(data)})
    },[])
    return <div className="new-collections">
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="collections">
         {
            new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old={item.old}  />
            })
         }
        </div>
    </div>;
};

export default NewCollections;
