import React from 'react';
import DayListItem from './DayListItem';

function DayList (props){
  
  const list = props.days
  .map((day)=><DayListItem key={day.id} 
                           name={day.name} 
                           spots={day.spots} 
                           selected={props.value === day.name} 
                           onChange={props.onChange}/>)

 return <ul>
  {list}
 </ul>
}

export default DayList;