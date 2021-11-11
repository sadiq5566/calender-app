import React, { useState,useEffect } from 'react';
import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
require('react-big-calendar/lib/css/react-big-calendar.css');

const localizer = momentLocalizer(moment)

function App() {

    const [event , setEvent] = useState({title:" ", start :" " , end: " "});
    const [events, setEvents]= useState([]);
    const [countries, setCountries]= useState([]);
    const [country, setCountry] = useState({name:"Select Country", code :"00" });
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [select, setSelect] = useState("")
 

  useEffect( 
  
     () => {
    try{
 
      setEvents(events => [...events, event]);
      setCountries(countries => [...countries, country]);
  setLoading(false);
  }catch(error){ 
      console.log("error", error);
    }
    }, [event,country])
    
  
  //////////Fetch Country Code/////////////////


 
  let countryName="";
  let countryId ="";
  useEffect( () => {
  const URL = 'https://calendarific.com/api/v2/countries?api_key=28ca8cfa337166df7d252f129c63d2546f84eff2';
  const fetchCountry = async () => {
    try {
      const response = await fetch(URL);
      const json = await response.json();
      let countryResult =json.response.countries;
      countryResult.map((item,index)=>{
                
         countryName = item.country_name;
         countryId = item["iso-3166"];
         return (
  setCountry(  {name : countryName , code :countryId })
         )
  
      })
    }catch(error){ 
      console.log("error", error);
    }
  };
  fetchCountry();

},[]);
    
    
/////useEffect for Select

useEffect( () => {
  const fetc = select;
  const URL = `https://calendarific.com/api/v2/holidays?&api_key=28ca8cfa337166df7d252f129c63d2546f84eff2&country=${fetc}&year=2021`;
  
  const fetchData = async () => {
    try {
      setEvents([]);


      const response = await fetch(URL);
      const json = await response.json();
      let holidayResult =json.response.holidays;
       holidayResult.map((item,index)=>{
        const datee =  item.date.iso;
        const dateArr = datee.split("T");   
        const name = item.name;
        const start = new Date(dateArr[0]);
        const end = new Date(dateArr[0]);          
          setEvent(  {title : name , start:start , end:end})
  
  
      })
    }catch(error){ 
      console.log("error", error);
    }
  };
  fetchData();

},[select]);

  
  return (
<div className="app">

<h1>Calender</h1>

<select  disabled={loading}     onChange={e => setSelect(e.currentTarget.value)}>
    {
      countries.map((con,i) =>
      <option key={i} value={con.code}>{ con.name}</option>
    )
    };
  </select>


  <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
  );
}

export default App;
