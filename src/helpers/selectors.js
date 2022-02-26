export function getAppointmentsForDay(state, day) {
  if (state.days.length > 0) {
    const foundDay = state.days.find((dayObj) => dayObj.name === day);
    if (!foundDay) {
      return [];
    }
    const appointmentsArray = foundDay.appointments.map(
      (appointment) => state.appointments[appointment]
    );

    return appointmentsArray;
  }
  return [];
}

export function getInterview(state, interview) {
  if (interview) {
    const id = interview.interviewer;
    const interviewer = state.interviewers[id];

    return { ...interview, interviewer };
  }

  return null;
}

export function getInterviewersForDay(state, day) {
  if (state.days.length > 0) {
    const foundDay = state.days.find((dayObj) => dayObj.name === day);
    if (!foundDay) {
      return [];
    }
    const interviewersArray = foundDay.interviewers.map(
      (interviewer) => state.interviewers[interviewer]
    );

    return interviewersArray;
  }
  return [];
}
