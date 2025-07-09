import { useGame } from "./GameContext";

export default function Welcome() {
  const { startGame } = useGame();

  return (
    <div className="welcome">
      <p>Welcome to Whack-a-Mole!</p>
      <p>Click the mole to earn points!</p>
      <button onClick={startGame}>Play</button>
    </div>
  );
}
