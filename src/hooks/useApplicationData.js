import { useState, useEffect } from "react";
import axios from "axios";
const useApplicationData = () => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const cancelInterview = id => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({ ...state, appointments });
    });
  };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.put(`/api/appointments/${id}`, { interview }).then(data => {
      setState({ ...state, appointments });
    });
  }

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    axios
      .all([
        axios.get("/api/days"),
        axios.get("/api/appointments"),
        axios.get("/api/interviewers"),
      ])
      .then(all => {
        const [days, appointments, interviewers] = all;

        setState(prev => ({
          ...prev,
          days: days.data,
          appointments: appointments.data,
          interviewers: interviewers.data,
        }));
      });
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
};

export default useApplicationData;
