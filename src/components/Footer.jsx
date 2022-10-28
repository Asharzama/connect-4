import React from "react";

const Footer = (props) => {
  const { onNewGame, onSuggestMove } = props;
  return (
    <div className="Panel Footer">
      <button onClick={onNewGame}>New Game</button>
      <button onClick={onSuggestMove}>Suggest</button>
    </div>
  );
};

export default Footer;
