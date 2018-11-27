class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    // console.log('getting called');
    const $grid = $("<ul>");
    $grid.addClass('black');
    for (var i = 0; i < 9; i++) {
      let $square = $('<li>');
      $square.attr('id', 'square');
      $grid.append($square);
    }
    this.$el.append($grid);
  }
}

module.exports = View;
