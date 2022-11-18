import React, { useEffect, useState } from "react";

function Main() {
  const [city, setCity] = useState("");
  const [whether , setWhether] = useState({success:false,error:"error",data:[]})

  useEffect( async () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b9ae852a2cf09d11b82db5bf55df6f30`)
    .then((response) => response.json())
    .then((data) => {
        if(data.cod=='404'){setWhether({...whether,error:data.message})}
        else if(data.cod=='400'){setWhether({...whether,error:data.message})}
        else setWhether({...whether,success:true,data:data});
        }).catch(err=>{
          console.log(err,"err");
        })
     }, [city]);

     console.log(whether);
 
  return (
    <div className="main d-flex justify-content-center align-items-center" style={{height:"91vh"}}>
      <div className="card p-4" style={{ maxWidth: "18rem" }}>
      <input className="input" type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
      {whether.success?<div className="card-body">
          <img className="rounded-pill" src="https://cdn.dribbble.com/users/580699/screenshots/2934892/summer.gif" alt="" width={200}/>
          <h2 className="card-text py-3">
            {city?(whether.data.main.temp - 273).toFixed(1):"----"} <span className="fs-5">{city}</span>
          </h2>
          <div className=" d-flex flex-row justify-content-around">
               <span>Min {(whether.data.main.temp_min - 273).toFixed(1)}</span>
               <span>Max {(whether.data.main.temp_max - 273).toFixed(1)}</span>
          </div>
          <div className="mt-2 d-flex flex-row justify-content-between ">
               <span className="ps-2">Humidity {(whether.data.main.humidity)}</span>
               <span className="ps-4">Wind speed {(whether.data.wind.speed)}</span>
          </div>
        </div>:<h4 className="pt-4">{whether.error}</h4>}
        
      </div>
    </div>
  );
}

export default Main;
