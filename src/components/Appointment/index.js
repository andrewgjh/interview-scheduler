import React from 'react';
import './styles.scss'
import Header from './Header';
import Show from './Show';
import Empty from './Empty';


function Appointment(props){
  // const str = props.time ? `Appointment at ${props.time}`: 'No Appointments'
  return(
    <article className="appointment">
    <Header time={props.time}/>
    {props.interview ? <Show {...props.interview} /> :<Empty/>}
    </article>
  )
}

export default Appointment;