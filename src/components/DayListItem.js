import classNames from "classnames";
import React from "react";
import "components/DayListItem.scss";

function DayListItem(props) {
  const dayClass = classNames(
    "day-list__item",
    { "day-list__item--selected": props.selected },
    { "day-list__item--full": props.spots === 0 }
  );

  const formatSpots = (spots) => {
    const remaining = spots === 0 ? "no" : spots;
    const plural = spots === 1 ? "" : "s";
    return `${remaining} spot${plural} remaining`;
  };

  return (
    <li className={dayClass} onClick={() => props.onChange(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}

export default DayListItem;
