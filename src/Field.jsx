import { useGame } from "./GameContext";

const NUM_HOLES = 9;

export default function Field() {
  const { isMoleVisible, molePosition, whackMole } = useGame();

  return (
    <ul className="field">
      {Array.from({ length: NUM_HOLES }).map((_, i) => (
        <li
          key={i}
          className={"hole" + (isMoleVisible && i === molePosition ? " mole" : "")}
          onClick={() => isMoleVisible && i === molePosition && whackMole()}
        ></li>
      ))}
    </ul>
  );
}
