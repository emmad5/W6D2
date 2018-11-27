const View = require('./ttt-view'); // require appropriate file
const Game = require('../../solution/game.js');// require appropriate file

  $(() => {
    let game = new Game();
    new View(game, $('.ttt'));
  });
