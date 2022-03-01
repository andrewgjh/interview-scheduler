import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewList.scss";

function InterviewerList(props) {
  const list = props.interviewers.map(interviewer => (
    <InterviewerListItem
      key={interviewer.id} 
      {...interviewer}
      selected={interviewer.id === props.value}
      setInterviewer={() => props.onChange(interviewer.id)}
    />
  ));
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{list}</ul>
    </section>
  );
}

export default InterviewerList;
