class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
  }
  setupTowers() {
    const $board = $("<div>");
    for (var i = 0; i < 3; i++) {
      const $tower = $("<ul>");
      $tower.addClass('tower');
      for (var j = 0; j < 3; j++) {
        let $disc = $('<li>');
        if (i === 0) {
          $disc.addClass(`disc-${j + 1}`);
        }
        $tower.append($disc);
      }
      $board.append($tower);
    }
  }
}

module.exports = HanoiView; 
