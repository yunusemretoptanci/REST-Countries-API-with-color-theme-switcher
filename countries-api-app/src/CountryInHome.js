import React, { useEffect, useState } from "react";
import "./CountryInHome.css";
import { useStateValue } from "./StateProvide";

function CountryInHome({name, population,img, region, capital,onClick}) {
  const [{thema}] = useStateValue();
  
  const [filterDark,setFilterDark]=useState();
  const [textDark,setTextDark]=useState();

  useEffect(()=>{
    if(!thema){
      
     setFilterDark({color:'hsl(200, 15%, 8%)'});
     setTextDark({color:'hsl(200, 15%, 8%)'});
     }else{
      
      setFilterDark({backgroundColor:'hsl(209, 23%, 22%)'});
      setTextDark({color:'hsl(0, 0%, 100%)'});
   }
  },[thema])

  return <div style={filterDark} onClick={onClick} className="country-card">
    <img className="country-image" src={img} alt=""></img>
    
    <div  className="country-detail">
    <h3 style={textDark}>{name}</h3>
    <p style={textDark}><span>Population</span>: {population}</p>
    <p style={textDark}><span>Region</span>: {region}</p>
    <p style={textDark}><span>Capital</span>: {capital}</p>
    </div>

   </div>
}

export default CountryInHome;
