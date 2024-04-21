const { sendAllGames, sendUpdatedGames } = require("../controllers/games");
const {
  getAllGames,
  findGameById,
  deleteGame,
  updateGamesFile,
  checkIsTitleInArray,
  updateGamesArray,
} = require("../middlewares/games");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", getAllGames, sendAllGames);

gamesRouter.delete(
  "/games/:id",
  getAllGames,
  findGameById,
  deleteGame,
  updateGamesFile,
  sendUpdatedGames
);
gamesRouter.post(
  "/games",
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  sendUpdatedGames
);

module.exports = gamesRouter;
