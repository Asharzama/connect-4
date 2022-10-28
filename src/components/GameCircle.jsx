import React from "react";
import "./Game.css";

const GameCircle = (props) => {
  const { id, children, onClicked, className } = props;

  return (
    <div className={`gameCircle ${className}`} onClick={() => onClicked(id)}>
      {children}
    </div>
  );
};

export default GameCircle;
