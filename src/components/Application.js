import React from "react";

import "components/Application.scss";
import DayList from "./DayList";
import { useState , useEffect} from "react";
import axios from 'axios';
import Appointment from "./Appointment";
import { getAppointmentsForDay } from "helpers/selectors";


export default function Application(props) {

  const [state, setState] = useState({
    day:"Monday",
    days:[],
    appointments:{},
    interviews:{}
  });
  const setDay = (day) => setState({...state, day});
  // const setDays = (days) =>setState(prev => ({ ...prev, days }));

  const dailyAppointments= getAppointmentsForDay(state, state.day);


// let [day, setDay] =useState('Monday');
// const [days, setDays]= useState([]);

useEffect(()=>{


  axios.all([
    axios.get('/api/days'),
    axios.get('/api/appointments'),
 
  ]).then((all) => {  
    const [days, appointments] = all;
  
    setState((prev)=>({
     ...prev,
     days:days.data, 
     appointments:appointments.data
    }))
  });
},[])

  return (
    <main className="layout">
      <section className="sidebar">
      <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
<DayList
  days={state.days}
  value={state.day}
  onChange={day => setDay(day)}
/>

</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>

      </section>
      <section className="schedule">
        {dailyAppointments.map((appointment)=><Appointment key={appointment.id} {...appointment}/>)}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
