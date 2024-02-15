import { useRef } from "react";
import Draggable from "react-draggable";
import "../styles/Board.css";

const initialPlayerPositions = [
  { id: 1, top: 50, left: 50, number: 1 },
  { id: 2, top: 100, left: 150, number: 2 },
];

const Board = () => {
  const boardRef = useRef(null);

  // Function to calculate bounds dynamically
  const getBounds = () => {
    const boardElement = boardRef.current;
    if (!boardElement) return { left: 0, top: 0, right: 0, bottom: 0 };
    const { width, height } = boardElement.getBoundingClientRect();
    const playerSize = 30; // Assuming player size is 30x30
    const bgImageWidth = 1000; // Width of the background image in pixels
    const bgImageHeight = 500; // Height of the background image in pixels
    const left = playerSize;
    const top = playerSize;
    const right = width - playerSize - (width - bgImageWidth) / 2; // Adjusting for image margins
    const bottom = height - playerSize - (height - bgImageHeight) / 2; // Adjusting for image margins
    return { left, top, right, bottom };
  };

  return (
    <div className="tactical-board" ref={boardRef}>
      {initialPlayerPositions.map((player) => (
        <Draggable key={player.id} bounds={getBounds()}>
          <div className="player">{player.number}</div>
        </Draggable>
      ))}
    </div>
  );
};

export default Board;
