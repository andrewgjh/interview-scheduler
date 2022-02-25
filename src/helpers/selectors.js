export function getAppointmentsForDay(state, day) {
  
  if(state.days.length > 0){
    const foundDay = state.days.find((dayObj)=>dayObj.name === day);
    if(!foundDay){
      return [];
    }
    const appointmentsArray = foundDay.appointments.map((appointment)=>state.appointments[appointment])
    return appointmentsArray;
  }
 return [];
};
