import { useRef } from "react";
import Draggable from "react-draggable";
import "../styles/Board.css";

const initialPlayerPositions = [
  { id: 1, top: 50, left: 50, number: 1 },
  { id: 2, top: 100, left: 150, number: 2 },
  { id: 3, top: 150, left: 250, number: 3 },
  { id: 4, top: 200, left: 350, number: 4 },
  { id: 5, top: 250, left: 450, number: 5 },
  { id: 6, top: 300, left: 550, number: 6 },
  { id: 7, top: 350, left: 650, number: 7 },
  { id: 8, top: 400, left: 750, number: 8 },
  { id: 9, top: 450, left: 850, number: 9 },
  { id: 10, top: 500, left: 950, number: 10 },
  { id: 11, top: 550, left: 100, number: 11 },
];

const Board = () => {
  const boardRef = useRef(null);

  const calculateBounds = (playerId) => {
    const boardElement = boardRef.current;
    if (!boardElement) return { left: 0, top: 0, right: 0, bottom: 0 };
    const { width: boardWidth, height: boardHeight } =
      boardElement.getBoundingClientRect();
    const playerSize = 30; // Assuming player size is 30x30
    const player = initialPlayerPositions.find(
      (player) => player.id === playerId
    );
    if (!player) return { left: 0, top: 0, right: 0, bottom: 0 };
    const left = playerSize - player.left;
    const top = playerSize - player.top;
    const right = boardWidth - playerSize - (player.left + playerSize);
    const bottom = boardHeight - playerSize - (player.top + playerSize);
    return { left, top, right, bottom };
  };

  return (
    <div className="tactical-board" ref={boardRef}>
      {initialPlayerPositions.map((player) => (
        <Draggable key={player.id} bounds={calculateBounds(player.id)}>
          <div className="player">{player.number}</div>
        </Draggable>
      ))}
    </div>
  );
};

export default Board;
