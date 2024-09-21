import React, { useEffect, useState } from "react";
import './Popular.css'
import Item from "../Item/Item";
const Popular = () => {

  const [data_product,setdata_product]=useState([]);
  useEffect(()=>{
  fetch('http://localhost:4000/popularinwomen').then((res)=>res.json()).then((data)=>setdata_product(data))
  },[])
  return <div className="popular ">
<h1>POPULAR IN WOMEN</h1>
<hr />
<div className="popular-item">
  {
    data_product.map((item,i)=>{
      return<Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old={item.old}  />
    })
  }
</div>
  </div>;
};

export default Popular;
