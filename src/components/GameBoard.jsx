import React from "react";
import GameCircle from "./GameCircle";
import "./Game.css";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { isDraw, isWinner, getCorrectPosition } from "./Helper";

const numOfCircles = 16;
const noPlayer = 0;
const player1 = 1;
const player2 = 2;

const gameStatePlaying = 1;
const gameStateWin = 2;
const gameStateDraw = 3;

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(noPlayer));
  const [currentPlayer, setCurrentPlayer] = useState(player1);
  const [gameState, setGameState] = useState(gameStatePlaying);
  const [winPlayer, setWinPlayer] = useState();

  const initial = () => {
    const circles = [];

    for (let i = 0; i < numOfCircles; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };

  const circleClicked = (id) => {
    if (gameBoard[id] !== noPlayer) {
      return;
    }

    if (gameState === gameStateWin || gameState === gameStateDraw) {
      return;
    }

    if (isWinner(gameBoard, id, currentPlayer)) {
      setGameState(gameStateWin);
      setWinPlayer(currentPlayer);
    }

    if (isDraw(gameBoard, id, currentPlayer)) {
      setGameState(gameStateDraw);
      setWinPlayer(noPlayer);
    }

    setGameBoard((prev) => {
      return prev.map((circle, index) => {
        if (index === id) return currentPlayer;
        return circle;
      });
    });

    setCurrentPlayer(currentPlayer === player1 ? player2 : player1);
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        className={`player${gameBoard[id]}`}
        onClicked={circleClicked}
      />
    );
  };

  const initialBoard = () => {
    setGameBoard(Array(16).fill(noPlayer));
    setCurrentPlayer(player1);
    setGameState(gameStatePlaying);
  };

  const suggestMove = () => {
    circleClicked(getCorrectPosition(gameBoard));
  };

  return (
    <>
      <Header
        gameState={gameState}
        player={currentPlayer}
        winPlayer={winPlayer}
      />
      <div className="gameBoard">{initial()}</div>
      <Footer onNewGame={initialBoard} onSuggestMove={suggestMove} />
    </>
  );
};

export default GameBoard;
