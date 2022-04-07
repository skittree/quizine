import React, { useState, useEffect } from "react";
import Header from "../Header";
import GameService from "../API/GameService";
import { useFetchingGameService } from "../hooks/useFetchingGameService";
import Loader from "../UI/Loader/Loader";
import "./Game.css";
import GameModule from "./../UI/game/GameModule";

function Game() {
  const [cluesGame, setCluesGame] = useState([]);

  const [fetchGameService, isGameLoading, gameError] = useFetchingGameService(
    async () => {
      const cluesGame = await GameService.getAll();
      setCluesGame(cluesGame);
      console.log(cluesGame);
    }
  );

  useEffect(() => {
    fetchGameService();
  }, []);

  return (
    <div className="GameApp">
      <Header></Header>
      {isGameLoading ? <Loader /> : <GameModule clues={cluesGame} />}
    </div>
  );
}

export default Game;
