import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

function App() {
  const [game, setGame] = useState(new Chess());

  function makeMove(move) {
    const newGame = new Chess(game.fen());
    const result = newGame.move(move);
    if (result) setGame(newGame); // only update if move is valid
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>♟ Chess Website Frontend</h1>
      <p>Play moves on the board!</p>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Chessboard 
          position={game.fen()} 
          onPieceDrop={(source, target) => {
            makeMove({ from: source, to: target, promotion: "q" });
            return true;
          }}
          boardWidth={500}
        />
      </div>
    </div>
  );
}

export default App;
onabort