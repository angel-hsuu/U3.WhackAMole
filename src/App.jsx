import { useGame } from "./GameContext";
import Welcome from "./Welcome";
import Field from "./Field";

export default function App() {
  const { isPlaying, score, restartGame } = useGame();

  if (!isPlaying) {
    return <Welcome />;
  }

  return (
    <div>
      <h1>Whack-a-Mole</h1>
      <p>Score: {score}</p>
      <button onClick={restartGame}>Restart</button>
      <Field /> 
    </div>
  );
}