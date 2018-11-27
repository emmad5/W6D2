// const Game = require('../../solution/game.js');// require appropriate file


class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on('click', '.square', (e) => {
      let $square = $(e.target);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    let pos = $square.data('pos');
    console.log(`you clicked ${pos}`);
    this.game.playMove(pos);
    $square.removeClass();
    $square.addClass('white');
    if (this.game.currentPlayer === 'x') {
      $square.attr('id', 'p1');
    } else if (this.game.currentPlayer === 'o'){
      $square.attr('id', 'p2');
    } else {
      alert('WHAT THE HELL');
    }
  }

  setupBoard() {
    // console.log('getting called');
    const $grid = $("<ul>");
    $grid.addClass('black');
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        let $square = $('<li>');
        $square.addClass('square');
        $square.data('pos', [i, j]);
        $grid.append($square);
      }
    }
    this.$el.append($grid);
  }
}

module.exports = View;
