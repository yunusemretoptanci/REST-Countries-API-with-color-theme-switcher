import React, { useEffect, useState } from "react";
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import "./Header.css";
import { useStateValue } from "./StateProvide";

function Header() {
  
  const [{thema}, dispatch] = useStateValue();

  const[headerDark,setHeaderDark]=useState()
  const [headerTextDark,setHeaderTextDark]=useState()

  function themaChange(){
    dispatch({
      type: thema ? "LIGHT_THEMA" : "DARK_THEMA",
    });
    console.log(thema);
    
  }
  useEffect(()=>{
    if(!thema){
      setHeaderDark({backgroundColor: 'hsl(0, 0%, 100%)'});
     setHeaderTextDark({color:'hsl(200, 15%, 8%)'});
     }else{
     setHeaderDark({backgroundColor: 'hsl(209, 23%, 22%)'});
     setHeaderTextDark({color:'hsl(0, 0%, 100%)'});
   }
  },[thema])

 

  return <div className="header" style={headerDark}>
      <h2 style={headerTextDark}>Where in the world?</h2>
      <div onClick={themaChange}>
        <NightsStayOutlinedIcon style={headerTextDark}/>
        <p style={headerTextDark}>Dark Mode</p>
      </div>
  </div>;
}

export default Header;
