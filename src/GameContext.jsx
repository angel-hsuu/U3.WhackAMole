import { createContext, useContext, useState } from "react";

// create context
const GameContext = createContext();

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(0);
  const [isMoleVisible, setIsMoleVisible] = useState(true);

  // game start
  const startGame = () => {
    setScore(0);
    setIsMoleVisible(true);
    setIsPlaying(true);
  };

  // restart -> welcome
  const restartGame = () => {
    setIsPlaying(false);
  };

  // hammer em moles
  const whackMole = () => {
    setScore((s) => s + 1);
    setIsMoleVisible(false);

    setTimeout(() => {
      setMolePosition((prev) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * 9);
        } while (newIndex === prev);
        return newIndex;
      });
      setIsMoleVisible(true);
    }, 500);
  };

  return (
    <GameContext.Provider
      value={{
        isPlaying,
        score,
        molePosition,
        isMoleVisible,
        startGame,
        restartGame,
        whackMole,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

// hooook it
export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used inside GameProvider");
  return context;
}
