import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CountryInHome from "./CountryInHome";
import axios from './axios';
import {Link} from 'react-router-dom';
import { useStateValue } from "./StateProvide";
import "./Home.css";

function Home() {
  const[region, setRegion]=useState("Filter by Region");
  const[dropDown,setDropDown]=useState(false);
  const[countries, setCountries]=useState([]);
  const[filtredCountries, setFiltredCountries]=useState([]);
  const[filtredNameCountries, setFiltredNameCountries]=useState("");

  const [{thema}] = useStateValue();

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

  const onClick = (item) =>{
    console.log(item);
  }

  function handleClick(item){
    setDropDown(false);
    setRegion(item.target.textContent);
    const filtredCountries=countries.filter(countryRegion=>countryRegion.region==item.target.textContent);
    setFiltredCountries(filtredCountries)
    console.log(filtredCountries);
  }

  function handleChange(e){
    setFiltredNameCountries(e.target.value);
    const searchText=e.target.value
    const searchValue=searchText.toLowerCase();

    console.log(searchValue);
    var searchResult = countries.filter(word => word.name.common.toLowerCase().indexOf(searchValue) > -1);
    setFiltredCountries(searchResult);
  }

  useEffect(()=>{
    async function fetchData(){
        const request= await axios.get("/all");     
        setCountries(request.data);
        return request
    }
    fetchData();
},[]);

useEffect(()=>{
  setFiltredCountries(countries)
},[countries]);



  return <div className="home-page" style={backgroundDark}>

      <div className="filter-area">

      <div className="search-bar" style={filterDark}>
      <SearchOutlinedIcon style={textDark}  />
      <input style={filterDark} placeholder="Search for a country..." type={"text"} onChange={handleChange}></input>
      </div>

      <div  className="select-filter">
      <div style={filterDark} onClick={()=>{dropDown ? setDropDown(false):setDropDown(true)}} className="select-box">
        <p style={textDark}>{region}</p>
        <KeyboardArrowDownOutlinedIcon style={textDark} />
      </div>
      <div style={filterDark} className={dropDown ? "select-items active" : "select-items"}>
        <ul>
          <li style={textDark} onClick={handleClick}>Africa</li>
          <li style={textDark} onClick={handleClick}>Americas</li>
          <li style={textDark} onClick={handleClick}>Asia</li>
          <li style={textDark} onClick={handleClick}>Europe</li>
          <li style={textDark} onClick={handleClick}>Oceania</li>
        </ul>
      </div>
      </div>

      </div>
      
      <div className="country-list">
      
      {filtredCountries?.map((country)=>(
        <Link to="/detail" state={{ from:country}} style={{ color: 'inherit', textDecoration: 'none' }}>
        <CountryInHome name={country?.name.common} img={country?.flags.png} population={country.population} region={country.region} capital={country.capital} />
</Link>
       
      ))}
        
        
      </div>
      

  </div>
}

export default Home;
