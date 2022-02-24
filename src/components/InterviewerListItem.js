import React from 'react';
import "components/InterviewerListItem.scss";
import classNames from 'classnames';


function InterviewerListItem(props){
  const classes = classNames(
    'interviewers__item', 
    {"interviewers__item--selected":props.selected})
  const selected = props.selected ? props.name : ""

  return (
    <li 
    className={classes}
    onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name} />
      {selected}
    </li>
)
};


export default InterviewerListItem;