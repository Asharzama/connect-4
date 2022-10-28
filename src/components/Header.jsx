import React from "react";

const Header = (props) => {
  const { gameState, player, winPlayer } = props;

  const renderLabel = () => {
    switch (gameState) {
      case 1:
        return <div>Player {player} turn</div>;
      case 2:
        return <div>Player {winPlayer} Wins</div>;
      case 3:
        return <div>Game is Draw!</div>;
      default:
        return;
    }
  };
  return (
    <div className="Panel Header">
      <div className="HeadText">{renderLabel()}</div>
    </div>
  );
};

export default Header;
