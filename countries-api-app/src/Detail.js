import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import "./Details.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom';
import { useStateValue } from "./StateProvide";

function Detail() {
  const [{thema}] = useStateValue();
  const location = useLocation()
  const { from } = location.state;
  const language=from.languages;
  const nativeName=from.name.nativeName;
  const currencies=from.currencies;
  const borderCountry=from.borders;

  const[backgroundDark,setBackgroundDark]=useState();
  const [filterDark,setFilterDark]=useState();
  const [textDark,setTextDark]=useState();
  
  useEffect(()=>{
    if(!thema){
      setBackgroundDark({backgroundColor: 'hsl(0, 0%, 98%)'});
     setFilterDark({color:'hsl(200, 15%, 8%)'});
     setTextDark({color:'hsl(200, 15%, 8%)'});
     }else{
      setBackgroundDark({backgroundColor: 'hsl(207, 26%, 17%)'});
      setFilterDark({backgroundColor:'hsl(209, 23%, 22%)'});
      setTextDark({color:'hsl(0, 0%, 100%)'});
   }
  },[thema])
   
  

  return <div style={backgroundDark} className="detail-page">
  <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
   <div style={filterDark} className="back-button"><ArrowBackIcon style={textDark} /> <p style={textDark}>Back</p></div>
   </Link>
   <div className="country-area"> 
  
     <img src={from.flags.png}></img>
     <div style={textDark} className="country-details">
       <h1 className="detail-header">{from.name.common}</h1>
       <div className="detail-description">
         <div  className="left-detail">
           <p><span>Native Name:</span> {nativeName[Object.keys(nativeName)[0]].official}</p>
           <p><span>Population:</span> {from.population}</p>
           <p><span>Region:</span> {from.region}</p>
           <p><span>Sub Region:</span> {from.subregion}</p>
           <p><span>Capital:</span> {from.capital}</p>
         </div>
         <div className="right-detail">
         <p><span>Top Level Domain:</span> {from.tld}</p>
         <p><span>Currencies:</span> {currencies[Object.keys(currencies)[0]].name}</p>
         <p><span>Languages:</span> {language[Object.keys(language)[0]]}</p>
         </div>
       </div>
       <div className="border-country">
         <p>Border Countries:</p>

          {borderCountry?.map((country)=>(
            <div style={filterDark} className="border-countries">{country}</div>
          ))}
        

       </div>
     </div>
   </div>
  </div>;
}

export default Detail;
