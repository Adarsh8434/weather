import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Button } from "bootstrap";

function App()
{
const apikey="4b65a2584114d7e7e2290bf9fd5ebf6a"
const [data,setData]=useState({})
const [inputCity,setInputCity]=useState("")
 

const getWeatherDetails=(cityName)=>{
  if(!cityName){
    return
  }
  const apiURL="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apikey+"&units=metric"
  axios.get(apiURL).then((res)=>{
    console.log("response",res.data)
   
    setData(res.data)
  }).catch((err)=> {
console.log("err",err);
  })
}
const handleChangeInput= (e)=>{
console.log("value",e.target.value)
setInputCity(e.target.value)
}
const handleSearch=()=>{
  getWeatherDetails(inputCity)
}

useEffect(()=>{
  getWeatherDetails("Jamshedpur");
},[])

  return(
  <div className="col-md-12">
    <div className="weatherBg">
      <h1 className="heading">Weather App</h1>
 <div className="d-grid gap-3 col-4 mt-4"> 
<input tye="text" className="form-control" 
value={inputCity} onChange={handleChangeInput} placeholder="Enter a place" /> 
<button className="btn btn-primary" type="button"
onClick={handleSearch}>Search</button> 
</div> 
    </div>
    
   <div className="col-md-12 text-center mt-5">
    <div className="shadow rounded weatherResultBox">
<img className="weatherIcon" src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png"></img>
<h5 className="weatherCity">{data?.name}</h5>
<h6 className="weatherTemp">{data?.main?.temp}°C </h6>
<div>
  <img className="col" src="https://uploads-ssl.webflow.com/63373991b8094c5fce83b830/63f50bba2e4aedee2648a46b_air-humidity.webp"></img>

  <h5 className="humidity">Humidity {data?.main?.humidity}%</h5>
</div>
<div>
  <img className="realI"src="https://mark.trademarkia.com/logo-images/bdg-llc/realfeel-87029529.jpg"></img>
  <h5 className="real">{data?.main?.feels_like}°C</h5>
</div>
<div className=""><img className="col2"src="https://img.icons8.com/?size=512&id=31842&format=png"></img>

<h5 className="Wind">{data?.wind?.speed} km/hr</h5>
</div>
    </div>
   </div>

  </div>
  );
}

export default App;
